alert('SceneDefault.js loaded');

var selected_proyect = -1;
var channel;
var program;
var refreshInterval;
var now;

function SceneDefault() {

};

SceneDefault.prototype.initialize = function () {
	alert("SceneDefault.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	
	sf.service.PIG.show('tvsignal');
	$("#categorias").hide();
	$("#alerta").hide();
	$("#fixCategorias").hide();
	
	//Registramos el control de canal para evitar que el usuario lo manipule
	sf.key.registerKey(sf.key.CH_UP);
	sf.key.registerKey(sf.key.CH_DOWN);
      
    doStart();

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
		case sf.key.N1:
			if (selected_proyect == -1){
			selected_proyect = 1;
			proyect_load = {
			    type:'proyects',
			    name:'1'
			};
			
			loadProgram(proyect_load);
			}
			break;
			
		case sf.key.N2:
			if (selected_proyect == -1){
			selected_proyect = 2;
			proyect_load = {
			    type:'proyects',
			    name:'2'
			};
			
			loadProgram(proyect_load);
			}
			break;
			
		case sf.key.N3:
			if (selected_proyect == -1){
			selected_proyect = 3;
			proyect_load = {
			    type:'proyects',
			    name:'3'
			};
			
			loadProgram(proyect_load);
			}
			break;
			
		case sf.key.N4:
			if (selected_proyect == -1){
			selected_proyect = 4;
			proyect_load = {
			    type:'proyects',
			    name:'4'
			};
			
			loadProgram(proyect_load);
			}
			break;
			
		case sf.key.N5:
			if (selected_proyect == -1){
			selected_proyect = 5;
			proyect_load = {
			    type:'proyects',
			    name:'5'
			};
			
			loadProgram(proyect_load);
			}
			break;
			
		case sf.key.N6:
			if (selected_proyect == -1){
			selected_proyect = 6;
			proyect_load = {
			    type:'proyects',
			    name:'6'
			};
			
			loadProgram(proyect_load);
			}
			break;
			
		case sf.key.N7:
			if (selected_proyect == -1){
			selected_proyect = 7;
			proyect_load = {
			    type:'proyects',
			    name:'7'
			};
			
			loadProgram(proyect_load);
			}
			break;
			
		case sf.key.N8:
			if (selected_proyect == -1){
			selected_proyect = 8;
			proyect_load = {
			    type:'proyects',
			    name:'8'
			};
			
			loadProgram(proyect_load);
			}
			break;
			
		case sf.key.N9:
			if (selected_proyect == -1){
			selected_proyect = 9;
			proyect_load = {
			    type:'proyects',
			    name:'9'
			};
			
			loadProgram(proyect_load);
			}
			break;
			
		case sf.key.N0:
			if (selected_proyect == -1){
			selected_proyect = 0;
			proyect_load = {
			    type:'proyects',
			    name:'0'
			};
			
			loadProgram(proyect_load);
			}
			break;
			
			
		case sf.key.RED:
			if (selected_proyect > -1){
			proyect_load = {
			    type:'proyects',
			    name:selected_proyect
			};
			
			doCheckIn(proyect_load, "cat1_results");
			
			}
			break;
			
		case sf.key.GREEN:
			if (selected_proyect > -1){
			proyect_load = {
			    type:'proyects',
			    name:selected_proyect
			};
			
			doCheckIn(proyect_load, "cat2_results");
			
			}
			break;
			
		case sf.key.YELLOW:
			if (selected_proyect > -1){
			proyect_load = {
			    type:'proyects',
			    name:selected_proyect
			};
			
			doCheckIn(proyect_load, "cat3_results");
			
			}
			break;
			
		case sf.key.BLUE:
			if (selected_proyect > -1){
			proyect_load = {
			    type:'proyects',
			    name:selected_proyect
			};
			
			doCheckIn(proyect_load, "cat4_results");
			
			}
			break;
			
		case sf.key.RETURN:
			event.preventDefault();
			$("#proyects").show();
			$("#blackback").show();
			$("#categorias").hide();
			$("#fixCategorias").hide();
	    	selected_proyect =-1;
			break;
		
		case sf.key.CH_UP:
			event.preventDefault();
			break;
		
		case sf.key.CH_DOWN:
			event.preventDefault();
			break;
			
		case sf.key.TOOLS:
			event.preventDefault();
			client.logout();
			sf.service.PIG.hide();
			sf.scene.hide('Default');;
			sf.scene.show('Login');
			sf.scene.focus('Login');
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

function loadCategories(proyect_load){
	
	client.getEntity(proyect_load, function (err, proyect) {
	    if (err){
	    	alert("categories not loaded");

	    } else {
	    	$("#redC").empty();
	    	$("#greenC").empty();
	    	$("#yellowC").empty();
	    	$("#blueC").empty();
	    	$("#redC").append(proyect.get('cat1'));
	    	$("#greenC").append(proyect.get('cat2'));
	    	$("#yellowC").append(proyect.get('cat3'));
	    	$("#blueC").append(proyect.get('cat4'));
	    	
	        $("#proyects").hide();
	        $("#blackback").hide();
	        $("#categorias").show();
	        $("#fixCategorias").show();
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

function loadProgram(proyect_load){
	 now=new Date();
	 var weekday=new Array(7);
	 weekday[0]="Sunday";
	 weekday[1]="Monday";
	 weekday[2]="Tuesday";
	 weekday[3]="Wednesday";
	 weekday[4]="Thursday";
	 weekday[5]="Friday";
	 weekday[6]="Saturday";
	 
	 var now_day = weekday[now.getDay()];
	 
	 client.getEntity(proyect_load, function(err, proyecto){
	 		if (err){
	 			
	 		} else {
	 			var proyect_day = proyecto.get(now_day);  
	 			if(proyect_day){ 
	 				
	 				if(now.getHours() >= proyecto.get('HoraInicio'))
	 				{
	 					if(now.getMinutes() >= proyecto.get('MinutoInicio'))
	 					{
	 						if(now.getHours() <= proyecto.get('HoraFin'))
	 						{
	 							if(now.getMinutes() <= proyecto.get('MinutoFin'))
	 							{	
	 								loadCategories(proyect_load);
	 								tuneChannel(proyect_load);
	 					            
	 							} else{selected_proyect =-1;}
	 						} else{selected_proyect =-1;}
	 					} else{selected_proyect =-1;}
	 				} else{selected_proyect =-1;}
	 			} else{selected_proyect =-1;}
	 		}
	 	});
	 }
	 
function doCheckIn(proyect_load, category){

	client.getEntity(proyect_load, function (err, proyect) {
			    if (err){

			    } else {
			    	
			    	var results = proyect.get(category)+1;
			    	proyect.set(category,results);
			    	
			    	proyect.save(function(err){
			    		if (err){
			    			//error('proyect not saved');
			    		} else {
			    			//success('proyect is saved');
			    			alert('Checked In');
			    			$("#alerta").fadeIn();
			    			setTimeout(
			    				function() 
			    				{$("#alerta").fadeOut();}, 1000);
			    			
			    		}
			    	});
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

function doStart() {
    var inTimeProyects = 0;
    var outTimeProyects = 0;
    var comprobar = -1;
      
    var proyects = new Usergrid.Collection({ 'client':client, 'type':'proyects' });
                proyects.fetch(
                    function() { // Success
                    
                    $("#firstE").empty();
                    $("#firstP").empty();
                    $("#secondE").empty();
                    $("#secondP").empty();
                    
                    now=new Date();
                    var weekday=new Array(7);
                    weekday[0]="Sunday";
                    weekday[1]="Monday";
                    weekday[2]="Tuesday";
                    weekday[3]="Wednesday";
                    weekday[4]="Thursday";
                    weekday[5]="Friday";
                    weekday[6]="Saturday";
                    
                    var now_day = weekday[now.getDay()];
                    
                    
                    while(proyects.hasNextEntity()) {
                    var proyect = proyects.getNextEntity();
                    
                    var proyect_day = proyect.get(now_day);  
                    if(proyect_day){ 
                    	
                    	if(now.getHours() >= proyect.get('HoraInicio'))
                    	{
                    		if(now.getMinutes() >= proyect.get('MinutoInicio'))
                    		{
                    			if(now.getHours() <= proyect.get('HoraFin'))
                    			{
                    				if(now.getMinutes() <= proyect.get('MinutoFin'))
                    				{	
                    					comprobar = 1;
                    					 
                    				} else{comprobar = 0;}
                    			} else{comprobar = 0;}
                    		} else{comprobar = 0;}
                    	} else{comprobar = 0;}
                    } else{comprobar = 0;}
                    
                    if(comprobar){
                        inTimeProyects = inTimeProyects +1;
                                                  
                           	if (inTimeProyects > 5){
                           	//second
                           	$("#secondE").append("<td><div id='programa"+proyect.get('name')+"E'><div id='titulo'>"+proyect.get('program')+"</div></div></td>");
                           	
                           	$("#programa"+proyect.get('name')+"E").css('background-image','url('+proyect.get("Imagen")+')');
                           	}
                           	else{
                            $("#firstE").append("<td><div id='programa"+proyect.get('name')+"E'><div id='titulo'>"+proyect.get('program')+"</div></div></td>");
                            
                            $("#programa"+proyect.get('name')+"E").css('background-image','url('+proyect.get("Imagen")+')');
                                                    
                            $("#emision td").css('width', 100/inTimeProyects+'%');
                            }
                            
                            }
                      else {
                      		outTimeProyects =outTimeProyects +1;
                      		
                      		if (outTimeProyects > 5){
                      		//second
                      		$("#secondP").append("<td><div id='programa"+proyect.get('name')+"P'><div id='titulo'>"+proyect.get('program')+"</div><div id='fix'></div><div id='hora'>"+proyect.get('HoraInicio')+"."+proyect.get('MinutoInicio')+"h</div></div></td>");
                      		
                      		$("#programa"+proyect.get('name')+"P").css('background-image','url('+proyect.get("Imagen")+')');
                      		}
                      		else{
                      		$("#firstP").append("<td><div id='programa"+proyect.get('name')+"P'><div id='titulo'>"+proyect.get('program')+"</div><div id='fix'></div><div id='hora'>"+proyect.get('HoraInicio')+"."+proyect.get('MinutoInicio')+"h</div></div></td>");
                      		
                      		$("#programa"+proyect.get('name')+"P").css('background-image','url('+proyect.get("Imagen")+')');
                      		
                      		$("#proximamente td").css('width', 100/inTimeProyects+'%');
                      		
                      		}
                      	}
                            
                            }
                    }, function() { // Failure
                        alert('read failed');
                    }
                );
    
}

function successCB() {
    console.log("tuning is successful");
}

function errorCB(error) {
    console.log(error.name);
}