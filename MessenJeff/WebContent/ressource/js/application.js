//var wsUri = 'ws://echo.websocket.org/';
var wsUri = 'ws://localhost:8080/MessenJeff/chat/';
var output;
var image = "https://avatars1.githubusercontent.com/u/5688850?v=3&s=460";
var name = "jeff";
var sDate = "2014-02-05 19:19";

$( document ).ready(function() {
	$( "#btn-chat" ).click(function() {
		doSend($( "#btn-input" ).val().trim());
		$( "#btn-input" ).val(' ');
	});
});

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
	//writeToScreen("DISCONNECTED");
	alert("DECO !");
}

function onMessage(evt) {
	var sHtml = "";
	var input = jQuery.parseJSON( evt.data );
	
	sHtml += '<div class="row msg_container base_receive"> <div class="col-md-2 col-xs-2 avatar"><img src="';
	sHtml += input.user[0].image;
	sHtml += '"></div><div class="col-md-10 col-xs-10"><div class="messages msg_receive"><p>';
	sHtml += input.user[0].message;
	sHtml += '</p><time datetime="';
	sHtml += input.user[0].date;
	sHtml += '>' + input.user[0].name + ' • 51 min</time></div></div></div>';
	
	$( "#box" ).append(sHtml);
	websocket.close();
}

function onError(evt) {
	//writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
	alert("ERROR : " + evt.data);
}

function doSend(message) {
	sHtml = '<div class="row msg_container base_sent"><div class="col-md-2 col-xs-2 avatar"><img src="';
	sHtml += image;
	sHtml += '"></div><div class="col-md-10 col-xs-10"><div class="messages msg_sent"><p>';
	sHtml += message;
	sHtml += '</p><time datetime="';
	sHtml += sDate;
	sHtml += '>' + name + ' • 51 min</time></div></div></div>';
	
	$( "#box" ).append(sHtml);
	websocket.send(message);
}