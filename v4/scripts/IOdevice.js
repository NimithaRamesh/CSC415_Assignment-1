var queueState = [
"initial",
"initial",
"initial",
"initial",
"initial",
"initial",
"initial",
"initial"
];

var numberOfProcess = 8;

function initialP() {
	x = Math.floor((Math.random() * numberOfProcess) + 1);
	queueState[x - 1] = "ready";
	
	checkState();
	
	//alert(x-1);
}

function checkState() {

	for (var i = 0; i < numberOfProcess; i++) {
		if(queueState[i] == "ready") {
			queueState[i] = "running";
			//runProcess(i + 1);
			
		}
		
	}
}

function changeState(position) {
	
	for (var i = 0; i < numberOfProcess; i++) {
		if (queueState[i] == "running") {
			queueState[i] = "waiting";
			break;
		}
	}
	
	queueState[position] = "running";
	runProcess(i + 1);
}