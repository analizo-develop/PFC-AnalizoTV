
function onStart () {
	// TODO : Add your Initilize code here
	// NOTE : In order to start your app, call "sf.start()" at the end of this function!!
	/*if (client.isLoggedIn()) {
		client.getLoggedInUser(function(err, data, user) {
			if(err) {
				alert('could not get logged in user');
			} else {
				alert('got logged in user: '+user.get('username'));
			}
		});
		
		sf.scene.show('Default');
		sf.scene.focus('Default');
	}
	else{ 
		sf.scene.show('Login');
		sf.scene.focus('Login');
	}*/
	sf.scene.show('Splash');
	sf.scene.focus('Splash');
	
}
function onDestroy () {
	//stop your XHR or Ajax operation and put codes to distroy your application here
	
}

alert("init.js loaded.");