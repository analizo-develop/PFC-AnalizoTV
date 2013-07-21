alert('SceneInfo.js loaded');

function SceneInfo() {

};

SceneInfo.prototype.initialize = function () {
	alert("SceneInfo.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called

};

SceneInfo.prototype.handleShow = function (data) {
	alert("SceneInfo.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneInfo.prototype.handleHide = function () {
	alert("SceneInfo.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneInfo.prototype.handleFocus = function () {
	alert("SceneInfo.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneInfo.prototype.handleBlur = function () {
	alert("SceneInfo.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneInfo.prototype.handleKeyDown = function (keyCode) {
	alert("SceneInfo.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
		case sf.key.LEFT:
			break;
		case sf.key.RIGHT:
			sf.scene.show('Login');
			sf.scene.focus('Login');
			sf.scene.hide('Info');
			break;
		case sf.key.UP:
			break;
		case sf.key.DOWN:
			break;
		case sf.key.ENTER:
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};
