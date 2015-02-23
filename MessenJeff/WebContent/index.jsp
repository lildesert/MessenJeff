<html>
	<head>
		<meta charset="utf-8" />
		<title>Plop</title>
		<script src="./ressource/js/jquery-2.1.3.min.js"></script>	
		<link rel="stylesheet" href="./ressource/css/bootstrap.min.css">
		<link rel="stylesheet" href="./ressource/css/bootstrap-theme.min.css">
		<link rel="stylesheet" href="./ressource/css/main.css">
		<script src="./ressource/js/bootstrap.min.js"></script>
		<script src="./ressource/js/application.js"></script>
	</head>
	
	<body>
		<div id="main" style="margin:auto; width: 400px;">
			<div id="accueil" class="well">
				<h2>Accueil</h2>
				<form>
				  <div class="form-group">
					<label for="exampleInputEmail1">Pseudonyme</label>
					<input type="email" class="form-control" id="exampleInputEmail1"	>
				  </div>
					<div class="form-group">
					  <label for="disabledSelect">Salle</label>
					  <select id="disabledSelect" class="form-control">
						<option>Salle 1</option>
					  </select>
					</div>
				  <button id="entrer" type="submit" class="btn btn-default">Enter</button>
				</form>
			</div>
		</div>
		
		
	<div class="container">
    <div class="row chat-window col-xs-5 col-md-3" id="chat_window_1" style="margin-left:10px;">
        <div class="col-xs-12 col-md-12">
        	<div class="panel panel-default">
                <div class="panel-heading top-bar">
                    <div class="col-md-8 col-xs-8">
                        <h3 class="panel-title"></h3>
                    </div>
                    <div class="col-md-4 col-xs-4" style="text-align: right;">
                        <a href="#"><span id="minim_chat_window" class="glyphicon glyphicon-minus icon_minim"></span></a>
                        <a href="#"><span class="glyphicon glyphicon-remove icon_close" data-id="chat_window_1"></span></a>
                    </div>
                </div>
                <div id="box" class="panel-body msg_container_base">
                    <div class="row msg_container base_sent">
                        <div class="col-md-10 col-xs-10">
                            <div class="messages msg_sent">
                                <p>that mongodb thing looks good, huh?
                                tiny master db, and huge document store</p>
                                <time datetime="2009-11-13T20:00">Timothy • 51 min</time>
                            </div>
                        </div>
                        <div class="col-md-2 col-xs-2 avatar">
                            <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive ">
                        </div>
                    </div>
                    <div class="row msg_container base_receive">
                        <div class="col-md-2 col-xs-2 avatar">
                            <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive ">
                        </div>
                        <div class="col-md-10 col-xs-10">
                            <div class="messages msg_receive">
                                <p>that mongodb thing looks good, huh?
                                tiny master db, and huge document store</p>
                                <time datetime="2009-11-13T20:00">Timothy • 51 min</time>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel-footer">
                    <div class="input-group">
                        <input id="btn-input" type="text" class="form-control input-sm chat_input" placeholder="Write your message here..." />
                        <span class="input-group-btn">
                        <button class="btn btn-primary btn-sm" id="btn-chat">Send</button>
                        </span>
                    </div>
                </div>
    		</div>
        </div>
    </div>
    
  	</body>
	
</html>
