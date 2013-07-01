alert('SceneDefault.js loaded');

var selected_proyect = -1;
var channel;
var program;

function SceneDefault() {

};

SceneDefault.prototype.initialize = function () {
	alert("SceneDefault.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	
	//Disable + - Channel button
	sf.service.setChannelControl('disable');
	
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
	var KEY_3 = 6;
	var KEY_4 = 8;
	var KEY_5 = 9;
	var KEY_6 = 10;
	var KEY_7 = 12;
	var KEY_8 = 13;
	var KEY_9 = 14;
	var KEY_0 = 17;
	
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
			//to get channel info
			//channelInfo2API();
			break;
		case KEY_1:
			if (selected_proyect == -1){
			selected_proyect = 1;
			proyect_load = {
			    type:'proyects',
			    name:'1'
			};
			
			loadCategories(proyect_load);
			tuneChannel(proyect_load);
			}
			
			
			break;
			
		case KEY_2:
			if (selected_proyect == -1){
			selected_proyect = 2;
			proyect_load = {
			    type:'proyects',
			    name:'2'
			};
			
			loadCategories(proyect_load);
			tuneChannel(proyect_load);
			}
			break;
			
		case KEY_3:
			if (selected_proyect == -1){
			selected_proyect = 3;
			proyect_load = {
			    type:'proyects',
			    name:'3'
			};
			
			loadCategories(proyect_load);
			tuneChannel(proyect_load);
			}
			break;
			
		case KEY_4:
			if (selected_proyect == -1){
			selected_proyect = 4;
			proyect_load = {
			    type:'proyects',
			    name:'4'
			};
			
			loadCategories(proyect_load);
			tuneChannel(proyect_load);
			}
			break;
			
		case KEY_5:
			if (selected_proyect == -1){
			selected_proyect = 5;
			proyect_load = {
			    type:'proyects',
			    name:'5'
			};
			
			loadCategories(proyect_load);
			tuneChannel(proyect_load);
			}
			break;
			
		case KEY_6:
			if (selected_proyect == -1){
			selected_proyect = 6;
			proyect_load = {
			    type:'proyects',
			    name:'6'
			};
			
			loadCategories(proyect_load);
			tuneChannel(proyect_load);
			}
			break;
			
		case KEY_7:
			if (selected_proyect == -1){
			selected_proyect = 7;
			proyect_load = {
			    type:'proyects',
			    name:'7'
			};
			
			loadCategories(proyect_load);
			tuneChannel(proyect_load);
			}
			break;
			
		case KEY_8:
			if (selected_proyect == -1){
			selected_proyect = 8;
			proyect_load = {
			    type:'proyects',
			    name:'8'
			};
			
			loadCategories(proyect_load);
			tuneChannel(proyect_load);
			}
			break;
			
		case KEY_9:
			if (selected_proyect == -1){
			selected_proyect = 9;
			proyect_load = {
			    type:'proyects',
			    name:'9'
			};
			
			loadCategories(proyect_load);
			tuneChannel(proyect_load);
			}
			break;
			
		case KEY_0:
			if (selected_proyect == -1){
			selected_proyect = 0;
			proyect_load = {
			    type:'proyects',
			    name:'0'
			};
			
			loadCategories(proyect_load);
			tuneChannel(proyect_load);
			}
			break;
			
			
		case RED:
			if (selected_proyect > -1){
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
			    			//error('proyect not saved');
			    		} else {
			    			//success('proyect is saved');
			    			$("#lista").show();
					    	$("#categorias").hide();
			    		}
			    	});
			    }
			});
			
			selected_proyect =-1;
			}
			break;
			
		case GREEN:
			if (selected_proyect > -1){
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
			    			//error('proyect not saved');
			    		} else {
			    			//success('proyect is saved');
			    			$("#lista").show();
					    	$("#categorias").hide();
			    		}
			    	});
			    }
			});
			
			selected_proyect =-1;
			}
			break;
			
		case YELLOW:
			if (selected_proyect > -1){
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
			    			//error('proyect not saved');
			    		} else {
			    			//success('proyect is saved');
			    			$("#lista").show();
					    	$("#categorias").hide();
			    		}
			    	});
			    }
			});
			
			selected_proyect =-1;
			}
			break;
			
		case BLUE:
			if (selected_proyect > -1){
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
			    			//error('proyect not saved');
			    		} else {
			    			//success('proyect is saved');
			    			$("#lista").show();
					    	$("#categorias").hide();
			    		}
			    	});
			    }
			});
			
			selected_proyect =-1;
			}
			break;
			
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};

function loadCategories(proyect_load){
	
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
	
}

function tuneChannel(proyect_load){
	
var MyChannel;

client.getEntity(proyect_load, function (err, proyect) {
    if (err){

    } else {

		try {
		    // gets 100 channel list of Digital channels
		    webapis.tv.channel.getChannelList(function (TVChannels) {
		    	// populate my data structure
		    	for(i=0;i<TVChannels.length;i++){
		    		
		    		if(proyect.get('OnChannel') == TVChannels[i].channelName)
		    			{
		    				MyChannel=TVChannels[i];
		    			}
			    	
		    	}
		    }
		    , errorCB, webapis.tv.channel.NAVIGATOR_MODE_DIGITAL, 0, 100);
		    
		    webapis.tv.channel.tune({
		    ptc: MyChannel.ptc,
		    major: MyChannel.major,
		    minor: MyChannel.minor,
		    sourceID: MyChannel.sourceID,
		    programNumber: MyChannel.programNumber,
		    transportStreamID: MyChannel.transportStreamID,
		    tunecallback: {
		        onsucess: function(programList) { console.log("getting program list is successfully"); },
		        onerror: function(channelList) { console.log("getting program list is successfully");  }
		    }
		}, successCB, errorCB, 0);
		    
		    alert('Channel tuned');
		} catch (error) {
		    alert(error);
		}				
		
    }
});
}

function channelInfo2API() {
channel = webapis.tv.channel.getCurrentChannel();

var channelInfo = {
		  name: channel.channelName, 
		  ptc: channel.ptc, 
		  major: channel.major,
		  minor: channel.minor, 
		  lcn: channel.lcn,
		  sourceID: channel.sourceID,
		  programNumber: channel.programNumber,
		  transportStreamID: channel.transportStreamID,
		  originalNetworkID: channel.originalNetworkID,
		  servicelName: channel.servicelName,
		  type: 'channelinfos'
		};

		client.createEntity(channelInfo, function (err, channelInfo) {
		    if (err) {
		        alert('entity not created');
		    } else {
		        alert('entity created');
		         
		        channelInfo.save(function(err){
		            if (err){
		                //error
		            } else {
		                //success
		            }
		        });
		    }
		});   
}

function successCB() {
    console.log("tuning is successful");
}

function errorCB(error) {
    console.log(error.name);
}