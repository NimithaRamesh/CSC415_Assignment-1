window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
	getkeyString(e.key);
}
			
var inputString = "";
var temp = "";
var temp2 = "";
var startLineCounter = 12;
var startLineIndex = 12;

function getkeyString(e) {
// if (flag == 1)
//     if (key == space)
//        print next index
// else 
	if(!ignoreKeys.hasOwnProperty(e)) { // this is for ignore special key
		if (e != "Enter") {
			if(e != "Backspace") {
				
				inputString += e;

				document.getElementById("displaydevice").innerHTML  += e;
				startLineCounter++;
				
			} else {
						
				temp = document.getElementById("displaydevice").innerHTML;
				
				if (startLineCounter > 12) {
					inputString = "";
					for (var i = 0; i < temp.length - 1; i++) {
						temp2 += temp[i];
						if (i >= startLineIndex) {
							inputString += temp[i];					
						}
					}				
					startLineCounter--;			
					document.getElementById("displaydevice").innerHTML  = temp2;		
					temp2 = "";
				}		
			}
		} else { 

			parseString(inputString);
			
			newLineReset();

			startLineCounter = 12;
			
			inputString = "";
		}
	}
}

function newLineReset() {
	document.getElementById("displaydevice").innerHTML  += "<br> C:\\csc415> ";
			
	startLineIndex = document.getElementById("displaydevice").innerHTML.length;
}