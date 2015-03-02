var wsUri = 'ws://0.0.0.0:8080/MessenJeff/chat/java';
var output;
var image = "https://avatars1.githubusercontent.com/u/5688850?v=3&s=460";
var name = "Jeff";
var sDate = "2014-02-05 19:19";
var mousePosition = 'out';
var dateLastMessage = new Date(0);
var idLastSentMessage = 0;
var idLastReceivedMessage = 0;
var typeLastMessage = 'received';
var users = [];

$( document ).ready(function() {
    
    initWebSocket();
    
    // Detect when the user is in the input box
    $("#btn-input").focus(function() {
        mousePosition = 'in';
    }).blur(function() {
        mousePosition = 'out';
    });
    // Press "Enter" to send a new message
    $( document ).keypress(function(e) {
        if(e.which == 13 && mousePosition == 'in') {
            takeNewMessage();
        }
    });
    //Display or hide a room
    $(".panel-heading").click(function(e) {
        $(this).parent().children(".panel-body").toggle();
        $(this).parent().children(".profile-footer").toggle();
        $(this).parent().children(".panel-footer").toggle();
    });
});

//*******************************************
// WEBSOCKET
//*******************************************

function initWebSocket() {
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
    //alert("DECO !");
}

function onMessage(evt) {
    var input = jQuery.parseJSON( evt.data );
    if(input.type == 'message') {
        receiveMessage(input.user[0]);
    } else if (input.type == 'reader') {
        
    } else if (input.type == 'writing') {
        
    } else if (input.type == 'stopwriting') {
        
    }
}

function onError(evt) {
    //writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
    //alert("ERROR : " + evt.data);
}

//*******************************************
// MESSAGES
//*******************************************

function takeNewMessage(){
    var newMessage = $( "#btn-input" ).val().trim();
    $( "#btn-input" ).val(null);
    if(newMessage !== '') {
        doSend(newMessage);
    }
}

function receiveMessage(userM){
    var sHtml = '<div class="col-md-10 col-xs-10 message-content"><div class="messages msg_sent">';
    sHtml += userM.image;
    sHtml += '"></div><div class="col-md-10 col-xs-10"><div class="messages msg_receive"><p>';
    sHtml += userM.message;
    sHtml += '</p><time datetime="';
    sHtml += userM.date;
    sHtml += '>' + userM.name + ' * 51 min</time></div></div>';
    
    $( "#box" ).append(sHtml);
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
    removeUsersAfterNewMessage();
    $("#box").scrollTop($("#box")[0].scrollHeight);
    dateLastMessage = now;
    typeLastMessage = 'sent';
    websocket.send(message);
}

function addUser(id, name, isWriting, image){
    if(image==''){
        image = 'http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg';
    }
    var user = {
        id: id,
        name: name,
        isWriting: isWriting,
        image: image
    };
    users.push(user);
}

function removeUsersAfterNewMessage(){
    var i;
    for (i=0;i<users.length;i++){
        if(!users[i].isWriting) {
            $("#user_footer_"+users[i].id).remove();
            users.splice(i);
        }
    }
}

function removeUsers(){
    var i;
    for (i=0;i<users.length;i++){
        $("#user_footer_"+users[i].id).remove();
        users.splice(i, 1);
    }
}

function displayUsers(){
    $(".profile-footer div").remove();
    for (i=0;i<users.length;i++){
        sHtml = '<div id="user_footer_1">';
        sHtml += '<img class="img-responsive img-profile-footer" src="' + users[i].image + '">';
        if(users[i].isWriting){
            sHtml += '<img class="img-responsive img-load" src="./ressource/img/load.gif">';
        } else {
            sHtml += '<img class="img-responsive img-load" style="display: none;" src="./ressource/img/load.gif">';
        }
        sHtml += '</div>';
        $(".profile-footer").append(sHtml);
    }
}

function userStartWriting(id){
    $("#user_footer_" + id + " .img-load").show();
}

function userStopWriting(id){
    $("#user_footer_" + id + " .img-load").hide();
}
