alert('SceneRegistro.js loaded');

var username = '';
var password = '*';
var password2 = '-';
var mail = '';

function SceneRegistro() {

};

SceneRegistro.prototype.initialize = function () {
	alert("SceneRegistro.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	
	$("#usuarios").append(userCount+" analistas se han unido ya a nuestra comunidad.");
	
	$('#userR').sfTextInput({
		text:'',
		maxlength:30,
		oncomplete: function (text) 
		{
		    if (text) {
		    	username = text;
		    	$('#mailR').sfTextInput('focus');
		    	$('#mailR').sfTextInput('setKeypadPos', 150, 200);
		    }
		    else {
		    	//error
		    }
		}
	});
	$('#mailR').sfTextInput({
		text:'',
		maxlength:30,
		oncomplete: function (text) 
		{
		    if (text) {
		    	mail = text;
		    	$('#pass1R').sfTextInput('focus');
		    	$('#pass1R').sfTextInput('setKeypadPos', 150, 200);
		    }
		    else {
		    	//error
		    }
		}
	});
	$('#pass2R').sfTextInput({
		text:'',
		maxlength:30,
		oncomplete: function (text) 
		{
		    if (text) {
		    	password2 = text;
		    	createUser();
		    }
		    else {
		    	//error
		    }
		}
	});
	$('#pass1R').sfTextInput({
		text:'',
		maxlength:30,
		oncomplete: function (text) 
		{
		    if (text) {
		    	password = text;
		    	$('#pass2R').sfTextInput('focus');
		    	$('#pass2R').sfTextInput('setKeypadPos', 150, 200);
		    }
		    else {
		    	//error
		    }
		}
	});
	$('#lUserR').sfLabel({
		text:'Nombre de Usuario:'
	});
	$('#lMailR').sfLabel({
		text:'Correo electrónico:'
	});
	$('#lPass1R').sfLabel({
		text:'Contraseña (2 veces):'
	});
};

SceneRegistro.prototype.handleShow = function (data) {
	alert("SceneRegistro.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneRegistro.prototype.handleHide = function () {
	alert("SceneRegistro.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneRegistro.prototype.handleFocus = function () {
	alert("SceneRegistro.handleFocus()");
	// this function will be called when the scene manager focus this scene
	$('#userR').sfTextInput('blur');
	$('#mailR').sfTextInput('blur');
	$('#pass1R').sfTextInput('blur');
	$('#pass2R').sfTextInput('blur');
};

SceneRegistro.prototype.handleBlur = function () {
	alert("SceneRegistro.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneRegistro.prototype.handleKeyDown = function (keyCode) {
	alert("SceneRegistro.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
		case sf.key.LEFT:
			sf.scene.show('Login');
			sf.scene.focus('Login');
			sf.scene.hide('Registro');
			break;
		case sf.key.RIGHT:
			$('#userR').sfTextInput('focus');
			$('#userR').sfTextInput('setKeypadPos', 150, 200);
			break;
		case sf.key.UP:
			$('#userR').sfTextInput('focus');
			$('#userR').sfTextInput('setKeypadPos', 150, 200);
			break;
		case sf.key.DOWN:
			$('#userR').sfTextInput('focus');
			$('#userR').sfTextInput('setKeypadPos', 150, 200);
			break;
		case sf.key.ENTER:
			$('#userR').sfTextInput('focus');
			$('#userR').sfTextInput('setKeypadPos', 150, 200);
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};

function createUser() {

	if(password==password2){
		client.signup(username, password, mail, username,
			function (err, username) {
				if (err){
					alert('user not created');
				} else {
					alert('user created');
					sf.scene.show('Login');
					sf.scene.focus('Login');
					sf.scene.hide('Registro');
				}
			}
		);
	}
}