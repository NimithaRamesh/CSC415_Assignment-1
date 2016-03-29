//Update a security file by Yongcai Huang
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
