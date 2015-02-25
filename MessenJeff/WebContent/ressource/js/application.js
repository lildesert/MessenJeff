//var wsUri = 'ws://echo.websocket.org/';
var wsUri = 'ws://localhost:8080/MessenJeff/1';
var output;
var image = "https://avatars1.githubusercontent.com/u/5688850?v=3&s=460";
var name = "jeff";
var sDate = "2014-02-05 19:19";
var mousePosition = 'out';
var dateLastMessage = new Date(0);
var idLastSentMessage = 0;
var idLastReceivedMessage = 0;
var typeLastMessage = 'received';

// Display or hide tab

$( document ).ready(function() {

    $("#btn-input").focus(function() {
        mousePosition = 'in';
    }).blur(function() {
        mousePosition = 'out';
    });
        
    $( document ).keypress(function(e) {
        if(e.which == 13 && mousePosition == 'in') {
            takeNewMessage();
        }
    });
    
    $(".panel-heading").click(function(e) {
        $(this).parent().children(".panel-body").toggle();
        $(this).parent().children(".panel-footer").toggle();
    });
});

function takeNewMessage(){
    var newMessage = $( "#btn-input" ).val().trim();
    $( "#btn-input" ).val(null);
    if(newMessage !== '') {
        doSend(newMessage);
    }
}

function testWebSocket() {
    websocket = new WebSocket(wsUri);
    websocket.onopen = function(evt) { onOpen(evt); };
    websocket.onclose = function(evt) { onClose(evt); };
    websocket.onmessage = function(evt) { onMessage(evt); };
    websocket.onerror = function(evt) { onError(evt); };
}

function onOpen(evt) {
  //writeToScreen("CONNECTED");
  doSend('{"sender":"jeff", "message":"hello !", "dtReception":"2009-11-13T20:00", "imgUrl":"https://avatars1.githubusercontent.com/u/5688850?v=3&s=460"}');
}

function onClose(evt) {
    alert("DECO !");
}

function onMessage(evt) {
    var sHtml = "";
    var input = jQuery.parseJSON( evt.data );
    
    if(input.type = 'message'){
        sHtml += '<div class="col-md-10 col-xs-10 message-content"><div class="messages msg_sent">';
        sHtml += input.user[0].image;
        sHtml += '"></div><div class="col-md-10 col-xs-10"><div class="messages msg_receive"><p>';
        sHtml += input.user[0].message;
        sHtml += '</p><time datetime="';
        sHtml += input.user[0].date;
        sHtml += '>' + input.user[0].name + ' * 51 min</time></div></div>';

        $( "#box" ).append(sHtml);
    } else if (input.type = 'writing') { // A person is writing a message
        
    } else if (input.type = 'read') { // A person read the messages
        
    }
}

function onError(evt) {
    //writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
    alert("ERROR : " + evt.data);
}

function doSend(message) {
    
    var now = new Date(); 
    
    if(now - dateLastMessage <= 60000 && typeLastMessage == 'sent') {
        $('#sent_' + idLastSentMessage + ' .messages time').remove();
        sHtml = '<p>' + message + '</p><time datetime="' + sDate + '">' + name + ' * ' + dateLastMessage.getHours() + ':' + dateLastMessage.getMinutes() + ' </time>';
        $('#sent_' + idLastSentMessage + ' .messages').append(sHtml);
        
    } else {
        idLastSentMessage++;
        
        sHtml = '<div id="sent_' + idLastSentMessage + '" class="row msg_container base_sent"><div class="col-md-10 col-xs-10 message-content"><div class="messages msg_sent"><p>';
        sHtml += message;
        sHtml += '</p><time datetime="';
        sHtml += sDate;
        sHtml += '">' + name + ' * ' + dateLastMessage.getHours() + ':' + dateLastMessage.getMinutes() + ' </time>';
        sHtml += '</div></div><div class="col-md-2 col-xs-2 avatar"><img class="img-responsive img-profile" src="' + image;
        sHtml += '"></div>';
      
        $( "#box" ).append(sHtml);
    }
    $("#box").animate({ scrollTop: $("#box")[0].scrollHeight }, "fast");
    dateLastMessage = now;
    typeLastMessage = 'sent';
    websocket.send(message);
}
