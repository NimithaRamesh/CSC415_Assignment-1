// Bank Book Calculator process
function getAccInfom(){
   var myAccInfo = getAccInfo();
   return myAccInfo;
}

// Contact Manager process
function getContact(){
   var mycontact = getContacts();
   return mycontact;
}

function getContactLen(){
  var len = getContactLngth();
  return len;
}

// Update a security file process
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

// Find Routes process


// Calculate Vectors process

// Calculate Stats process

// Others creative process
