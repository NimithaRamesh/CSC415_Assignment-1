var queueState = [
"Ready",
"Ready",
"Ready",
"stop",
"Ready",
"Ready",
"Ready"
];

var numberOfProcess = 7;

function checkState() {

	for (var i = 0; i < numberOfProcess; i++) {
		if(queueState[i] == "Ready") {
			addProcessToQueueProcess(i);
		}
	}
}

function respondIO() {
	for (var i = 0; i < numberOfProcess; i++) {
		if(queueState[i] == "Waiting") {
			queueState[i] = "Ready";
		}
	}
}

function getState(position){
	return queueState[position];
}

function setState(position, new_state){
	queueState[position] = new_state;
}

// ***************************************************************************
