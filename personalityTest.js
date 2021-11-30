//globals
var scene = 0; //0 for splash, 1-10 for questions

//objects
var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
};

Button.prototype.draw = function() {
    fill(0, 234, 255);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
};

Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};
//Splashscreen buttons
var btnStart1 = new Button({
    x: 124,
    y: 168,
    label: "   Start Test 1",
    onClick: function() {
        scene = 1;
    }
});
//Quiz buttons; named btnQuestionAnswer
//question 1
var btnOneOne = new Button({
    x: 49,
    y: 210,
    label: "           A",
    onClick: function() {
        if(scene===1){
        scene = 2;
        }
    }
});
var btnOneTwo = new Button({
    x: 201,
    y: 210,
    label: "           B",
    onClick: function() {
        if(scene===1){
        scene = 2;
        }
    }
});
var btnOneThree = new Button({
    x: 49,
    y: 262,
    label: "           C",
    onClick: function() {
        if(scene===1){
        scene = 2;
        }
    }
});
var btnOneFour = new Button({
    x: 201,
    y: 262,
    label: "           D",
    onClick: function() {
        if(scene===1){
        scene = 2;
        }
    }
});
//question 2 
var btnTwoOne = new Button({
    x: 49,
    y: 210,
    label: "           A",
    onClick: function() {
        if(scene===2){
        scene = 3;
        }
    }
});
var btnTwoTwo = new Button({
    x: 201,
    y: 210,
    label: "           B",
    onClick: function() {
        if(scene===2){
        scene = 3;
        }
    }
});
var btnTwoThree = new Button({
    x: 49,
    y: 262,
    label: "           C",
    onClick: function() {
        if(scene===2){
        scene = 3;
        }
    }
});
var btnTwoFour = new Button({
    x: 201,
    y: 262,
    label: "           D",
    onClick: function() {
        if(scene===2){
        scene = 3;
        }
    }
});
//question 3
var btnThreeOne = new Button({
    x: 49,
    y: 210,
    label: "           A",
    onClick: function() {
        if(scene===3){
        scene = 4;
        }
    }
});
var btnThreeTwo = new Button({
    x: 201,
    y: 210,
    label: "           B",
    onClick: function() {
        if(scene===3){
        scene = 4;
        }
    }
});
var btnThreeThree = new Button({
    x: 49,
    y: 262,
    label: "           C",
    onClick: function() {
        if(scene===3){
        scene = 4;
        }
    }
});
var btnThreeFour = new Button({
    x: 201,
    y: 262,
    label: "           D",
    onClick: function() {
        if(scene===3){
        scene = 4;
        }
    }
});
//question 4
var btnFourOne = new Button({
    x: 49,
    y: 210,
    label: "           A",
    onClick: function() {
        if(scene===4){
        scene = 5;
        }
    }
});
var btnFourTwo = new Button({
    x: 201,
    y: 210,
    label: "           B",
    onClick: function() {
        if(scene===4){
        scene = 5;
        }
    }
});
var btnFourThree = new Button({
    x: 49,
    y: 262,
    label: "           C",
    onClick: function() {
        if(scene===4){
        scene = 5;
        }
    }
});
var btnFourFour = new Button({
    x: 201,
    y: 262,
    label: "           D",
    onClick: function() {
        if(scene===4){
        scene = 5;
        }
    }
});
//question 5
var btnFiveOne = new Button({
    x: 49,
    y: 210,
    label: "           A",
    onClick: function() {
        if(scene===5){
        scene = 6;
        }
    }
});
var btnFiveTwo = new Button({
    x: 201,
    y: 210,
    label: "           B",
    onClick: function() {
        if(scene===5){
        scene = 6;
        }
    }
});
var btnFiveThree = new Button({
    x: 49,
    y: 262,
    label: "           C",
    onClick: function() {
        if(scene===5){
        scene = 6;
        }
    }
});
var btnFiveFour = new Button({
    x: 201,
    y: 262,
    label: "           D",
    onClick: function() {
        if(scene===5){
        scene = 6;
        }
    }
});
//question 6
var btnSixOne = new Button({
    x: 49,
    y: 210,
    label: "           A",
    onClick: function() {
        if(scene===6){
        scene = 7;
        }
    }
});
var btnSixTwo = new Button({
    x: 201,
    y: 210,
    label: "           B",
    onClick: function() {
        if(scene===6){
        scene = 7;
        }
    }
});
var btnSixThree = new Button({
    x: 49,
    y: 262,
    label: "           C",
    onClick: function() {
        if(scene===6){
        scene = 7;
        }
    }
});
var btnSixFour = new Button({
    x: 201,
    y: 262,
    label: "           D",
    onClick: function() {
        if(scene===6){
        scene = 7;
        }
    }
});
//question 7
var btnSevenOne = new Button({
    x: 49,
    y: 210,
    label: "           A",
    onClick: function() {
        if(scene===7){
        scene = 8;
        }
    }
});
var btnSevenTwo = new Button({
    x: 201,
    y: 210,
    label: "           B",
    onClick: function() {
        if(scene===7){
        scene = 8;
        }
    }
});
var btnSevenThree = new Button({
    x: 49,
    y: 262,
    label: "           C",
    onClick: function() {
        if(scene===7){
        scene = 8;
        }
    }
});
var btnSevenFour = new Button({
    x: 201,
    y: 262,
    label: "           D",
    onClick: function() {
        if(scene===7){
        scene = 8;
        }
    }
});
//question 8
var btnEightOne = new Button({
    x: 49,
    y: 210,
    label: "           A",
    onClick: function() {
        if(scene===8){
        scene = 9;
        }
    }
});
var btnEightTwo = new Button({
    x: 201,
    y: 210,
    label: "           B",
    onClick: function() {
        if(scene===8){
        scene = 9;
        }
    }
});
var btnEightThree = new Button({
    x: 49,
    y: 262,
    label: "           C",
    onClick: function() {
        if(scene===8){
        scene = 9;
        }
    }
});
var btnEightFour = new Button({
    x: 201,
    y: 262,
    label: "           D",
    onClick: function() {
        if(scene===8){
        scene = 9;
        }
    }
});
//question 9
var btnNineOne = new Button({
    x: 49,
    y: 210,
    label: "           A",
    onClick: function() {
        if(scene===9){
        scene = 10;
        }
    }
});
var btnNineTwo = new Button({
    x: 201,
    y: 210,
    label: "           B",
    onClick: function() {
        if(scene===9){
        scene = 10;
        }
    }
});
var btnNineThree = new Button({
    x: 49,
    y: 262,
    label: "           C",
    onClick: function() {
        if(scene===9){
        scene = 10;
        }
    }
});
var btnNineFour = new Button({
    x: 201,
    y: 262,
    label: "           D",
    onClick: function() {
        if(scene===9){
        scene = 10;
        }
    }
});
//question 10
var btnTenOne = new Button({
    x: 49,
    y: 210,
    label: "           A",
    onClick: function() {
        if(scene===10){
        scene = 11;
        }
    }
});
var btnTenTwo = new Button({
    x: 201,
    y: 210,
    label: "           B",
    onClick: function() {
        if(scene===10){
        scene = 11;
        }
    }
});
var btnTenThree = new Button({
    x: 49,
    y: 262,
    label: "           C",
    onClick: function() {
        if(scene===10){
        scene = 11;
        }
    }
});
var btnTenFour = new Button({
    x: 201,
    y: 262,
    label: "           D",
    onClick: function() {
        if(scene===10){
        scene = 11;
        }
    }
});
//functions; these functions draw the splash screen and the questions
var splash = function(){
    background(130, 225, 255);
    textSize(25);
    text("Fun Personality Tests", 80,135);
    btnStart1.draw(); 
};
var questionOne = function(){
    background(130, 225, 255);
    textSize(25);
    text("What type are you? "+ scene, 50,25);
    text("Fire type:", 65,65);
    text("Water type:", 65,95);
    text("Earth type:", 65,125);
    text("Electric type:", 65,155);
    btnOneOne.draw();
    btnOneTwo.draw();
    btnOneThree.draw();
    btnOneFour.draw();
};
var questionTwo = function(){
    background(130, 225, 255);
    textSize(25);
    text(" Choose a color? "+ scene, 50,25);
    text("Red:", 65,65);
    text("Yellow:", 65,95);
    text("Blue :", 65,125);
    text("Green:", 65,155);
    btnTwoOne.draw();
    btnTwoTwo.draw();
    btnTwoThree.draw();
    btnTwoFour.draw();
};
var questionThree = function(){
    background(130, 225, 255);
    textSize(25);
    text("Question "+ scene, 50,25);
    text("A:", 65,65);
    text("B:", 65,95);
    text("C:", 65,125);
    text("D:", 65,155);
    btnThreeOne.draw();
    btnThreeTwo.draw();
    btnThreeThree.draw();
    btnThreeFour.draw();
};
var questionFour = function(){
    background(130, 225, 255);
    textSize(25);
    text("Question "+ scene, 50,25);
    text("A:", 65,65);
    text("B:", 65,95);
    text("C:", 65,125);
    text("D:", 65,155);
    btnFourOne.draw();
    btnFourTwo.draw();
    btnFourThree.draw();
    btnFourFour.draw();
};
var questionFive = function(){
    background(130, 225, 255);
    textSize(25);
    text("Question "+ scene, 50,25);
    text("A:", 65,65);
    text("B:", 65,95);
    text("C:", 65,125);
    text("D:", 65,155);
    btnFiveOne.draw();
    btnFiveTwo.draw();
    btnFiveThree.draw();
    btnFiveFour.draw();
};
var questionSix = function(){
    background(130, 225, 255);
    textSize(25);
    text("Question "+ scene, 50,25);
    text("A:", 65,65);
    text("B:", 65,95);
    text("C:", 65,125);
    text("D:", 65,155);
    btnSixOne.draw();
    btnSixTwo.draw();
    btnSixThree.draw();
    btnSixFour.draw();
};
var questionSeven = function(){
    background(130, 225, 255);
    textSize(25);
    text("Question "+ scene, 50,25);
    text("A:", 65,65);
    text("B:", 65,95);
    text("C:", 65,125);
    text("D:", 65,155);
    btnSevenOne.draw();
    btnSevenTwo.draw();
    btnSevenThree.draw();
    btnSevenFour.draw();
};
var questionEight = function(){
    background(130, 225, 255);
    textSize(25);
    text("Question "+ scene, 50,25);
    text("A:", 65,65);
    text("B:", 65,95);
    text("C:", 65,125);
    text("D:", 65,155);
    btnEightOne.draw();
    btnEightTwo.draw();
    btnEightThree.draw();
    btnEightFour.draw();
};
var questionNine = function(){
    background(130, 225, 255);
    textSize(25);
    text("Question "+ scene, 50,25);
    text("A:", 65,65);
    text("B:", 65,95);
    text("C:", 65,125);
    text("D:", 65,155);
    btnNineOne.draw();
    btnNineTwo.draw();
    btnNineThree.draw();
    btnNineFour.draw();
};
var questionTen = function(){
    background(130, 225, 255);
    textSize(25);
    text("Question "+ scene, 50,25);
    text("A:", 65,65);
    text("B:", 65,95);
    text("C:", 65,125);
    text("D:", 65,155);
    btnTenOne.draw();
    btnTenTwo.draw();
    btnTenThree.draw();
    btnTenFour.draw();
};
//main
draw= function() {

    if(scene === 0){
        splash();
    }   
    else if(scene === 1){
        questionOne();
    }
    else if(scene === 2){
        questionTwo();
    }
    else if(scene === 3){
        questionThree();
    }
    else if(scene === 4){
        questionFour();
    }
    else if(scene === 5){
        questionFive();
    }
    else if(scene === 6){
        questionSix();
    }
    else if(scene === 7){
        questionSeven();
    }
    else if(scene === 8){
        questionEight();
    }
    else if(scene === 9){
        questionNine();
    }
    else if(scene === 10){
        questionTen();
    }
    else if(scene === 11){
        scene = 0;
    }
    
};

mouseClicked = function() {
    btnStart1.handleMouseClick();
    //question 1
    if(scene === 1){
    btnOneOne.handleMouseClick();
    btnOneTwo.handleMouseClick();
    btnOneThree.handleMouseClick();
    btnOneFour.handleMouseClick();
    }
    //question 2
    else if(scene === 2){
    btnTwoOne.handleMouseClick();
    btnTwoTwo.handleMouseClick();
    btnTwoThree.handleMouseClick();
    btnTwoFour.handleMouseClick();
    }
    //question 3
    else if(scene === 3){
    btnThreeOne.handleMouseClick();
    btnThreeTwo.handleMouseClick();
    btnThreeThree.handleMouseClick();
    btnThreeFour.handleMouseClick();
    }
    //question 4
    else if(scene === 4){
    btnFourOne.handleMouseClick();
    btnFourTwo.handleMouseClick();
    btnFourThree.handleMouseClick();
    btnFourFour.handleMouseClick();
    }
    //question 5
    else if(scene === 5){
    btnFiveOne.handleMouseClick();
    btnFiveTwo.handleMouseClick();
    btnFiveThree.handleMouseClick();
    btnFiveFour.handleMouseClick();
    }
    //question 6
    else if(scene === 6){
    btnSixOne.handleMouseClick();
    btnSixTwo.handleMouseClick();
    btnSixThree.handleMouseClick();
    btnSixFour.handleMouseClick();
    }
    //question 7
    else if(scene === 7){
    btnSevenOne.handleMouseClick();
    btnSevenTwo.handleMouseClick();
    btnSevenThree.handleMouseClick();
    btnSevenFour.handleMouseClick();
    }
    //question 8
    else if(scene === 8){
    btnEightOne.handleMouseClick();
    btnEightTwo.handleMouseClick();
    btnEightThree.handleMouseClick();
    btnEightFour.handleMouseClick();
    }
    //question 9
    else if(scene === 9){
    btnNineOne.handleMouseClick();
    btnNineTwo.handleMouseClick();
    btnNineThree.handleMouseClick();
    btnNineFour.handleMouseClick();
    }
    //question 10
    else if(scene === 10){
    btnTenOne.handleMouseClick();
    btnTenTwo.handleMouseClick();
    btnTenThree.handleMouseClick();
    btnTenFour.handleMouseClick();
    }
};
