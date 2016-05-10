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
commandHashMap["dir"]= "dir";
commandHashMap["cd"] = "cd";
commandHashMap["copyOver.js"] = "copy a file over and over again";
commandHashMap["test.js"]= "Test case";

commandHashMap["checkfile"]="checkfile";
commandHashMap["printfiles"]="printfiles";

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

ignoreKeys["Meta"] = "Meta";

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
manPages["dir"]= "Return the amount of avaiable drive space";
manPages["cd"] = "Change working directory to desired directory.";

var dirIndex = -1; 
var currentDir = [mainFolder, mainHashMap];
var loginFlag1 = false;
var loginFlagUN = false;
var loginFlagPASS = false;

function parseString(inputString) {
	
	var input = inputString.split(" ");
	
	if (loginFlag1) {
		if(commandHashMap.hasOwnProperty(input[0])) { // check if it is a command
			//it is a command
			commandCall(input);	
		} else {
			if (currentDir[1].hasOwnProperty(input[0])) { // check if the file is on our list.
				processesCall(input);
			} else {
				// file not found
				document.getElementById("displaydevice").innerHTML  += "<br>Error. Undectected command and/or file.<br>";
			}
		}
	} else {
		
		if (loginFlagUN) {
			if(checkPassword(input) == false) {
				document.getElementById("displaydevice").innerHTML  += "<br>Error. Incorrect password.<br>";
				loginFlagUN = false;
			} else {
				loginFlag1 = true;
				keyBDflag1 = true;
			}
		} else {
			if(checkUsername(input) == false) {
				document.getElementById("displaydevice").innerHTML  += "<br>Error. Username not found.";
			}
		}
		
		if (loginFlag1 == false) {
			login();
		}
		
	}
	
}

//login();

function checkUsername(username) {
	
	if (username == superUsers[0][0]){
		loginFlagUN = true;
		currentUser = username; // the currentUser is now the super user
		cUser = "\\" + username;	
		//initd();
		return true;
	} else {
		for (var i =0; i < arrayOfUsers.length; i++) {
			if (username == arrayOfUsers[i][0]){
				loginFlagUN = true;
				return true;			
			}
		}
	}
	return false;
}

function checkPassword(password) {
	if (password == superUsers[0][1]){
	loginFlagPASS = true;
	//currentUser = username; // the currentUser is now the super user
	//cDirectory = "\\" + username;	
	//initd();
	return true;
	} else {
		for (var i =0; i < arrayOfUsers.length; i++) {
			if (password == arrayOfUsers[i][1]){
				loginFlagPASS = true;
				return true;			
			}
		}
	}
	return false;
}

 function login() {
	if (loginFlagUN) {
		document.getElementById('displaydevice').innerHTML += "<br>Please enter your password: ";
	} else {
		document.getElementById('displaydevice').innerHTML += "<br>Please enter your username: ";		
	}	 
}

function ls() {
	
	for (var i = 0; i < currentDir[0].file.length; i++) {
		document.getElementById("displaydevice").innerHTML  += "<br>" 
		+ currentDir[0].file[i].access
		+ "&nbsp&nbsp&nbsp&nbsp"
		+ currentDir[0].file[i].owner
		+ "&nbsp&nbsp&nbsp&nbsp" 
		+ currentDir[0].file[i].type
		+ "&nbsp&nbsp&nbsp&nbsp"
		+ currentDir[0].file[i].time 
		+ "&nbsp&nbsp&nbsp&nbsp" 
		+ currentDir[0].file[i].name;
	}
}

function cd(destination) {

	if (destination[1] == "..") {
		if (currentDir[0].parentF == "null") {
			document.getElementById("displaydevice").innerHTML  += "<br>Error. This is the root of the folder";
		} else {
			
			if (currentDir[0].parentF[0].name != "csc415") {
				cDirectory = "\\" + currentDir[0].parentF[0].name;
			} else {
				cDirectory = "";
			}	

			currentDir = currentDir[0].parentF;	
			
			return;
		}
	} else {
		for (var i = 0; i < currentDir[0].file.length; i++) {
			if (currentDir[0].file[i].name == destination[1] && currentDir[0].file[i].type == "folder") {
				
				cDirectory += "\\" + currentDir[0].file[i].name;
				
				//console.log(currentDir[0].file[i]);

				currentDir = [currentDir[0].file[i], currentDir[0].file[i].hashMap];
				return;
			}
		}
		document.getElementById("displaydevice").innerHTML  += "<br>Error. Folder not found.";
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
/*
function cat(input) {
	
	if(usersHashMap.hasOwnProperty(input)) {
		for (var i = 0; i < Object.keys(usersHashMap).length; i++) {
			if(usersFolder[i].name == input) {
				document.getElementById("displaydevice").innerHTML  += "<br>" + usersFolder[i].file;		
				break;
			}
		}
	} else {
		document.getElementById("displaydevice").innerHTML  += "<br>Error. File not found.<br>";
	}
}
*/


function cat(input) {
	
	//var currentDir = getCurrDir();
	
	if(currentDir[1].hasOwnProperty(input)) {
		for (var i = 0; i < Object.keys(usersHashMap).length; i++) {
			if(currentDir[0].file[i].name == input) {
				document.getElementById("displaydevice").innerHTML  += "<br>" +currentDir[0].file[i].file;		
				break;
			}
		}
	} else {
		document.getElementById("displaydevice").innerHTML  += "<br>Error. File not found.<br>";
	}
}

function more(input) {
	if(currentDir[1].hasOwnProperty(input)) {
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

	var new_file = {name: "" , owner: "", time: "", access: "", type: "", file: null, hashMap: null, parentF: null}
	//var currentDir = getCurrDir();
	if(currentDir[1].hasOwnProperty(input[1])) {
		for (var i = 0; i < currentDir[0].file.length; i++ ) {
			if(currentDir[0].file[i].name == input[1]) { 
				new_file.name = input[2];
				new_file.owner = currentDir[0].file[i].owner;
				new_file.time = currentDir[0].file[i].time;
				new_file.access = currentDir[0].file[i].access;
				new_file.file = currentDir[0].file[i].file;
				new_file.type = currentDir[0].file[i].type;
				new_file.hashMap = currentDir[0].file[i].hashMap;
				new_file.parentF = currentDir[0].file[i].parentF;
				
				currentDir[0].file[currentDir[0].file.length] = new_file;
				
				currentDir[0].file[currentDir[0].file.length - 1].name = input[2];

				currentDir[1][input[2]]= input[2];
				
				break;
			}
		}
	} else {
		document.getElementById("displaydevice").innerHTML  += "<br>File name not found.";
	}
}

function delete2(input) {
	if(currentDir[1].hasOwnProperty(input)) {
		delete currentDir[input];
		for (var i = 0; i < currentDir[0].file.length; i++) {
			if (currentDir[0].file[i].name == input) {
				currentDir[0].file.splice(i, 1);
				document.getElementById("displaydevice").innerHTML  += "<br>File " + input + " is deleted.";
				break;
			}
		}
	} else {
		document.getElementById("displaydevice").innerHTML  += "<br>File name not found.";
	}
}

function dir(){
    document.getElementById("displaydevice").innerHTML += "Amount of avaliable drive space: " + available_Space;
}


function checkFile(file) {
	if(checkFilesMap.hasOwnProperty(file)) {
		document.getElementById("displaydevice").innerHTML += "<br>" + "File: " + file + "&nbsp&nbsp&nbsp&nbsp&nbsp" + checkFilesMap[file];
	}
}

function printFiles() {
	for (var i in checkFilesMap) {
		document.getElementById("displaydevice").innerHTML += "<br>" + i;
	}
}