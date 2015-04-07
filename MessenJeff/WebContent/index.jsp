<html>
    <head>
        <meta charset="utf-8"/>
        <title>MessenJeff</title>
        <link rel="stylesheet" href="./ressource/css/bootstrap.min.css">
        <link rel="stylesheet" href="./ressource/css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="./ressource/css/main.css">
        <link rel="stylesheet" href="./ressource/css/form.css">
        <script src="./ressource/js/jquery-2.1.3.min.js"></script>
        <script src="./ressource/js/bootstrap.min.js"></script>
        <script src="./ressource/js/application.js"></script>
    </head>
    <body>
        <section id="main">
            <div class="login-container center">
                <div class="title text-transparent"></div>
                <hr class="main">
                <form class="login-form">
                    <ul class="fields-list">
                        <li>
                            <i class="icon-envelope-alt" style="float: left;"></i>
                            <input autocomplete="off" id="username" name="name" placeholder="name" type="text">
                        </li>
                        <li>
                            <i class="icon-user" style="float: left;"></i>
                            <input autocomplete="off" id="userimage" name="image" placeholder="image" type="text">
                        </li>
                        <li>
                            <i class="icon-user" style="float: left;"></i>
                            <input autocomplete="off" id="salle" name="salle" placeholder="salle" type="text">
                        </li>
                    </ul>
                    <div class="actions clearfix">
                        <a id="enterRoom" href="javascript:void(0);" class="btn btn-large medium-blue login-btn">
                            Enter
                        </a>
                    </div>
                    <hr class="main">
                    <div class="social-actions">
                        <a href="#" rel="tooltip" data-placement="top" data-original-title="Twitter Login" class="social-link text-transparent"><i class="icon-twitter"></i></a>
                        <a href="#" rel="tooltip" data-placement="top" data-original-title="Facebook Login" class="social-link text-transparent"><i class="icon-facebook"></i></a>
                    </div>
                </form>
            </div>
        </section>
        <div class="">
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
