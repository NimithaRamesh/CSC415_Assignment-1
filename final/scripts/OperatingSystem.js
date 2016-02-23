var queueProcess = [-1];
var length;
// Initialize the start index of all processes
	var startPositionP1 = 0;  	// bank
	var startPositionP2 = 0;	// contact
	var startPositionP3 = 0;	// security
	var startPositionP4 = 0;	// route
	var startPositionP5 = 0;	// vector
	var startPositionP6 = 0;	// stat
	var startPositionP7 = 0;	// create own


function runProcess(processCase) {
	
	switch(processCase) {
		case -1:
		//If queue is -1 (empty) do nothing.
		break;
		
		case 0: // Process 1: Bank Book Calculator by Jagat
		
			if ((getState(0)) != "Completed")
			{
				changeState(0);
				startPositionP1 = process1(startPositionP1);
				
				if (startPositionP1 == -1) {
					CompleteProcess(0);
					document.getElementById("p1").value = "The account balance is " + acctBal;
				}	
			}
		break;
		
		case 1: // Process 2: Contact Manager by Mansi
		
			if ((getState(1)) != "Completed")
			{
				changeState(1);
				startPositionP2 = process2(startPositionP2);
				if (startPositionP2 == false) {
					CompleteProcess(1);
					document.getElementById("p2").value = "Name doesn't found";
				}	
				if (startPositionP2 == true) {
					CompleteProcess(1);
					document.getElementById("p2").value = "Name " + testName + " is found";
				}	
			}		
		break;
		
		case 2: // Process 3: Update a security file by Yongcai Huang
		
			if ((getState(2)) != "Completed") 
			{
				changeState(2);
				startPositionP3 = process3(startPositionP3);
				if (startPositionP3 == "Element not found") {	
					CompleteProcess(2);
					document.getElementById("p3").value = "The username doesn't found";
				}
				if (startPositionP3 == "successful") {
					CompleteProcess(2);
					document.getElementById("p3").value = "It is successful changed the username and password";
				}
			}		
		break;
		
		case 3: // Process 4: Find Routes by Mayank
			
		break;
		
		case 4: // Process 5: Caculate Vector by Tony
			if ((getState(4)) != "Completed")
			{
				changeState(4);
				startPositionP5 = process5(startPositionP5);
				
				if (startPositionP5 == -1) {
					CompleteProcess(4);
					document.getElementById("p5").value = "The final x vector is " + totalNumberX;
					document.getElementById("p5").value += "\n" + "The final y vector is " + totalNumberY;
				}	
			}
		break;
		
		case 5: // Process 6: Calculate Stat by Nimitha
			if ((getState(5)) != "Completed")
			{
				changeState(5);
				startPositionP6 = process6(startPositionP6);
				if (startPositionP6 == -1) {
					CompleteProcess(5);
					document.getElementById("p6").value = "The SO2 average collected from " + getStatsLength()
									+ " different cities in the US is: " + statsAvg;
					
				}	
			}
		break;
		
		case 6: // Process 7: Other process by Asaf
		
			if ((getState(6)) != "Completed")
			{
				changeState(6);
				startPositionP7 = process7(startPositionP7);
				if (startPositionP7 == false) {
					CompleteProcess(6);
					document.getElementById("p7").value = "User not found";				
				}	
				if (startPositionP7 == true) {
					CompleteProcess(6);
					document.getElementById("p7").value = name + "'s phone number is " + phoneNumber;
				}	
			}
		break;
	
		default: //Error
		break;
	}
}

function changeState(position) {
	
	for (var i = 0; i < numberOfProcess; i++) {
		if (getState(i) == "Running") {
			
			setState(i, "Waiting");
			console.log("Process " + (i + 1) + " State: " + getState(i));
			break;
		}
	}
	setState(position, "Running");
	console.log("Process " + (position + 1) + " State: " + getState(position));
}

function CompleteProcess(position){
	setState(position, "Completed");
	console.log("Process " + (position + 1) + " State: " + getState(position));
}

function addProcessToQueueProcess(position) {
	if (queueProcess[0] == -1) {
		queueProcess.shift();
	}
	queueProcess.push(position);
}

function checkQueueProcess() {
	
	if (queueProcess[0] != -1) {
		runProcess(queueProcess.shift());
	}
	
	if (queueProcess.length == 0) {
		queueProcess.push(-1);
	}
}

//***********************************************************************

// Process 2: Contact Manager by Mansi
function getContact(){
   var mycontact = getContacts();
   return mycontact;
}

function getContactLen(){
  var len = getContactLngth();
  return len;
}
/* End of Mansi's block */

// Process 3: Update a security file by Yongcai Huang
function getUsernameList() {
	var userlist = getUsernames();
	return userlist;
}

function getPasswordList() {
	var passwordlist = getPasswords();
	return passwordlist;
}

function getUsernameAt(pos) {
	var user = getUsernameAtPos(pos);
	return user;
}

function getPasswordAt(pos) {
	var pass = getPasswordAtPos(pos);
	return pass;
}

function getNumbOfAccounts() {
	return getNumberOfAccount();
}

function setUserAndPass(new_name, new_password, position){
	setUsernameAndPasswrod(new_name, new_password, position);
}

// ******** Yongcai Huang Block END here ***************

/* Nimitha's block*/
function getStatistics(statsPos) {
  var myStats = getStats(statsPos);
  return myStats;
}

function getStatsLength(){
  var len = getStatsLen();
  return len;
}

/* End of Nimitha's block */

/* Asaf's block*/
function getNameListLength(){
  var len = getNameLength();
  return len;
}
/* End of Asaf's block */


//*********************************************************************

