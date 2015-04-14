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
        <div id="rooms">
        </div>
    </body>
</html>
