alert('SceneDefault.js loaded');

var slected_proyect = 0;

function SceneDefault() {

};

SceneDefault.prototype.initialize = function () {
	alert("SceneDefault.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	
	sf.service.PIG.show('tvsignal');
	$("#categorias").hide();
      
      var proyects = new Usergrid.Collection({ 'client':client, 'type':'proyects' });
                  proyects.fetch(
                      function() { // Success
                          while(proyects.hasNextEntity()) {
                              var proyect = proyects.getNextEntity();
                              $("#lista").append("<li id="+proyect.get('name')+"> Pulsa "+proyect.get('name')+" para: " + proyect.get('program') + "</li>");
                              }
                      }, function() { // Failure
                          alert('read failed');
                      }
                  );
                  
    var channel = webapis.tv.channel.getCurrentChannel();
    var program = webapis.tv.channel.getCurrentProgram();

	$('#info').sfLabel({
		text:'Canal: '+channel.sourceID+' - '+channel.programNumber+' - '+channel.channelName
	});
	$('#info2').sfLabel({
		text:'Programa:'+program.title+' ('+program.startTime+')'
	});
};

SceneDefault.prototype.handleShow = function (data) {
	alert("SceneDefault.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneDefault.prototype.handleHide = function () {
	alert("SceneDefault.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneDefault.prototype.handleFocus = function () {
	alert("SceneDefault.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneDefault.prototype.handleBlur = function () {
	alert("SceneDefault.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneDefault.prototype.handleKeyDown = function (keyCode) {
	alert("SceneDefault.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	var proyect_load;
	var KEY_1 = 101;
	var KEY_2 = 98;
	var RED = 108;
	var GREEN = 20;
	var YELLOW = 21;
	var BLUE = 22;
	
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
		case KEY_1:
			selected_proyect = 1;
			proyect_load = {
			    type:'proyects',
			    name:'1'
			};
			
			client.getEntity(proyect_load, function (err, proyect) {
			    if (err){

			    } else {
			    	$("#categorias").empty();
			    	$("#categorias").append("<li> Pulsa Rojo para: " +proyect.get('cat1') + "</li>");
			    	$("#categorias").append("<li> Pulsa Verde para: " +proyect.get('cat2') + "</li>");
			    	$("#categorias").append("<li> Pulsa Amarillo para: " +proyect.get('cat3') + "</li>");
			    	$("#categorias").append("<li> Pulsa Azul para: " +proyect.get('cat4') + "</li>");
			        $("#lista").hide();
			    	$("#categorias").show();
			    }
			});
			break;
			
		case KEY_2:
			selected_proyect = 2;
			proyect_load = {
			    type:'proyects',
			    name:'2'
			};
			
			client.getEntity(proyect_load, function (err, proyect) {
			    if (err){

			    } else {
			    	$("#categorias").empty();
			    	$("#categorias").append("<li> Pulsa Rojo para: " +proyect.get('cat1') + "</li>");
			    	$("#categorias").append("<li> Pulsa Verde para: " +proyect.get('cat2') + "</li>");
			    	$("#categorias").append("<li> Pulsa Amarillo para: " +proyect.get('cat3') + "</li>");
			    	$("#categorias").append("<li> Pulsa Azul para: " +proyect.get('cat4') + "</li>");
			        $("#lista").hide();
			    	$("#categorias").show();
			    }
			});
			break;
			
		case RED:
			proyect_load = {
			    type:'proyects',
			    name:selected_proyect
			};
			
			client.getEntity(proyect_load, function (err, proyect) {
			    if (err){

			    } else {
			    	
			    	var results = proyect.get('cat1_results')+1;
			    	proyect.set("cat1_results",results);
			    	
			    	proyect.save(function(err){
			    		if (err){
			    			//error('dog not saved');
			    		} else {
			    			//success('dog is saved');
			    			$("#lista").show();
					    	$("#categorias").hide();
			    		}
			    	});
			    }
			});
			break;
			
		case GREEN:
			proyect_load = {
			    type:'proyects',
			    name:selected_proyect
			};
			
			client.getEntity(proyect_load, function (err, proyect) {
			    if (err){

			    } else {
			    	
			    	var results = proyect.get('cat2_results')+1;
			    	proyect.set("cat2_results",results);
			    	
			    	proyect.save(function(err){
			    		if (err){
			    			//error('dog not saved');
			    		} else {
			    			//success('dog is saved');
			    			$("#lista").show();
					    	$("#categorias").hide();
			    		}
			    	});
			    }
			});
			break;
			
		case YELLOW:
			proyect_load = {
			    type:'proyects',
			    name:selected_proyect
			};
			
			client.getEntity(proyect_load, function (err, proyect) {
			    if (err){

			    } else {
			    	
			    	var results = proyect.get('cat3_results')+1;
			    	proyect.set("cat3_results",results);
			    	
			    	proyect.save(function(err){
			    		if (err){
			    			//error('dog not saved');
			    		} else {
			    			//success('dog is saved');
			    			$("#lista").show();
					    	$("#categorias").hide();
			    		}
			    	});
			    }
			});
			break;
			
		case BLUE:
			proyect_load = {
			    type:'proyects',
			    name:selected_proyect
			};
			
			client.getEntity(proyect_load, function (err, proyect) {
			    if (err){

			    } else {
			    	
			    	var results = proyect.get('cat4_results')+1;
			    	proyect.set("cat4_results",results);
			    	
			    	proyect.save(function(err){
			    		if (err){
			    			//error('dog not saved');
			    		} else {
			    			//success('dog is saved');
			    			$("#lista").show();
					    	$("#categorias").hide();
			    		}
			    	});
			    }
			});
			break;
			
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};