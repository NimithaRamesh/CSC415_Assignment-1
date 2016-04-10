function testcase(){
  var textFile = ["Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
                  " mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim jus",
                  "to, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend ",
                  "tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
                  " Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem q",
                  "uam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut ",
                  "libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget",
                  " bibendum sodales, augue velit cursus nunc,"];
 
 var characterCounts = [];
  
 	

for (var i = 0, characterCounts = new Array(128); i < 128;) characterCounts[i++] = 0;
  
 var firstString = textFile[0];
 var keyValue;
  
  for(var i=0; i<firstString.length; i++){
	  
    //int keyValue = firstString[i];
	// check lock
	keyValue = firstString.charCodeAt(i);
    characterCounts[keyValue]++;
	// unlock
	
	
	//console.log("int??" + firstString[i]);
	//console.log("keyvalue??" + keyValue);
  }
  
  var stringSpace = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
  /*
  for (var i = 32; i < 80; i++) {
	  
	  document.getElementById("displaydevice").innerHTML  += "<br>" + characterCounts[i] + stringSpace + String.fromCharCode(i) + stringSpace
																	+ characterCounts[i + 48] + stringSpace  + String.fromCharCode(i + 48) + stringSpace ;
																	//+ characterCounts[i + 64] + "&nbsp&nbsp&nbsp&nbsp"  + String.fromCharCode(i + 64);
																	//+ characterCounts[i + 96] + stringSpace + String.fromCharCode(i + 96);
  }
  */
  
  document.getElementById("displaydevice").innerHTML  += "<br> Count " + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "  Character";
  
  document.getElementById("displaydevice").innerHTML  += "<br>" + characterCounts[32] + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "SPACE";
  
  for (var i = 33; i < 127; i++) {
	  if (i == 59) {
		  document.getElementById("displaydevice").innerHTML  += "<br>" + characterCounts[i] + stringSpace + 	"&#59;";
	  } else {
		  document.getElementById("displaydevice").innerHTML  += "<br>" + characterCounts[i] + stringSpace + String.fromCharCode(i);
	  }
	  
  }
  
  document.getElementById("displaydevice").innerHTML  += "<br>" + characterCounts[127] + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "DEL";
 // document.getElementById("displaydevice").innerHTML  += "<br>" + characterCounts;
}

/*

		for (int i = 32; i < 63; i++) {
			cout << i << " " << (char)i << "\t";
			cout << (i + 32) << " " << (char)(i + 32) << "\t";
			cout << (i + 62) << " " << (char)(i + 64) << "\n";

		}
*/

/*
Mutex Locks
do {
	
	acquire lock
	
	critical section // do the process
	
	release lock
	
	remainder section
	
} while (true);

acquire () {
	while (!available)
		; // busy wait
	available = false;
}

release() {
	available = true;
}
*/


