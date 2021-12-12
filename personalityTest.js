//globals
var scene = 0; //0 for splash, 1-10 for questions, 11 for results, 12 for leaderboard
var quiz = 0; // 0 for pokemon, 1 and 2 TBA
var leaderBoard = [];// array which records results of tests since the start of program
var answerArray =[];// array for storing answers during a test
var index = 0;
var questionArray = [1,2,3,4,5,6,7,8,9,10];//array for order of questions

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
    textSize(18);
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
//functions

//functions for Jared's Bitmoji
var drawHeadJared=function(bitmojiX,bitmojiY,bitmojiH){
    var r = bitmojiH/80; 
    fill(35, 18, 11);//haircolor
    rect(bitmojiX+r*10, bitmojiY+r*38, r*80, r*50, 20);//hair
    fill(255,224,189);//skin
    ellipse(bitmojiX+r*50,bitmojiY+r*50,r*80,r*80);//head
    fill(35, 18, 11);//haircolor
    arc(bitmojiX+r*50,bitmojiY+r*50,r*80,r*78,0,180);//beard
    fill(255,224,189);//skin
    arc(bitmojiX+r*50,bitmojiY+r*50,r*80,r*24,0,180);//beardborder
    arc(bitmojiX+r*50,bitmojiY+r*71,r*35,r*14,0,360);//beardhole
    arc(bitmojiX+r*50,bitmojiY+r*71,r*25,r*0,5,175);//mouth
    arc(bitmojiX+r*35,bitmojiY+r*48,r*24,r*22,0,360);//left lens
    arc(bitmojiX+r*65,bitmojiY+r*48,r*24,r*22,0,360);//right lens
    line(bitmojiX+r*48,bitmojiY+r*48,bitmojiX+r*52,bitmojiY+r*48);//glassesbridge
    line(bitmojiX+r*10,bitmojiY+r*48,bitmojiX+r*21,bitmojiY+r*48);//leftglasses
    line(bitmojiX+r*78,bitmojiY+r*48,bitmojiX+r*89,bitmojiY+r*48);//rightglasses
    fill(255, 0, 0);//headbandcolor
    rect(bitmojiX+r*10, bitmojiY+r*17, r*80, r*16, r*20);//headband
    fill(35, 18, 11);//haircolor
    arc(bitmojiX+r*90,bitmojiY+r*9,r*80,r*78,85,180);//righthair
    arc(bitmojiX+r*10,bitmojiY+r*9,r*80,r*78,0,95);//lefthair
    fill (0,0,0);
    ellipse(bitmojiX+r*35,bitmojiY+r*48,r*10,r*10);//left eye
    ellipse(bitmojiX+r*65,bitmojiY+r*48,r*10,r*10);//right eye
};
var drawBodyJared= function(bitmojiX,bitmojiY,bitmojiH){
    var r = bitmojiH/80; 
    fill(84, 120, 72);//shirtcolor
    rect(bitmojiX+r*10, bitmojiY+r*90, r*80, r*50, r*20);//body
    textSize(r*40);
    fill(0, 0, 0);
    text("JS",bitmojiX+r*27,bitmojiY+r*90);
};
var drawBitmojiJared= function(bitmojiX,bitmojiY,bitmojiH){
    drawHeadJared(bitmojiX,bitmojiY,bitmojiH);
    drawBodyJared(bitmojiX,bitmojiY,bitmojiH);
};

//this function is used in the scoring functions to select the result
//it finds the position of the element of the array with the highest value
var findMaxPosition = function(array){
    var max = 0;
    var pos = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
            pos = i;
        }
    }
    return pos;
};

//the function for scoring the tests
var scoreTest = function(){
//note about scoring: 
// quiz0 : 1=charmander, 2=pikachu, 3=squirtle, 4=bulbasaur
// quiz1 :
// quiz 2:
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    for(var i = 0; i < answerArray.length; i++){
        if(answerArray[i] === 1){
            a += 1;
        }
        else if(answerArray[i] === 2){
            b += 1;
        }
        else if(answerArray[i] === 3){
            c += 1;
        }
        else if(answerArray[i] === 4){
            d += 1;
        }
    }
    var scoreArray = [a,b,c,d];
    return findMaxPosition(scoreArray);
};

//the function for shuffling the order of the questions
var shuffle = function(array){
    if(array.length === 11){
        array.pop();
    }

    var counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        var ind = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        var temp = array[counter];
        array[counter] = array[ind];
        array[ind] = temp;
    }
    
    array.push(11);
};//taken from khan academy memory game

shuffle(questionArray);

//Splashscreen buttons
var btnStart0 = new Button({
    x: 124,
    y: 168,
    label: "Pokémon Starter",
    onClick: function() {
        quiz = 0;
        scene = index + 1; index++;
    }
});
var btnStart1 = new Button({
    x: 124,
    y: 222,
    label: "Pokémon Starter",
    onClick: function() {
        quiz = 1;
        scene = index + 1; index++;
    }
});
var btnStart2 = new Button({
    x: 124,
    y: 277,
    label: "Pokémon Starter",
    onClick: function() {
        quiz = 2;
        scene = index + 1; index++;
    }
});

//Result screen buttons
var btnMainMenu = new Button({
    x: 124,
    y: 335,
    label: " Main Menu",
    onClick: function() {
        answerArray=[];
        shuffle(questionArray);
        scene = 0;
        index = 0;
    }
});

//Quiz buttons; named btnQuestionAnswer
//question 1
var btnOneOne = new Button({
    x: 49,
    y: 210,
    label: "           A",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(1);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(1);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(1);
                scene = index + 1; index++;
            }
        }
        
    }
});
var btnOneTwo = new Button({
    x: 201,
    y: 210,
    label: "           B",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(2);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(2);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(2);
                scene = index + 1; index++;
            }
        }
    }
});
var btnOneThree = new Button({
    x: 49,
    y: 262,
    label: "           C",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(3);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(3);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(3);
                scene = index + 1; index++;
            }
        }
    }
});
var btnOneFour = new Button({
    x: 201,
    y: 262,
    label: "           D",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(4);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(4);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(4);
                scene = index + 1; index++;
            }
        }
    }
});
//question 2 
var btnTwoOne = new Button({
    x: 49,
    y: 210,
    label: "           A",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(1);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(1);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(1);
                scene = index + 1; index++;
            }
        }
    }
});
var btnTwoTwo = new Button({
    x: 201,
    y: 210,
    label: "           B",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(3);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(3);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(3);
                scene = index + 1; index++;
            }
        }
    }
});
var btnTwoThree = new Button({
    x: 49,
    y: 262,
    label: "           C",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(4);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(4);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(4);
                scene = index + 1; index++;
            }
        }
    }
});
var btnTwoFour = new Button({
    x: 201,
    y: 262,
    label: "           D",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(2);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(2);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(2);
                scene = index + 1; index++;
            }
        }
    }
});
//question 3
var btnThreeOne = new Button({
    x: 49,
    y: 210,
    label: "           A",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(4);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(4);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(4);
                scene = index + 1; index++;
            }
        }
    }
});
var btnThreeTwo = new Button({
    x: 201,
    y: 210,
    label: "           B",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(2);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(2);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(2);
                scene = index + 1; index++;
            }
        }
    }
});
var btnThreeThree = new Button({
    x: 49,
    y: 262,
    label: "           C",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(3);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(3);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(3);
                scene = index + 1; index++;
            }
        }
    }
});
var btnThreeFour = new Button({
    x: 201,
    y: 262,
    label: "           D",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(1);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(1);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(1);
                scene = index + 1; index++;
            }
        }
    }
});
//question 4
var btnFourOne = new Button({
    x: 49,
    y: 210,
    label: "           A",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(4);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(4);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(4);
                scene = index + 1; index++;
            }
        }
    }
});
var btnFourTwo = new Button({
    x: 201,
    y: 210,
    label: "           B",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(3);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(3);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(3);
                scene = index + 1; index++;
            }
        }
    }
});
var btnFourThree = new Button({
    x: 49,
    y: 262,
    label: "           C",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(1);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(1);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(1);
                scene = index + 1; index++;
            }
        }
    }
});
var btnFourFour = new Button({
    x: 201,
    y: 262,
    label: "           D",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(2);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(2);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(2);
                scene = index + 1; index++;
            }
        }
    }
});
//question 5
var btnFiveOne = new Button({
    x: 49,
    y: 210,
    label: "           A",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(2);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(2);
                scene = index + 1; index++;
            }
        }
         else if(quiz === 2){
            if(scene===index){
                answerArray.push(2);
                scene = index + 1; index++;
            }
        }
    }
});
var btnFiveTwo = new Button({
    x: 201,
    y: 210,
    label: "           B",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(1);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(1);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(1);
                scene = index + 1; index++;
            }
        }
    }
});
var btnFiveThree = new Button({
    x: 49,
    y: 262,
    label: "           C",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(3);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(3);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(3);
                scene = index + 1; index++;
            }
        }
    }
});
var btnFiveFour = new Button({
    x: 201,
    y: 262,
    label: "           D",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(4);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(4);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(4);
                scene = index + 1; index++;
            }
        }
    }
});
//question 6
var btnSixOne = new Button({
    x: 49,
    y: 210,
    label: "           A",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(4);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(4);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(4);
                scene = index + 1; index++;
            }
        }
    }
});
var btnSixTwo = new Button({
    x: 201,
    y: 210,
    label: "           B",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(1);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(1);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(1);
                scene = index + 1; index++;
            }
        }
    }
});
var btnSixThree = new Button({
    x: 49,
    y: 262,
    label: "           C",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(3);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(3);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(3);
                scene = index + 1; index++;
            }
        }
    }
});
var btnSixFour = new Button({
    x: 201,
    y: 262,
    label: "           D",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(2);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(2);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(2);
                scene = index + 1; index++;
            }
        }
    }
});
//question 7
var btnSevenOne = new Button({
    x: 49,
    y: 210,
    label: "           A",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(1);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(1);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(1);
                scene = index + 1; index++;
            }
        }
    }
});
var btnSevenTwo = new Button({
    x: 201,
    y: 210,
    label: "           B",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(2);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(2);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(2);
                scene = index + 1; index++;
            }
        }
    }
});
var btnSevenThree = new Button({
    x: 49,
    y: 262,
    label: "           C",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(3);
                scene = index + 1; index++;
            }
        }
        if(quiz === 1){
            if(scene===index){
                answerArray.push(3);
                scene = index + 1; index++;
            }
        }
        if(quiz === 2){
            if(scene===index){
                answerArray.push(3);
                scene = index + 1; index++;
            }
        }
    }
});
var btnSevenFour = new Button({
    x: 201,
    y: 262,
    label: "           D",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(4);
                scene = index + 1; index++;
            }
        }
        if(quiz === 1){
            if(scene===index){
                answerArray.push(4);
                scene = index + 1; index++;
            }
        }
        if(quiz === 2){
            if(scene===index){
                answerArray.push(4);
                scene = index + 1; index++;
            }
        }
    }
});
//question 8
var btnEightOne = new Button({
    x: 49,
    y: 210,
    label: "           A",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(4);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(4);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(4);
                scene = index + 1; index++;
            }
        }
    }
});
var btnEightTwo = new Button({
    x: 201,
    y: 210,
    label: "           B",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(1);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(1);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(1);
                scene = index + 1; index++;
            }
        }
    }
});
var btnEightThree = new Button({
    x: 49,
    y: 262,
    label: "           C",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(2);
                scene = index + 1; index++;
            }
        }
        if(quiz === 1){
            if(scene===index){
                answerArray.push(2);
                scene = index + 1; index++;
            }
        }
        if(quiz === 2){
            if(scene===index){
                answerArray.push(2);
                scene = index + 1; index++;
            }
        }
    }
});
var btnEightFour = new Button({
    x: 201,
    y: 262,
    label: "           D",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(3);
                scene = index + 1; index++;
            }
        }
        if(quiz === 1){
            if(scene===index){
                answerArray.push(3);
                scene = index + 1; index++;
            }
        }
        if(quiz === 2){
            if(scene===index){
                answerArray.push(3);
                scene = index + 1; index++;
            }
        }
    }
});
//question 9
var btnNineOne = new Button({
    x: 49,
    y: 210,
    label: "           A",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(1);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(1);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(1);
                scene = index + 1; index++;
            }
        }
    }
});
var btnNineTwo = new Button({
    x: 201,
    y: 210,
    label: "           B",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(3);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(3);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(3);
                scene = index + 1; index++;
            }
        }
    }
});
var btnNineThree = new Button({
    x: 49,
    y: 262,
    label: "           C",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(2);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(2);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(2);
                scene = index + 1; index++;
            }
        }
    }
});
var btnNineFour = new Button({
    x: 201,
    y: 262,
    label: "           D",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(4);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(4);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(4);
                scene = index + 1; index++;
            }
        }
    }
});
//question 10
var btnTenOne = new Button({
    x: 49,
    y: 210,
    label: "           A",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(3);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(3);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(3);
                scene = index + 1; index++;
            }
        }
    }
});
var btnTenTwo = new Button({
    x: 201,
    y: 210,
    label: "           B",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(4);
                scene = index + 1; index++;
            }
        }else if(quiz === 1){
            if(scene===index){
                answerArray.push(4);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(4);
                scene = index + 1; index++;
            }
        }
    }
});
var btnTenThree = new Button({
    x: 49,
    y: 262,
    label: "           C",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(1);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(1);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(1);
                scene = index + 1; index++;
            }
        }
    }
});
var btnTenFour = new Button({
    x: 201,
    y: 262,
    label: "           D",
    onClick: function() {
        if(quiz === 0){
            if(scene===index){
                answerArray.push(2);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 1){
            if(scene===index){
                answerArray.push(2);
                scene = index + 1; index++;
            }
        }
        else if(quiz === 2){
            if(scene===index){
                answerArray.push(2);
                scene = index + 1; index++;
            }
        }
    }
});

// Scene functions; these functions draw the splash screen,results screen, and the questions
var splash = function(){
    background(130, 225, 255);
    
    drawBitmojiJared(22,190,60);
   
    textSize(25);
    text("Fun Personality Tests", 80,20);
    
    textSize(15);
    text("Choose from the three tests below to find out", 60,69);
    text("which thing from the themes you are most like", 60,85);
    text("by Jared Struminsky and Damien Johnson", 60,346);
    
    btnStart0.draw(); 
    btnStart1.draw();
    btnStart2.draw();
};
var results = function(){
    background(130, 225, 255);
    textSize(25);
    text("Results", 80,135);
    btnMainMenu.draw();
    textSize(25);
    
    if(scoreTest(answerArray) === 0){
        if(quiz === 0){
            text("Charmander", 135,200);
            leaderBoard.push("Charmander");
        }
        else if(quiz === 1){
            text("Charmander", 135,200);
            leaderBoard.push("Charmander");
        }
        else if(quiz === 2){
            text("Charmander", 135,200);
            leaderBoard.push("Charmander");
        }
    }
    else if(scoreTest(answerArray) === 1){
        if(quiz === 0){
            text("Pikachu", 135,200);
            leaderBoard.push("Pikachu");
        }
        else if(quiz === 1){
            text("Pikachu", 135,200);
            leaderBoard.push("Pikachu");
        }
        else if(quiz === 2){
            text("Pikachu", 135,200);
            leaderBoard.push("Pikachu");
        }
    }
    else if(scoreTest(answerArray) === 2){
        if(quiz === 0){
            text("Squirtle", 135,200);
            leaderBoard.push("Squirtle");
        }
        else if(quiz === 1){
            text("Squirtle", 135,200);
            leaderBoard.push("Squirtle");
        }
        else if(quiz === 2){
            text("Squirtle", 135,200);
            leaderBoard.push("Squirtle");
        }
    }
    else if(scoreTest(answerArray) === 3){
        if(quiz === 0){
             text("Bulbasaur", 135,200);
             leaderBoard.push("Bulbasaur");
        }
        else if(quiz === 1){
             text("Bulbasaur", 135,200);
             leaderBoard.push("Bulbasaur");
        }
        else if(quiz === 2){
             text("Bulbasaur", 135,200);
             leaderBoard.push("Bulbasaur");
        }
    }
};
var questionOne = function(){
    background(130, 225, 255);
    if(quiz === 0){
        textSize(25);
        text("Choose a color", 50,25);
        text("A: Red", 65,65);
        text("B: Yellow", 65,95);
        text("C: Blue", 65,125);
        text("D: Green", 65,155);
    }
    else if(quiz === 1){
        textSize(25);
        text("Choose the color", 50,25);
        text("A: Red", 65,65);
        text("B: Yellow", 65,95);
        text("C: Blue", 65,125);
        text("D: Green", 65,155);
    }
    else if(quiz === 2){
        textSize(25);
        text("Choose any color", 50,25);
        text("A: Red", 65,65);
        text("B: Yellow", 65,95);
        text("C: Blue", 65,125);
        text("D: Green", 65,155);
    }
    btnOneOne.draw();
    btnOneTwo.draw();
    btnOneThree.draw();
    btnOneFour.draw();
};
var questionTwo = function(){
    background(130, 225, 255);
    if (quiz === 0){
        textSize(16);
        text("Would you rather live on an island that always...", 50,25);
        textSize(25);
        text("A: Has wildfires", 65,65);
        text("B: Floods", 65,95);
        text("C: Has earthquakes", 65,125);
        text("D: Has lightning storms", 65,155);
    }
    else if (quiz === 1){
        textSize(16);
        text("Would you rather live on an island that always...", 50,25);
        textSize(25);
        text("A: Has wildfires", 65,65);
        text("B: Floods", 65,95);
        text("C: Has earthquakes", 65,125);
        text("D: Has lightning storms", 65,155);
    }
    else if (quiz === 2){
        textSize(16);
        text("Would you rather live on an island that always...", 50,25);
        textSize(25);
        text("A: Has wildfires", 65,65);
        text("B: Floods", 65,95);
        text("C: Has earthquakes", 65,125);
        text("D: Has lightning storms", 65,155);
    }
    btnTwoOne.draw();
    btnTwoTwo.draw();
    btnTwoThree.draw();
    btnTwoFour.draw();
};
var questionThree = function(){
    background(130, 225, 255);
    if( quiz === 0){
        textSize(22);
        text("Which movement do you prefer?", 50,25);
        textSize(25);
        text("A: Swinging", 65,65);
        text("B: Walking", 65,95);
        text("C: Swimming", 65,125);
        text("D: Flying", 65,155);
    }
    else if( quiz === 1){
        textSize(22);
        text("Which movement do you prefer?", 50,25);
        textSize(25);
        text("A: Swinging", 65,65);
        text("B: Walking", 65,95);
        text("C: Swimming", 65,125);
        text("D: Flying", 65,155);
    }
    else if( quiz === 2){
        textSize(22);
        text("Which movement do you prefer?", 50,25);
        textSize(25);
        text("A: Swinging", 65,65);
        text("B: Walking", 65,95);
        text("C: Swimming", 65,125);
        text("D: Flying", 65,155);
    }
    btnThreeOne.draw();
    btnThreeTwo.draw();
    btnThreeThree.draw();
    btnThreeFour.draw();
};
var questionFour = function(){
    background(130, 225, 255);
    if( quiz === 0){
        textSize(18);
        text("Which nature thing do you like more?", 50,25);
        textSize(25);
        text("A: Flowers", 65,65);
        text("B: Marine life", 65,95);
        text("C: Volcanoes", 65,125);
        text("D: I prefer technology", 65,155);
    }
    else if( quiz === 1){
        textSize(18);
        text("Which nature thing do you like more?", 50,25);
        textSize(25);
        text("A: Flowers", 65,65);
        text("B: Marine life", 65,95);
        text("C: Volcanoes", 65,125);
        text("D: I prefer technology", 65,155);
    }
    else if( quiz === 2){
        textSize(18);
        text("Which nature thing do you like more?", 50,25);
        textSize(25);
        text("A: Flowers", 65,65);
        text("B: Marine life", 65,95);
        text("C: Volcanoes", 65,125);
        text("D: I prefer technology", 65,155);
    }
    btnFourOne.draw();
    btnFourTwo.draw();
    btnFourThree.draw();
    btnFourFour.draw();
};
var questionFive = function(){
    background(130, 225, 255);
    if(quiz === 0){
        textSize(25);
        text("Choose a character", 50,25);
        text("A: Ash Ketchum", 65,65);
        text("B: Brock", 65,95);
        text("C: Misty", 65,125);
        text("D: Dawn", 65,155);
    }
    else if(quiz === 1){
        textSize(25);
        text("Choose a character", 50,25);
        text("A: Ash Ketchum", 65,65);
        text("B: Brock", 65,95);
        text("C: Misty", 65,125);
        text("D: Dawn", 65,155);
    }
    else if(quiz === 2){
        textSize(25);
        text("Choose a character", 50,25);
        text("A: Ash Ketchum", 65,65);
        text("B: Brock", 65,95);
        text("C: Misty", 65,125);
        text("D: Dawn", 65,155);
    }
    btnFiveOne.draw();
    btnFiveTwo.draw();
    btnFiveThree.draw();
    btnFiveFour.draw();
};
var questionSix = function(){
    background(130, 225, 255);
    if( quiz === 0){
        textSize(25);
        text("How do you like to play?", 50,25);
        text("A: In the rain", 65,65);
        text("B: In a field", 65,95);
        text("C: In the snow", 65,125);
        text("D: Indoors", 65,155);
    }
    else if( quiz === 1){
        textSize(25);
        text("How do you like to play?", 50,25);
        text("A: In the rain", 65,65);
        text("B: In a field", 65,95);
        text("C: In the snow", 65,125);
        text("D: Indoors", 65,155);
    }
    else if( quiz === 2){
        textSize(25);
        text("How do you like to play?", 50,25);
        text("A: In the rain", 65,65);
        text("B: In a field", 65,95);
        text("C: In the snow", 65,125);
        text("D: Indoors", 65,155);
    }
    btnSixOne.draw();
    btnSixTwo.draw();
    btnSixThree.draw();
    btnSixFour.draw();
};
var questionSeven = function(){
    background(130, 225, 255);
    if(quiz === 0){
        textSize(25);
        text("Choose a dessert", 50,25);
        text("A: Cake", 65,65);
        text("B: Brownies", 65,95);
        text("C: Cookies", 65,125);
        text("D: Macrons", 65,155);
    }
    else if(quiz === 1){
        textSize(25);
        text("Choose a dessert", 50,25);
        text("A: Cake", 65,65);
        text("B: Brownies", 65,95);
        text("C: Cookies", 65,125);
        text("D: Macrons", 65,155);
    }
    else if(quiz === 2){
        textSize(25);
        text("Choose a dessert", 50,25);
        text("A: Cake", 65,65);
        text("B: Brownies", 65,95);
        text("C: Cookies", 65,125);
        text("D: Macrons", 65,155);
    }
    btnSevenOne.draw();
    btnSevenTwo.draw();
    btnSevenThree.draw();
    btnSevenFour.draw();
};
var questionEight = function(){
    background(130, 225, 255);
    if(quiz === 0){
        textSize(25);
        text("Choose a sport", 50,25);
        text("A: American Football", 65,65);
        text("B: Basketball", 65,95);
        text("C: Soccer", 65,125);
        text("D: Hockey", 65,155);
    }
    else if(quiz === 1){
        textSize(25);
        text("Choose a sport", 50,25);
        text("A: American Football", 65,65);
        text("B: Basketball", 65,95);
        text("C: Soccer", 65,125);
        text("D: Hockey", 65,155);
    }
    else if(quiz === 2){
        textSize(25);
        text("Choose a sport", 50,25);
        text("A: American Football", 65,65);
        text("B: Basketball", 65,95);
        text("C: Soccer", 65,125);
        text("D: Hockey", 65,155);
    }
    btnEightOne.draw();
    btnEightTwo.draw();
    btnEightThree.draw();
    btnEightFour.draw();
};
var questionNine = function(){
    background(130, 225, 255);
    if(quiz === 0){
        textSize(25);
        text("Pick a season", 50,25);
        text("A: Summer", 65,65);
        text("B: Fall", 65,95);
        text("C: Winter", 65,125);
        text("D: Spring", 65,155);
    }
    else if(quiz === 1){
        textSize(25);
        text("Pick a season", 50,25);
        text("A: Summer", 65,65);
        text("B: Fall", 65,95);
        text("C: Winter", 65,125);
        text("D: Spring", 65,155);
    }
    else if(quiz === 2){
        textSize(25);
        text("Pick a season", 50,25);
        text("A: Summer", 65,65);
        text("B: Fall", 65,95);
        text("C: Winter", 65,125);
        text("D: Spring", 65,155);
    }
    btnNineOne.draw();
    btnNineTwo.draw();
    btnNineThree.draw();
    btnNineFour.draw();
};
var questionTen = function(){
    background(130, 225, 255);
    if(quiz === 0){
        textSize(25);
        text("Choose a pet", 50,25);
        text("A: Turtle", 65,65);
        text("B: Toad", 65,95);
        text("C: Lizard", 65,125);
        text("D: Rat", 65,155);
    }
    else if(quiz === 1){
        textSize(25);
        text("Choose a pet", 50,25);
        text("A: Turtle", 65,65);
        text("B: Toad", 65,95);
        text("C: Lizard", 65,125);
        text("D: Rat", 65,155);
    }
    else if(quiz === 2){
        textSize(25);
        text("Choose a pet", 50,25);
        text("A: Turtle", 65,65);
        text("B: Toad", 65,95);
        text("C: Lizard", 65,125);
        text("D: Rat", 65,155);
    }
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
        results();
    }
    
};

mouseClicked = function() {
    if(scene === 0){
        println(scene+"     "+questionArray);
    btnStart0.handleMouseClick();
    btnStart1.handleMouseClick();
    btnStart2.handleMouseClick();
    }
    //question 1
    else if(scene === 1){
        println(scene+"     "+questionArray);
    btnOneOne.handleMouseClick();
    btnOneTwo.handleMouseClick();
    btnOneThree.handleMouseClick();
    btnOneFour.handleMouseClick();
    }
    //question 2
    else if(scene === 2){
        println(scene+"     "+questionArray);
    btnTwoOne.handleMouseClick();
    btnTwoTwo.handleMouseClick();
    btnTwoThree.handleMouseClick();
    btnTwoFour.handleMouseClick();
    }
    //question 3
    else if(scene === 3){
        println(scene+"     "+questionArray);
    btnThreeOne.handleMouseClick();
    btnThreeTwo.handleMouseClick();
    btnThreeThree.handleMouseClick();
    btnThreeFour.handleMouseClick();
    }
    //question 4
    else if(scene === 4){
        println(scene+"     "+questionArray);
    btnFourOne.handleMouseClick();
    btnFourTwo.handleMouseClick();
    btnFourThree.handleMouseClick();
    btnFourFour.handleMouseClick();
    }
    //question 5
    else if(scene === 5){
        println(scene+"     "+questionArray);
    btnFiveOne.handleMouseClick();
    btnFiveTwo.handleMouseClick();
    btnFiveThree.handleMouseClick();
    btnFiveFour.handleMouseClick();
    }
    //question 6
    else if(scene === 6){
        println(scene+"     "+questionArray);
    btnSixOne.handleMouseClick();
    btnSixTwo.handleMouseClick();
    btnSixThree.handleMouseClick();
    btnSixFour.handleMouseClick();
    }
    //question 7
    else if(scene === 7){
        println(scene+"     "+questionArray);
    btnSevenOne.handleMouseClick();
    btnSevenTwo.handleMouseClick();
    btnSevenThree.handleMouseClick();
    btnSevenFour.handleMouseClick();
    }
    //question 8
    else if(scene === 8){
        println(scene+"     "+questionArray);
    btnEightOne.handleMouseClick();
    btnEightTwo.handleMouseClick();
    btnEightThree.handleMouseClick();
    btnEightFour.handleMouseClick();
    }
    //question 9
    else if(scene === 9){
        println(scene+"     "+questionArray);
    btnNineOne.handleMouseClick();
    btnNineTwo.handleMouseClick();
    btnNineThree.handleMouseClick();
    btnNineFour.handleMouseClick();
    }
    //question 10
    else if(scene === 10){
        println(scene+"     "+questionArray);
    btnTenOne.handleMouseClick();
    btnTenTwo.handleMouseClick();
    btnTenThree.handleMouseClick();
    btnTenFour.handleMouseClick();
    }
    //results
    else if(scene === 11){
        println(scene+"     "+questionArray);
    btnMainMenu.handleMouseClick();
    }
};
