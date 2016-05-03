/* Asaf's block */
var phoneNumbersArr = ["415-222-3373" , "415-222-3733" ,"415-222-3033" ,"415-522-3143" ,"415-122-7833" ,
"415-252-3333" ,"415-522-3333" ,"415-222-3373" ,"415-222-3883" ,"415-222-3353" ,"415-222-3313" ,"415-222-3378" ,
"415-212-3373" ,"415-222-3393" ,"415-202-3333" ,"415-222-3333" ,"415-000-8933" ,"415-222-4474" ,"415-100-7785" ,
"415-282-3333" ,"415-222-3113" ,"415-222-3153" ,"415-172-7854" ,"415-222-1234" ,"415-222-3123" ,"415-222-4133" ,
"415-022-3633" ,"415-442-1414" ,"415-222-3323" ,"415-222-5633" ];

var namesArr = [
"John" , "Malka" ,"James" ,"Oren" ,"Mike" ,
"Boris" ,"Monika" ,"Andrea" ,"Oleg" ,"Abraham" ,
"Amit" ,"Amir" ,"Moris" ,"Noel" ,"Paul" ,
"Peter" ,"Chris" ,"Emmanuel" ,"Eric" ,"Kolin" ,
"Nora" ,"Lavar" ,"Meg" ,"Miriam" ,"Shannon" ,
"Savannah" ,"Dana" ,"Anna" ,"Maddie" ,"Janice" 
];

function getNameAtIndex(index)
{
	return namesArr[index];
}

function getPhoneAtIndex(index)
{
	return phoneNumbersArr[index];
}

function getNameLength() {
	return phoneNumbersArr.length;
}

/* End of Asaf's block */