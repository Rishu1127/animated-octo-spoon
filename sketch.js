var gameState
var creditInput

var creditInputText = "Please Enter the Credit Number: "

function preload() {

}

function setup() {
   createCanvas(windowWidth, windowHeight)
   let inp = createInput('');
        inp.position(0, 0);
        inp.size(100);
        inp.input(myInputEvent);
   
   
    
}
   
function draw() {
    background("#7abaf2")
   
    





    
}

function myInputEvent() {
    console.log(inp.value())
}

function name2() {

}

function pin() {

}

function bank() {

}

function ownerName() {

}