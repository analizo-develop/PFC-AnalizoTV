alert('SceneDefault.js loaded');

var selected_proyect = -1;
var channel;
var program;
var refreshInterval;
var now;
var userName;
var onCat = false;
var question;

function SceneDefault() {

};

SceneDefault.prototype.initialize = function () {
	alert("SceneDefault.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	
	client.getLoggedInUser(function(err, data, user) {
		if(err) {
			alert('could not get logged in user');
			
		} else {
			userName = user.get('username');
			$("#saludoName").append('<b>'+userName+'</b');
		}
	
	});
	
	
	$("#saludoNo").append(userCount);
	$("#return").hide();
	$("#info").hide();
      
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
	
	sf.service.PIG.show('tvsignal');
	$("#categorias").hide();
	$("#alerta").hide();
	$("#fixCategorias").hide();
	$('#errorD').hide();
	$("#proximamente").hide();
	$("#overDescripcionP").hide();
	$("#return").hide();
	$("#info").hide();
	
	//Registramos el control de canal para evitar que el usuario lo manipule
	sf.key.registerKey(sf.key.CH_UP);
	sf.key.registerKey(sf.key.CH_DOWN);
	sf.key.registerKey(sf.key.INFO);
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
			$("#infoP").hide();
			$("#categorias").show();
			$("#fixCategorias").show();
			$("#descripcionP").empty();
			$("#descripcionP").append(question);
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
			
			doCheckIn(proyect_load, 1);
			
			}
			break;
			
		case sf.key.GREEN:
			if (selected_proyect > -1){
			proyect_load = {
			    type:'proyects',
			    name:selected_proyect
			};
			
			doCheckIn(proyect_load, 2);
			
			}
			break;
			
		case sf.key.YELLOW:
			if (selected_proyect > -1){
			proyect_load = {
			    type:'proyects',
			    name:selected_proyect
			};
			
			doCheckIn(proyect_load, 3);
			
			}
			break;
			
		case sf.key.BLUE:
			if (selected_proyect > -1){
			proyect_load = {
			    type:'proyects',
			    name:selected_proyect
			};
			
			doCheckIn(proyect_load, 4);
			
			}
			break;
			
		case sf.key.RETURN:
			event.preventDefault();
			$("#proyects").show();
			$("#blackback").show();
			$("#categorias").hide();
			$("#fixCategorias").hide();
			$("#overDescripcionP").hide();
			$("#return").hide();
			$("#info").hide();
			onCat=false;
			
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
			
		case sf.key.INFO:
			event.preventDefault();
			if(onCat){
			$("#infoP").show();
			$("#categorias").hide();
			$("#fixCategorias").hide();
			$("#descripcionP").empty();
			$("#descripcionP").append("<img src='images/botones/info.png' width='13px' /> información sobre el proyecto");
			$("#okinfotext").empty();
	    	$("#okinfotext").append("volver al análisis");
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
		    	alert("categories not loaded");
	
		    } else {
		    	$("#redC").empty();
		    	$("#greenC").empty();
		    	$("#yellowC").empty();
		    	$("#blueC").empty();
		    	$("#descripcionP").empty();
		    	$("#infoDescTitulo2").empty();
		    	$("#infoDescPregunta2").empty();
		    	$("#infoDesc").empty();
		    	$("#redInfo").empty();
		    	$("#yellowInfo").empty();
		    	$("#greenInfo").empty();
		    	$("#blueInfo").empty();
		    	$("#redInfoIMG").empty();
		    	$("#yellowInfoIMG").empty();
		    	$("#greenInfoIMG").empty();
		    	$("#blueInfoIMG").empty();
		    	$("#okinfotext").empty();
		    	
		    	$("#redC").append(proyect.get('cat1'));
		    	$("#greenC").append(proyect.get('cat2'));
		    	$("#yellowC").append(proyect.get('cat3'));
		    	$("#blueC").append(proyect.get('cat4'));
		    	
		    	question = proyect.get('Pregunta');
		    	$("#descripcionP").append("<img src='images/botones/info.png' width='13px' /> información sobre el proyecto");
		    	$("#okinfotext").append("comenzar");
		    	$("#infoDescTitulo2").append(proyect.get('program'));
		    	$("#infoDescPregunta2").append(question);
		    	$("#infoDesc").append(proyect.get('Descripcion'));
		    	$("#redInfo").append(proyect.get('cat1')+"</br><span id='redInfoDesc'>"+proyect.get('cat1_Descripcion')+"</span>");
		    	$("#yellowInfo").append(proyect.get('cat2')+"</br><span id='yellowInfoDesc'>"+proyect.get('cat2_Descripcion')+"</span>");
		    	$("#greenInfo").append(proyect.get('cat3')+"</br><span id='greenInfoDesc'>"+proyect.get('cat3_Descripcion')+"</span>");
		    	$("#blueInfo").append(proyect.get('cat4')+"</br><span id='blueInfoDesc'>"+proyect.get('cat4_Descripcion')+"</span>");
		    	
		    		$("#redInfoIMG").css('background-image','url('+proyect.get("cat1IMG")+')');
		    		$("#greenInfoIMG").css('background-image','url('+proyect.get("cat2IMG")+')');
		    		$("#yellowInfoIMG").css('background-image','url('+proyect.get("cat3IMG")+')');
		    		$("#blueInfoIMG").css('background-image','url('+proyect.get("cat4IMG")+')');
		    			    	
		    	
		    	
		    	$("#infoP").css('background-image','url('+proyect.get("Imagen")+')');

		    			    	
		        $("#proyects").hide();
		        $("#blackback").hide();
		        $("#overDescripcionP").show();
		        $("#return").show();
		    	$("#info").show();
				$("#infoP").show();

		        onCat=true;
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
	 				
	 				var hora = '';
	 				var inicio_p = '';
	 				var fin_p = '';
	 				
	 				if (now.getMinutes() < 10){hora = ''+now.getHours()+'0'+now.getMinutes();}
	 				else {hora = ''+now.getHours()+''+now.getMinutes();}

	 				inicio_p = ''+proyecto.get('HoraInicio')+''+proyecto.get('MinutoInicio');
	 				fin_p = ''+proyecto.get('HoraFin')+''+proyecto.get('MinutoFin');
	 				
	 				
	 				if(parseInt(hora) >= parseInt(inicio_p))
	 				{
	 					if(parseInt(hora) <= parseInt(fin_p))
	 					{
	 						loadCategories(proyect_load);
	 						tuneChannel(proyect_load);
	 						
	 					} else{selected_proyect =-1;}
	 				} else{selected_proyect =-1;}
	 			} else{selected_proyect =-1;}
	 			
	 		}
	 	});
	 }
	 
function doCheckIn(proyect_load, category){
	$("#alerta").fadeIn();
	
	now=new Date();
	client.getEntity(proyect_load, function(err, proyecto){
 		if (err){
 			
 		} else {
 				
 				var hora = '';
 				var inicio_p = '';
 				var fin_p = '';
 				
 				if (now.getMinutes() < 10){hora = ''+now.getHours()+'0'+now.getMinutes()}
 				else {hora = ''+now.getHours()+''+now.getMinutes()}
 				
 				inicio_p = ''+proyecto.get('HoraInicio')+''+proyecto.get('MinutoInicio');
 				fin_p = ''+proyecto.get('HoraFin')+''+proyecto.get('MinutoFin');
 				
 				if(parseInt(hora) >= parseInt(inicio_p))
 				{
 					if(parseInt(hora) <= parseInt(fin_p))
 					{
 				
 								

 								client.getEntity(proyect_load, function(err, proyecto){
 							  		if (err){
 							  			
 							  		} else {
 							  			//aqui
 							  			var resultados = proyecto.get('Resultados');
 							  			
 							  			var options = {
 							  					type:resultados
 							  				}
 							  			
 							  				client.createCollection(options, function (err, checkin) {
 							  					if (err) {
 							  						error('could not make collection');
 							  					} else {
 							  			
 							  						//success('new Collection created');
 							  			  			now=new Date();
 							  						//create a new dog and add it to the collection
 							  						var options = {
 							  							name:now.toString()+'-'+proyecto.get('name')+'-'+userName,
 							  							categoria:category,
 							  							proyecto:proyecto.get('name'),
 							  							hora:now.getHours(),
 							  							minuto:now.getMinutes(),
 							  							segundo:now.getSeconds(),
 							  							mes:now.getMonth(),
 							  							año:now.getFullYear(),
 							  							dia:now.getDate(),
 							  							diaSemana:now.getDay(),
 							  							fecha:now.toString(),
 							  							usuario:userName
 							  						}
 							  						//just pass the options to the addEntity method
 							  						//to the collection and it is saved automatically
 							  						checkin.addEntity(options, function(err, last, data) {
 							  							if (err) {
 							  								error('extra dog not saved or added to collection');
 							  							} else {
 							  								var results = proyecto.get('cat'+category+'_results');
 							  								results = parseInt(results) + 1;
 							  								proyecto.set('cat'+category+'_results',results);
 							  								proyecto.save(function(err){
 							  									if (err){
 							  										//error('proyect not saved');
 							  									} else {
 							  										//success('proyect is saved');
 							  										alert('Checked In');
 							  						    			$("#alerta").fadeOut();
 							  										
 							  									}
 							  								});
 							  								
 							  							}
 							  						});
 							  					}
 							  				});
 							  				
 							  		}
 							  	});
 								
 								
 					} else{showError("El programa ha terminado.")}
 			} else{showError("El programa ha terminado.")}
 			}
 		});

	  

}

function showError(err)
{
		$("#errorR").empty()
		$("#errorR").append(err);
		$("#errorR").css('background-color' , '#c13d3d');
		$("#errorR").fadeIn();
		setTimeout(
			function() 
			{$("#errorR").fadeOut();}, 2000);
	
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
                    
                    var weekday_sp=new Array(7);
                    weekday_sp[0]="Domingo";
                    weekday_sp[1]="Lunes";
                    weekday_sp[2]="Martes";
                    weekday_sp[3]="Miércoles";
                    weekday_sp[4]="Jueves";
                    weekday_sp[5]="Viernes";
                    weekday_sp[6]="Sábado";
                    
                    var now_day = weekday[now.getDay()];
                    
                    
                    while(proyects.hasNextEntity()) {
                    var proyect = proyects.getNextEntity();
                    
                    var proyect_day = proyect.get(now_day);  
                    
                    nextDay = now.getDay();
                    while(!proyect.get(weekday[nextDay]))
                    {
                    	nextDay=nextDay+1;
                    	if(nextDay==7){nextDay=0;}
                    	
                    }
                    
                    if(proyect_day){ 
                    	
                    	var hora = '';
                    	var inicio_p = '';
                    	var fin_p = '';
                    	
                    	if (now.getMinutes() < 10){hora = ''+now.getHours()+'0'+now.getMinutes()}
                    	else {hora = ''+now.getHours()+''+now.getMinutes()}
                    	
                    	inicio_p = ''+proyect.get('HoraInicio')+''+proyect.get('MinutoInicio');
                    	fin_p = ''+proyect.get('HoraFin')+''+proyect.get('MinutoFin');
                    	
                    	if(parseInt(hora) >= parseInt(inicio_p))
                    	{
                    		if(parseInt(hora) <= parseInt(fin_p))
                    		{
                    			comprobar = 1;
                    			
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
                      		$("#firstP").append("<td><div id='programa"+proyect.get('name')+"P'><div id='titulo'>"+proyect.get('program')+"</div><div id='fix'></div><div id='hora'>"+weekday_sp[nextDay]+", "+proyect.get('HoraInicio')+"."+proyect.get('MinutoInicio')+"h</div></div></td>");
                      		
                      		$("#programa"+proyect.get('name')+"P").css('background-image','url('+proyect.get("Imagen")+')');
                      		
                      		//$("#proximamente td").css('width', 100/inTimeProyects+'%');
                      		
                      		}
                      	}
                    
                   
                            
                            }
                    
                    for(var i = outTimeProyects;i<5;i++)
                    {
                    	alert(i);
                  		$("#firstP").append("<td>&nbsp;</td>");

                    }
                    
                    if(inTimeProyects == 0)
                    {
                    	$("#emision").append("<h2 id='NoProg'>No hay programas en emisión en este momento</h2>");
                    	$("#lista").hide();
                    	$("#h2emi").hide();
                    }
                    if(outTimeProyects > 0)
                    {
                    	$("#proximamente").show();
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