
function Fork(used) {
    this.used = used;
	
    this.use = function (){
        used = true;
    };
    this.dontUse = function(){
        used = false;
    };
    this.isBeingUsed = function(used){
        
        return this.used;
    };
}
var f1 = new Fork(false);
var f2 = new Fork(false);
var f3 = new Fork(false);
var f4 = new Fork(false);
var f5 = new Fork(false);

var forks = [f1,f2,f3,f4,f5];

function Philosopher(left,right,number,eating, hasLeft, hasRight){
    this.left = new Fork(false);
    this.right = new Fork(false);
    this.number = number;
	
    this.eat = function(){
		
		if(left.isBeingUsed() === false){
			this.hasLeft = true;
			left.use();
		}

		if(right.isBeingUsed() === false){
			this.hasRight = true;
			right.use();
		}

		if(this.hasLeft && this.hasRight){
			this.eating = true;
			return "Philosopher " + number + " is eating.";
		} else{
			if(this.hasLeft && !this.hasRight){
				left.dontUse();
			}
		else if(!this.hasLeft && this.hasRight){
				right.dontUse();
			}
		}
    };
	/*
    this.think = function() {
        left.dontUse();
        this.hasLeft = false;
        right.dontUse();
        this.hasRight = false;
        this.eating = false;
        return "Philosopher " +number + " is thinking.";
    };
	*/
}

var p1 = new Philosopher(p5,p1,1,false,false,false);
var p2 = new Philosopher(p1,p2,2,false,false,false);
var p3 = new Philosopher(p2,p3,3,false,false,false);
var p4 = new Philosopher(p3,p4,4,false,false,false);
var p5 = new Philosopher(p4,p5,5,false,false,false);

var philosophers = [p1,p2,p3,p4,p5];

var run = function() {
    var timer = 0;
    do{
        timer++;
    }
    while(timer<10)
};


var chopstick = { st1: true, st2: true, st3: true, st4: true, st5: true};

function thinking() {
	
	
}

function wait() {
	
	
}

function diningPhilosophers() {
	
	callphi1(1);
/*	
	callphi2();
	callphi3();
	callphi4();
	callphi5();
	*/
}

function callphi1(i) {
	
	if(tryGetLeftChopstick(i)) {
		if(tryGetRightChopstick(i) == true) {
			// eat
			
			
			
			// release chopstick
			// thinking
		} else {
			
		}
	} else {
		
	}
}

function tryGetLeftChopstick(i) {
	if (chopstick[i]) {
		chopstick[i] == false;
		return true;
	} else {
		return false;
	}
}

function tryGetRightChopstick(i) {
	if (i != 1) {
		if(chopstick[i - 1]) {
			chopstick[i - 1] == false;
			return true;
		}
	} else {
		if(chopstick[5]) {
			chopstick[i - 1] == false;
			return true;
		} 
	}
	return false;
}

