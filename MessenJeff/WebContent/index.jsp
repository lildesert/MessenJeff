<html>
    <head>
        <meta charset="utf-8"/>
        <title>MessenJeff</title>
        <link rel="stylesheet" href="./ressource/css/bootstrap.min.css">
        <link rel="stylesheet" href="./ressource/css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="./ressource/css/main.css">
        <script src="./ressource/js/jquery-2.1.3.min.js"></script>
        <script src="./ressource/js/bootstrap.min.js"></script>
        <script src="./ressource/js/application.js"></script>
    </head>
    <body>
        <div class="container">
            <div id="room_1" class="row chat-window col-xs-5 col-md-3" style="margin-left:10px;">
                <div class="col-xs-12 col-md-12">
                    <div class="panel panel-default">
                        <div class="panel-heading top-bar">
                            <div class="col-md-8 col-xs-8">
                                <h3 class="panel-title"></h3>
                            </div>
                            <div class="col-md-4 col-xs-4" style="text-align: right; color: whitesmoke;">
                                Salle t
                            </div>
                        </div>
                        <div id="box" class="panel-body msg_container_base">
                            <div class="row msg_container base_sent">
                                <div class="col-md-10 col-xs-10 message-content">
                                    <div class="messages msg_sent">
                                        <p>that mongodb thing looks good, huh?
                                            tiny master db, and huge document store</p>
                                        <time datetime="2009-11-13T20:00">Timothy * 19h11</time>
                                    </div>
                                </div>
                                <div class="col-md-2 col-xs-2 avatar">
                                    <img class="img-responsive img-profile" src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg">
                                </div>
                            </div>
                            <div class="row msg_container base_receive">
                                <div class="col-md-2 col-xs-2 avatar">
                                    <img class="img-responsive img-profile" src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg">
                                </div>
                                <div class="col-md-10 col-xs-10 message-content">
                                    <div class="messages msg_receive">
                                        <p>that mongodb thing looks good, huh?
                                            tiny master db, and huge document store</p>
                                        <time datetime="2009-11-13T20:00">Timothy * 19h12</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="profile-footer">
                            <div id="user_footer_1">
                                <img class="img-responsive img-profile-footer" src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg">
                                <img class="img-responsive img-load" src="./ressource/img/load.gif">
                            </div>
                            <div id="user_footer_2">
                                <img class="img-responsive img-profile-footer" src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg">
                                <img class="img-responsive img-load" src="./ressource/img/load.gif">
                            </div>
                        </div>
                        <div class="panel-footer">
                            <div class="input-group input-message">
                                <input id="btn-input" type="text" class="form-control input-sm chat_input" placeholder="Write your message here..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
