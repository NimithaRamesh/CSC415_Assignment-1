var commandHashMap = {};
commandHashMap["ls"]= "ls";
commandHashMap["more"]= "more";
commandHashMap["cat"]= "cat";
commandHashMap["clear"]= "clear";
commandHashMap["ps"]= "ps";
commandHashMap["kill"]= "kill";
//commandHashMap["wc"]= "wc";
commandHashMap["man"]= "man";
commandHashMap["copy"]= "copy";
commandHashMap["delete"]= "delete";

var ignoreKeys = {};
ignoreKeys["Tab"]= "Tab";
ignoreKeys["Shift"]= "Shift";
ignoreKeys["Control"]= "Control";
ignoreKeys["Alt"]= "Alt";
ignoreKeys["Escape"]= "Escape";
ignoreKeys["ArrowLeft"]= "ArrowLeft";
ignoreKeys["ArrowDown"]= "ArrowDown";
ignoreKeys["ArrowRight"]= "ArrowRight";
ignoreKeys["ArrowUp"]= "ArrowLeft";
ignoreKeys["CapsLock"]= "CapsLock";

var manPages = {};
manPages["ls"] = "List information about the current directory.";
manPages["man"] = "Displays the manual pages.";
manPages["cat"] = "Concatenate files and print on the standard output.";
manPages["more"] = "Display a file.";
//manPages["wc"] = "Print out file's word count";
manPages["clear"] = "Clears your screen if this is possible.";
manPages["ps"] = "Displays information about of the active processes.";
manPages["kill"]= "Stop the active process.";
manPages["copy"]= "Copy a file with a new name.";
manPages["delete"]= "Delete a file.";

function parseString(inputString) {
	
	var input = inputString.split(" ");
	
	if(commandHashMap.hasOwnProperty(input[0])) { // check if it is a command
		//it is a command
		commandCall(input);	
	} else {
		if (filesMap.hasOwnProperty(input[0])) { // check if the file is on our list.
			processesCall(input);
		} else {
			// file not found
			document.getElementById("displaydevice").innerHTML  += "<br>Error. Undectected command and/or file.<br>";
		}
	}
}

function ls() {
	for(var i = 0; i < directories.length; i++) {	
		document.getElementById("displaydevice").innerHTML  += "<br>" 
		+ directories[i].access 
		+ "&nbsp&nbsp&nbsp&nbsp" 
		+ directories[i].owner
		+ "&nbsp&nbsp&nbsp&nbsp" 
		+ directories[i].time 
		+ "&nbsp&nbsp&nbsp&nbsp" 
		+ directories[i].name + "";
	}
}

function clear() {
	document.getElementById("displaydevice").innerHTML  = "";
}

function man(command) {
	if(manPages.hasOwnProperty(command[1])) {
		document.getElementById("displaydevice").innerHTML  += "<br>" + command[1] + "<br>" + manPages[command[1]];
	} else {
		document.getElementById("displaydevice").innerHTML  += "<br>No such Command.";
	}
}

function cat(input) {
	
	if(filesMap.hasOwnProperty(input)) {
		for (var i = 0; i < Object.keys(filesMap).length; i++) {
			if(directories[i].name == input) {
				document.getElementById("displaydevice").innerHTML  += "<br>" + directories[i].file;		
				break;
			}
		}
	} else {
		document.getElementById("displaydevice").innerHTML  += "<br>Error. File not found.<br>";
	}
}

function more(input) {
	if(filesMap.hasOwnProperty(input)) {
		// we have it here
		cat(input);
	} else {
		/*
		for (var i = 0; i < textFile.length; i++) {
			
		}
		*/
	}
}

var psList = [];

function ps() {
	document.getElementById("displaydevice").innerHTML  += "<br>" + psList;
}

function kill(input) {
	for (var i = 0; i < psList.length; i++) {
		if(psList[i] == input) {

			setState(getKey(input), "stop");
			
			document.getElementById("displaydevice").innerHTML  += "<br>Process: " + input + " is stopped.";
			
			if (psList.length == 1 || psList[psList.length - 1] == input) {
				psList.pop();
			} else {
				for (var j = 0; j < psList.length - 1; j++) {
					if (psList[j] == input) {
						psList[j] = psList[j + 1];
					}
				}
				psList.pop();	
			}
			break;
		}
	}
}

function getKey(input) {
	for(var key in psHashMap){
		if(psHashMap[key] === input){
			  return key;
		 }
	}
}

function copy(input) {

	var new_file = {name: "" , owner: "", time: "", access: "", file: null}
	
	if(filesMap.hasOwnProperty(input[1])) {
		for (var i = 0; i < directories.length; i++ ) {
			if(directories[i].name == input[1]) { 
				new_file.name = input[2];
				new_file.owner = directories[i].owner;
				new_file.time = directories[i].time;
				new_file.access = directories[i].access;
				new_file.file = directories[i].file;
				
				directories[directories.length] = new_file;
				
				directories[directories.length - 1].name = input[2];

				filesMap[input[2]]= input[2];
				
				break;
			}
		}
	} else {
		document.getElementById("displaydevice").innerHTML  += "<br>File name not found.";
	}
}

function delete2(input) {
	if(filesMap.hasOwnProperty(input)) {
		delete filesMap[input];
		for (var i = 0; i < directories.length; i++) {
			if (directories[i].name == input) {
				directories.splice(i, 1);
				document.getElementById("displaydevice").innerHTML  += "<br>File " + input + " is deleted.";
				break;
			}
		}
	} else {
		document.getElementById("displaydevice").innerHTML  += "<br>File name not found.";
	}
}
