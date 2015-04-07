var wsUri = 'ws://' + document.location.host + document.location.pathname + 'chat/';
var output;
var image = 'https://avatars1.githubusercontent.com/u/5688850?v=3&s=460';
var name = '';
var room = ''
var sDate = "2014-02-05 19:19";
var mousePosition = 'out';
var dateLastMessage = new Date(0);
var idLastSentMessage = 0;
var idLastReceivedMessage = 0;
var typeLastMessage = 'received';
var users = [];
var rooms [];
var websocket;

$( document ).ready(function() {
    
    $("#username").focus();
    
    $("#enterRoom").click(function(e) {
        if($("#image").val().trim()!=''){
            image = $("#image").val().trim();
        }
        room = $('#salle').val().trim();
        name =  $("#username").val().trim();
        initWebSocket();
        createRoom();
    });
    
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
    websocket = new WebSocket(wsUri + room);
    websocket.onopen = function(evt) { onOpen(evt); };
    websocket.onclose = function(evt) { onClose(evt); };
    websocket.onmessage = function(evt) { onMessage(evt); };
    websocket.onerror = function(evt) { onError(evt); };
}

function onOpen(evt) {
    console.log('Connected. User:' + name + '/Salle:' + salle);
}

function onClose(evt) {
    console.log('Deco!');
}

function onMessage(evt) {
    console.log('Message!');
    console.log(evt.data);
    var input = jQuery.parseJSON( evt.data );
    receiveMessage(input);
}

function onError(evt) {
    console.log(evt);
}

//*******************************************
// ROOM
//*******************************************

function createRoom(){
    newID = rooms.length + 1;
    newRoom = room;
    rooms[newID]= newRoom;
    sHtml = '<div id="room_'+newID+'" class="row chat-window col-xs-5 col-md-3" style="margin-left:10px;">';
    sHtml += ' <div class="col-xs-12 col-md-12"><div class="panel panel-default">';
    sHtml += '<div class="panel-heading top-bar"><div class="col-md-8 col-xs-8"><h3 class="panel-title"></h3></div>'
    sHtml += '<div class="col-md-4 col-xs-4" style="text-align: right; color: whitesmoke;">' + newRoom;
    sHtml += '</div></div><div id="box" class="panel-body msg_container_base"></div>';
    sHtml += '<div class="profile-footer"></div><div class="panel-footer">';
    sHtml += '<div class="input-group input-message">'
    sHtml += '<input id="btn-input" type="text" class="form-control input-sm chat_input" placeholder="Write your message here..." />';
    sHtml += '</div></div></div></div></div>';
    $('#rooms').append(sHTML);
    console.log('New room added');
}

function deleteRoom(idRoom){
    delete(rooms.idRoom);
    $('#room_'+idRoom).remove();
    console.log('Room deleted');
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

function receiveMessage(m){
    if(m.name != name) {
        var sHtml = '<div class="row msg_container base_receive"><div class="col-md-2 col-xs-2 avatar">';
        sHtml += '<img class="img-responsive img-profile" src="' + image + '"></div>';
        sHtml += '<div class="col-md-10 col-xs-10 message-content"><div class="messages msg_receive"><p>';
        sHtml += m.message + '</p><time datetime="2009-11-13T20:00">' + m.sender + '* 19h12</time>';
        sHtml += '</div></div></div>';
        
        $( "#box" ).append(sHtml);
        $("#box").scrollTop($("#box")[0].scrollHeight);
    }
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
        sHtml += message + '</p><time datetime="' + sDate;
        sHtml += '">' + name + ' * ' + dateLastMessage.getHours() + ':' + dateLastMessage.getMinutes() + ' </time>';
        sHtml += '</div></div><div class="col-md-2 col-xs-2 avatar"><img class="img-responsive img-profile" src="' + image;
        sHtml += '"></div>';
      
        $( "#box" ).append(sHtml);
    }
    removeUsersAfterNewMessage();
    $("#box").scrollTop($("#box")[0].scrollHeight);
    dateLastMessage = now;
    typeLastMessage = 'sent';
    var msg = '{"message":"' + message + '", "sender":"'+ name +'", "received":""}';    
    websocket.send(msg);
    console.log('Sent : ' + msg);
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
