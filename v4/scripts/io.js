var contacts = ["Mansi Saini", "Harish Chowdhary", "Sannuj Singhal", "Karan Gupta"];

var stats = [10, 13, 12, 17, 56, 36, 29, 14, 10, 24, 110, 28, 17, 8, 30, 9, 47, 35, 29, 14, 56, 14, 11,
            46, 11, 23, 65, 26, 69, 61, 94, 10, 18, 9, 10, 28, 31, 26, 29, 31, 16];
var acctTrans = [];
var acctBal = 0;

var i
var nums;
for(i = 0; i < 100; i++)
{
    nums = Math.floor((Math.random()*200) + 1);
	nums *= Math.random() < 0.5 ? -1 : 1;

    acctTrans[i] = nums;
}

function getContacts(){
  return contacts;
}

function getContactLngth(){
  return contacts.length;
}

function getAccInfo(){
  return acctTrans;
}

/* Nimitha's block */
function getStats(statsPos){
  var element = stats[statsPos];
  return element;
}

function getStatsLen(){
  return stats.length;
}

/* End of Nimitha's block */
