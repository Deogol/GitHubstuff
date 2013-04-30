//	HYPE.documents["VocGame"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "VocGame.hyperesources";
	var documentName = "VocGame";
	var documentLoaderFilename = "vocgame_hype_generated_script.js";
	var mainContainerID = "vocgame_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_160 == "undefined") {
		if(typeof window.HYPE_160_DocumentsToLoad == "undefined") {
			window.HYPE_160_DocumentsToLoad = new Array();
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=160';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_160();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",aT:"i",N:"i",f:"d",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",aI:"i",S:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",X:"i",aL:"i",A:"c",aZ:"i",Y:"bM",B:"c",bK:"f",bL:"f",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"31":{b:197,z:"11",K:"Solid",c:44,L:"Solid",d:43,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#008A5E",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#FFFFFF",B:"#FFFFFF",Z:"break-word",r:"inline",C:"#FFFFFF",D:"#FFFFFF",t:36,aA:[{type:4,javascriptOid:"19"}],F:"center",G:"#FFFFFF",aP:"pointer",w:"+",x:"visible",I:"Solid",a:836,y:"preserve",J:"Solid"},"36":{b:197,z:"7",K:"Solid",c:44,L:"Solid",d:43,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#008A5E",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#FFFFFF",B:"#FFFFFF",Z:"break-word",r:"inline",C:"#FFFFFF",D:"#FFFFFF",t:36,aA:[{type:4,javascriptOid:"11"}],F:"center",G:"#FFFFFF",aP:"pointer",w:"+",x:"visible",I:"Solid",a:55,y:"preserve",J:"Solid"},"26":{c:127,d:65,I:"Solid",J:"Solid",K:"Solid",g:"#FFFFFF",L:"Solid",M:3,N:3,A:"#000000",x:"visible",j:"absolute",B:"#000000",P:3,k:"div",C:"#000000",z:"9",O:3,D:"#000000",a:836,b:110},"32":{c:1022,d:766,I:"Solid",J:"Solid",K:"Solid",g:"#0069AA",L:"Solid",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",P:1,k:"div",C:"#A0A0A0",z:"1",O:1,D:"#A0A0A0",a:0,b:0},"27":{b:128,z:"13",K:"Solid",c:122,L:"Solid",d:21,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#008A5E",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#FFFFFF",B:"#FFFFFF",Z:"break-word",r:"inline",C:"#FFFFFF",s:"TrebuchetMS,'Trebuchet MS','Lucida Grande',Tahoma,Arial,Sans-Serif",D:"#FFFFFF",t:18,aA:[{type:4,javascriptOid:"22"}],F:"center",v:"bold",G:"#FFFFFF",aP:"pointer",w:"Reset",x:"visible",I:"Solid",a:449,y:"preserve",J:"Solid"},"33":{b:197,z:"12",K:"Solid",c:44,L:"Solid",d:43,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#008A5E",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#FFFFFF",B:"#FFFFFF",Z:"break-word",r:"inline",C:"#FFFFFF",D:"#FFFFFF",t:36,aA:[{type:4,javascriptOid:"20"}],F:"center",G:"#FFFFFF",aP:"pointer",w:"-",x:"visible",I:"Solid",a:911,y:"preserve",J:"Solid"},"34":{aV:8,w:"<p id=\"scoreA\" <=\"\" p=\"\"></p>",a:64,x:"visible",Z:"break-word",y:"preserve",j:"absolute",r:"inline",c:100,k:"div",z:"6",aT:8,d:99,F:"center",t:36,b:82,aU:8,G:"#000000",aS:8},"28":{b:465,z:"4",K:"Solid",c:126,L:"Solid",d:21,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#008A5E",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#FFFFFF",B:"#FFFFFF",Z:"break-word",r:"inline",C:"#FFFFFF",s:"TrebuchetMS,'Trebuchet MS','Lucida Grande',Tahoma,Arial,Sans-Serif",D:"#FFFFFF",t:18,aA:[{type:4,javascriptOid:"4"}],F:"center",v:"bold",G:"#FFFFFF",aP:"pointer",w:"New Word",x:"visible",I:"Solid",a:447,y:"preserve",J:"Solid"},"24":{b:197,z:"8",K:"Solid",c:44,L:"Solid",d:43,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#008A5E",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#FFFFFF",B:"#FFFFFF",Z:"break-word",r:"inline",C:"#FFFFFF",D:"#FFFFFF",t:36,aA:[{type:4,javascriptOid:"13"}],F:"center",G:"#FFFFFF",aP:"pointer",w:"-",x:"visible",I:"Solid",a:130,y:"preserve",J:"Solid"},"30":{c:289,d:134,I:"Solid",J:"Solid",K:"Solid",g:"#FFFFFF",L:"Solid",M:3,N:3,A:"#000000",x:"visible",j:"absolute",B:"#000000",P:3,k:"div",C:"#000000",z:"2",O:3,D:"#000000",a:371,b:314},"29":{aV:8,w:"<p id=\"scoreB\" <=\"\" p=\"\"></p>",a:845,x:"visible",Z:"break-word",y:"preserve",j:"absolute",r:"inline",c:100,k:"div",z:"10",aT:8,d:99,F:"center",t:36,b:82,aU:8,G:"#000000",aS:8},"35":{c:127,d:65,I:"Solid",J:"Solid",K:"Solid",g:"#FFFFFF",L:"Solid",M:3,N:3,A:"#000000",x:"visible",j:"absolute",B:"#000000",P:3,k:"div",C:"#000000",z:"5",O:3,D:"#000000",a:55,b:110},"25":{aU:8,G:"#000000",c:274,aV:8,r:"inline",d:55,s:"TrebuchetMS,'Trebuchet MS','Lucida Grande',Tahoma,Arial,Sans-Serif",t:36,Z:"break-word",w:"<p id=\"word\" <=\"\" p=\"\"></p>",j:"absolute",x:"visible",k:"div",y:"preserve",z:"3",aS:8,aT:8,a:374,F:"center",b:325}},n:"One Player",onSceneLoadActions:[{type:4,javascriptOid:"12"}],T:{"23":{d:0,i:"23",n:"ResetAlert",a:[],f:30},kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"37"},{x:1,p:"600px",c:"#FFFFFF",v:{"10":{b:197,z:"8",K:"Solid",c:44,L:"Solid",d:43,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#008A5E",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#FFFFFF",B:"#FFFFFF",Z:"break-word",r:"inline",C:"#FFFFFF",D:"#FFFFFF",t:36,aA:[{type:4,javascriptOid:"13"}],F:"center",G:"#FFFFFF",aP:"pointer",w:"-",x:"visible",I:"Solid",a:130,y:"preserve",J:"Solid"},"2":{aU:8,G:"#000000",c:274,aV:8,r:"inline",d:55,s:"TrebuchetMS,'Trebuchet MS','Lucida Grande',Tahoma,Arial,Sans-Serif",t:36,Z:"break-word",w:"<p id=\"word\" <=\"\" p=\"\"></p>",j:"absolute",x:"visible",k:"div",y:"preserve",z:"3",aS:8,aT:8,a:374,F:"center",b:325},"21":{b:128,z:"13",K:"Solid",c:122,L:"Solid",d:21,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#008A5E",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#FFFFFF",B:"#FFFFFF",Z:"break-word",r:"inline",C:"#FFFFFF",s:"TrebuchetMS,'Trebuchet MS','Lucida Grande',Tahoma,Arial,Sans-Serif",D:"#FFFFFF",t:18,aA:[{type:4,javascriptOid:"22"}],F:"center",v:"bold",G:"#FFFFFF",aP:"pointer",w:"Reset",x:"visible",I:"Solid",a:449,y:"preserve",J:"Solid"},"15":{c:127,d:65,I:"Solid",J:"Solid",K:"Solid",g:"#FFFFFF",L:"Solid",M:3,N:3,A:"#000000",x:"visible",j:"absolute",B:"#000000",P:3,k:"div",C:"#000000",z:"9",O:3,D:"#000000",a:836,b:110},"3":{b:465,z:"4",K:"Solid",c:126,L:"Solid",d:21,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#008A5E",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#FFFFFF",B:"#FFFFFF",Z:"break-word",r:"inline",C:"#FFFFFF",s:"TrebuchetMS,'Trebuchet MS','Lucida Grande',Tahoma,Arial,Sans-Serif",D:"#FFFFFF",t:18,aA:[{type:4,javascriptOid:"4"}],F:"center",v:"bold",G:"#FFFFFF",aP:"pointer",w:"New Word",x:"visible",I:"Solid",a:447,y:"preserve",J:"Solid"},"16":{aV:8,w:"<p id=\"scoreB\" <=\"\" p=\"\"></p>",a:845,x:"visible",Z:"break-word",y:"preserve",j:"absolute",r:"inline",c:100,k:"div",z:"10",aT:8,d:99,F:"center",t:36,b:82,aU:8,G:"#000000",aS:8},"5":{c:289,d:134,I:"Solid",J:"Solid",K:"Solid",g:"#FFFFFF",L:"Solid",M:3,N:3,A:"#000000",x:"visible",j:"absolute",B:"#000000",P:3,k:"div",C:"#000000",z:"2",O:3,D:"#000000",a:371,b:314},"17":{b:197,z:"11",K:"Solid",c:44,L:"Solid",d:43,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#008A5E",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#FFFFFF",B:"#FFFFFF",Z:"break-word",r:"inline",C:"#FFFFFF",D:"#FFFFFF",t:36,aA:[{type:4,javascriptOid:"19"}],F:"center",G:"#FFFFFF",aP:"pointer",w:"+",x:"visible",I:"Solid",a:836,y:"preserve",J:"Solid"},"6":{c:1022,d:766,I:"Solid",J:"Solid",K:"Solid",g:"#0069AA",L:"Solid",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",P:1,k:"div",C:"#A0A0A0",z:"1",O:1,D:"#A0A0A0",a:0,b:0},"18":{b:197,z:"12",K:"Solid",c:44,L:"Solid",d:43,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#008A5E",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#FFFFFF",B:"#FFFFFF",Z:"break-word",r:"inline",C:"#FFFFFF",D:"#FFFFFF",t:36,aA:[{type:4,javascriptOid:"20"}],F:"center",G:"#FFFFFF",aP:"pointer",w:"-",x:"visible",I:"Solid",a:911,y:"preserve",J:"Solid"},"8":{aV:8,w:"<p id=\"scoreA\" <=\"\" p=\"\"></p>",a:64,x:"visible",Z:"break-word",y:"preserve",j:"absolute",r:"inline",c:100,k:"div",z:"6",aT:8,d:99,F:"center",t:36,b:82,aU:8,G:"#000000",aS:8},"14":{c:127,d:65,I:"Solid",J:"Solid",K:"Solid",g:"#FFFFFF",L:"Solid",M:3,N:3,A:"#000000",x:"visible",j:"absolute",B:"#000000",P:3,k:"div",C:"#000000",z:"5",O:3,D:"#000000",a:55,b:110},"9":{b:197,z:"7",K:"Solid",c:44,L:"Solid",d:43,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#008A5E",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#FFFFFF",B:"#FFFFFF",Z:"break-word",r:"inline",C:"#FFFFFF",D:"#FFFFFF",t:36,aA:[{type:4,javascriptOid:"11"}],F:"center",G:"#FFFFFF",aP:"pointer",w:"+",x:"visible",I:"Solid",a:55,y:"preserve",J:"Solid"}},n:"Two Players",onSceneLoadActions:[{type:4,javascriptOid:"12"}],T:{"23":{d:0,i:"23",n:"ResetAlert",a:[],f:30},kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"1"}];
	
	var javascripts = [{name:"RandomWord",source:"function(hypeDocument, element, event) {\t\n\tvar newWord = new Array (\"Rescue\", \"Response\", \"Respond\", \"Blow out\", \"Control Room\", \"Cause\", \"Investigate\", \"Inform\", \"Manage\", \"React\", \"Injured\", \"Injured\", \"Attend to\", \"Crew\", \"Scramble\", \"Pipeline\", \"To Handle\", \"Increase\", \"Patrol\", \"Premises\", \"Arrest\", \"Fence\");\n\t\n\trandomNum = Math.floor((Math.random() * newWord.length));\n\tdocument.getElementById(\"word\").innerHTML = newWord[randomNum];\n}",identifier:"4"},{name:"scoreIncrease",source:"function(hypeDocument, element, event) {\t\n\tvar b = document.getElementById(\"scoreA\").innerHTML;\n\t\n\tif (b == 100) {\n\tdocument.getElementById(\"scoreA\").innerHTML= 100;\n\t}\n\t\n\telse {\n\tdocument.getElementById(\"scoreA\").innerHTML= scoreboardA+1;\n\tscoreboardA++;\n\t}\n}",identifier:"11"},{name:"ScoreBoard",source:"function(hypeDocument, element, event) {\t\n\tscoreboardA = 0;\n\tscoreboardB = 0;\n}",identifier:"12"},{name:"scoreDecrease",source:"function(hypeDocument, element, event) {\t\n\tvar a = document.getElementById(\"scoreA\").innerHTML;\n\t\n\tif (a >1) {\n\tdocument.getElementById(\"scoreA\").innerHTML= scoreboardA-1;\n\tscoreboardA--;\n\t}\n\t\n\telse {\n\tdocument.getElementById(\"scoreA\").innerHTML= 0;\n\t}\n\n}",identifier:"13"},{name:"scoreIncrease2",source:"function(hypeDocument, element, event) {\t\n\tvar c = document.getElementById(\"scoreB\").innerHTML;\n\t\n\tif (c == 100) {\n\tdocument.getElementById(\"scoreB\").innerHTML= 100;\n\t}\n\t\n\telse {\n\tdocument.getElementById(\"scoreB\").innerHTML= scoreboardB+1;\n\tscoreboardB++;\n\t}\n\t\n}",identifier:"19"},{name:"scoreDecrease2",source:"function(hypeDocument, element, event) {\t\n\tvar d = document.getElementById(\"scoreB\").innerHTML;\n\t\n\tif (d >1) {\n\tdocument.getElementById(\"scoreB\").innerHTML= scoreboardB-1;\n\tscoreboardB--;\n\t}\n\t\n\telse {\n\tdocument.getElementById(\"scoreB\").innerHTML= 0;\n\t}\n}",identifier:"20"},{name:"Reset",source:"function(hypeDocument, element, event) {\t\n\tdocument.getElementById(\"scoreA\").innerHTML = 0;\n\tdocument.getElementById(\"scoreB\").innerHTML = 0;\n\tscoreboardA = 0;\n\tscoreboardB = 0;\n}",identifier:"22"}];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

