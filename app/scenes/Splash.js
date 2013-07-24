alert('SceneSplash.js loaded');

function SceneSplash() {

};

SceneSplash.prototype.initialize = function () {
	alert("SceneSplash.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called

	$('#loading').sfLoading('show');
	
	  var options = {
		  		type:'users',
		  		qs:{limit:9999} //limit statement set to 9999
		  	}
	  
	client.createCollection(options, function (err, users) {
			if (err) {
				error('could not get all channels');
			} else {
				//we got 50 channels, now display the Entities:
				while(users.hasNextEntity()) {
					//get a reference to the dog
					var user = users.getNextEntity();
					userCount=userCount+1;
				}
			}
		});
	
	setTimeout(
			  function() 
			  {
					if (client.isLoggedIn()) {
						client.getLoggedInUser(function(err, data, user) {
							if(err) {
								alert('could not get logged in user');
								client.logout();
								$('#loading').sfLoading('hide');
								sf.scene.hide('Splash');;
								sf.scene.show('Login');
								sf.scene.focus('Login');
								
							} else {
								alert('got logged in user: '+user.get('username'));
							}
						
						});
						
						$('#loading').sfLoading('hide');
						sf.scene.hide('Splash');
						sf.scene.show('Default');
						sf.scene.focus('Default');
					}
					else{ 
						$('#loading').sfLoading('hide');
						sf.scene.hide('Splash');
						sf.scene.show('Login');
						sf.scene.focus('Login');
						
					}
			  }, 7000);
	
};

SceneSplash.prototype.handleShow = function (data) {
	alert("SceneSplash.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneSplash.prototype.handleHide = function () {
	alert("SceneSplash.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneSplash.prototype.handleFocus = function () {
	alert("SceneSplash.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneSplash.prototype.handleBlur = function () {
	alert("SceneSplash.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneSplash.prototype.handleKeyDown = function (keyCode) {
	alert("SceneSplash.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
		case sf.key.LEFT:
			break;
		case sf.key.RIGHT:
			break;
		case sf.key.UP:
			break;
		case sf.key.DOWN:
			break;
		case sf.key.ENTER:
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