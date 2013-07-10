alert('SceneLogin.js loaded');

var username = '';
var password = '';


function SceneLogin() {

};

SceneLogin.prototype.initialize = function () {
	
	alert("SceneLogin.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	$('#password').sfTextInput({
		text:'',
		maxlength:30,
		oncomplete: function (text) 
		{
	        if (text) {
	        	password = text;
	        	loginUser();
	        }
	        else {
	        	//error
	        }
	    }
	});
	$('#user').sfTextInput({
		text:'',
		maxlength:30,
		oncomplete: function (text) 
		{
	        if (text) {
	        	username = text;
	        	$('#password').sfTextInput('focus');
	        	$('#password').sfTextInput('setKeypadPos', 400, 170);
	        }
	        else {
	        	//error
	        }
	    }
	});
	$('#lUsuario').sfLabel({
		text:'Nombre de usuario:'
	});
	$('#lPass').sfLabel({
		text:'Contraseña:'
	});

};

SceneLogin.prototype.handleShow = function (data) {
	alert("SceneLogin.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneLogin.prototype.handleHide = function () {
	alert("SceneLogin.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneLogin.prototype.handleFocus = function () {
	alert("SceneLogin.handleFocus()");
	// this function will be called when the scene manager focus this scene
	$('#user').sfTextInput('blur');
	$('#password').sfTextInput('blur');
};

SceneLogin.prototype.handleBlur = function () {
	alert("SceneLogin.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneLogin.prototype.handleKeyDown = function (keyCode) {
	alert("SceneLogin.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
		case sf.key.LEFT:
			$('#user').sfTextInput('focus');
			$('#user').sfTextInput('setKeypadPos', 400, 170);
			break;
		case sf.key.RIGHT:
			sf.scene.hide('Login');
			sf.scene.show('Registro');
			sf.scene.focus('Registro');
			break;
		case sf.key.UP:
			$('#user').sfTextInput('focus');
			$('#user').sfTextInput('setKeypadPos', 400, 170);
			break;
		case sf.key.DOWN:
			$('#user').sfTextInput('focus');
			$('#user').sfTextInput('setKeypadPos', 400, 170);
			break;
		case sf.key.ENTER:
			$('#user').sfTextInput('focus');
			$('#user').sfTextInput('setKeypadPos', 400, 170);
			break;
		case sf.key.RETURN:
			event.preventDefault();
			break;
		case sf.key.TOOLS:
			event.preventDefault();
			break;
		case sf.key.EXIT:
			event.preventDefault();
			sf.core.exit(false);
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};

function loginUser() {
	client.logout();
	client.login(username, password,
		function (err) {
			if (err) {
				alert('could not log user in');
			} else {
				alert('user has been logged in');

				//the login call will return an OAuth token, which is saved
				//in the client. Any calls made now will use the token.
				//once a user has logged in, their user object is stored
				//in the client and you can access it this way:
				var token = client.token;

				//Then make calls against the API.  For example, you can
				//get the user entity this way:
				client.getLoggedInUser(function(err, data, user) {
					if(err) {
						alert('could not get logged in user');
					} else {
						alert('got logged in user');

						//you can then get info from the user entity object:
						//var username = user.get('username');
						//notice('logged in user was: ' + username);
						sf.scene.hide('Login');
		                sf.scene.show('Default');
		            	sf.scene.focus('Default');

					}
				});

			}
		}
	);
}
