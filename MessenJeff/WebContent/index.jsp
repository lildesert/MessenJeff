<html>
	<head>
		<meta charset="utf-8" />
		<title>Plop</title>
		<script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>	
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
		<script src="./application.js"></script>
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
			<div id="groupe" class="well">
				<h3>Salle B</h3>
				<form>
				  <div class="form-group">
					<textarea class="form-control" rows="3"></textarea>
					<label for="exampleInputEmail1">Pseudonyme</label>
					<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Votre message...">
				  </div>
				  <button type="submit" class="btn btn-default">Envoyer le message</button>
					</br></br>
					<button id="sortir" type="submit" class="btn btn-default">Sortir</button>
				</form>
			</div>
		</div>
  	</body>
	
</html>
