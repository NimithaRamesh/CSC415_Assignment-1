var arraylistUser = [
"clawshortcrust",
"sordiniboar",
"anglestrip",
"informalmuch",
"customerssuckling",
"merryplants",
"membersdrizzly",
"coronagraphnavel",
"bellowingwobbling",
"chancefunding",
"bootedconcur",
"whistleligament",
"everestvapid",
"potplanitia",
"nominationworm",
"criteriawildebeest",
"smallpeeler",
"unmannedbite",
"readoctagon",
"iamsuperman",
"kneelkestrel",
"dingdongtime",
"carnotchromate",
"chromespud",
"shakinghinny",
"muddyhoop",
"sourdoughbargain",
"jukeboxsociable",
"threatencaper",
"equatorflickering"
];

var arraylistPass = [
"S28ecsCp",
"7nXex8rV",
"KFkWc4qK",
"9eEq2QEc",
"LLaSUVfn",
"nwSJzJBD",
"WCGUfJKF",
"9UukDUwn",
"jZPMknZz",
"em7k2xvu",
"WHdJcdQr",
"CYFHLqyk",
"n6ZA9NKL",
"StZdtEyT",
"7Bjpemyf",
"WKPQyJSq",
"6bJG9EUQ",
"3G2zXupD",
"U8pV2GtY",
"fVjDMrsv",
"8eeu3k87",
"B7LwZcBz",
"ELRmhRDU",
"faBnb6VX",
"YVfaZ5fZ",
"DgTPNPH3",
"KqK7cvqZ",
"HGtGVj2L",
"PKRQPqQG",
"2Z7kGvrC"
];

var numberOfAccount = 30;
/*
//var vacal = ["a","e","i","o","u"];  // 5
//var consonant = ["q","w","r","t","y","p","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];  //20
//var digit = ["0","1","2","3","4","5","6","7","8","9"];  // 10
//var passwordLength = 6;
*/
/*
var characterList = ["a","e","i","o","u","q","w","r","t","y","p","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m","0","1","2","3","4","5","6","7","8","9"];
var randomNum;

*/
/*
function initialProcess() {
	//passwordGen();
	//userNameGen();
	//printarray();
}

*/
/*
function passwordGen() {
	var i, x;

	var temp = "";

	for (i = 0; i < numberOfAccount; i++) {
		temp = "";
		for (x = 0; x < passwordLength; x++) {
			randomNumber(35);
			temp += characterList[randomNum];
		}

		arraylistPass[i] = temp;

	}
}
*/
/*
function userNameGen() {
	var i, x;
	temp = "";

	for (i = 0; i < numberOfAccount; i++) {
		temp = "";
		for (x = 0; x < 2; x++) {
			randomNumber(20);
			temp += consonant[randomNum];

			randomNumber(5);
			temp += vacal[randomNum];
		}

		arraylistUser[i] = temp;
	}
}
*/
/*
function randomNumber(maxNumber) {

	randomNum = Math.floor((Math.random() * maxNumber) + 1) - 1;

}
*/
/*
function printarray() {
	var i, x;
	document.getElementById("textarea1").value = "User Name: \n";
	document.getElementById("textarea2").value = "Password: \n";
	for (i = 0; i < numberOfAccount; i++) {
		document.getElementById("textarea1").value += (i + 1) + "- " + arraylistUser[i] + "\n";
		document.getElementById("textarea2").value += (i + 1) + "- " + arraylistPass[i] + "\n";
	}

}
*/
function getUsernames() {
	return arraylistUser;
}

function getPasswords() {
	return arraylistPass;
}


function getUsernameAtPos(pos) {
	return arraylistUser[pos];
}

function getPasswordAtPos(pos) {
	return arraylistPass[pos];
}

function getNumberOfAccount() {
	return numberOfAccount;
}

function setUsernameAndPasswrod(new_name, new_password, position) {
	arraylistUser[position] = new_name;
	arraylistPass[position] = new_password;
}
