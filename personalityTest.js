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

//functions for drawing pokemon

//Charmande
var drawHeadCharmander=function(bitmojiX,bitmojiY,bitmojiH){
    var r = bitmojiH/80; 
    fill(255, 157, 0);//skin
    ellipse(bitmojiX+r*50,bitmojiY+r*50,r*80,r*87);//head
    arc(bitmojiX+r*50,bitmojiY+r*71,r*25,r*12,5,175);//mouth

    fill (0,0,0);
    ellipse(bitmojiX+r*35,bitmojiY+r*48,r*10,r*10);//left eye
    ellipse(bitmojiX+r*65,bitmojiY+r*48,r*10,r*10);//right eye
};
var drawBodyCharmander= function(bitmojiX,bitmojiY,bitmojiH){
    var r = bitmojiH/80; 
    fill(255, 157, 0);//skin
    triangle(bitmojiX+r*-9,bitmojiY+r*90,bitmojiX+r*10,bitmojiY+r*140,bitmojiX+r*24,bitmojiY+r*140);//tail
    rect(bitmojiX+r*10, bitmojiY+r*90, r*80, r*80, r*25);//body
    fill(255, 0, 0);
    triangle(bitmojiX+r*-9,bitmojiY+r*74,bitmojiX+r*-18,bitmojiY+r*89,bitmojiX+r*-4,bitmojiY+r*90);//flame
    

};
var drawCharmander= function(bitmojiX,bitmojiY,bitmojiH){
    drawBodyCharmander(bitmojiX,bitmojiY,bitmojiH);
    drawHeadCharmander(bitmojiX,bitmojiY,bitmojiH);
};

//Pikachu
var drawHeadPikachu=function(bitmojiX,bitmojiY,bitmojiH){
    var r = bitmojiH/80; 
    fill(255, 251, 0);//fur
    triangle(bitmojiX+r*11, bitmojiY+r*-15,bitmojiX+r*22, bitmojiY+r*24,bitmojiX+r*11, bitmojiY+r*42);//left ear
    triangle(bitmojiX+r*89, bitmojiY+r*-15,bitmojiX+r*77, bitmojiY+r*24,bitmojiX+r*88, bitmojiY+r*42);//right ear
    fill(74, 49, 2);// ear tips
    triangle(bitmojiX+r*11, bitmojiY+r*-15,bitmojiX+r*15, bitmojiY+r*2,bitmojiX+r*11, bitmojiY+r*10);//left ear tip
    triangle(bitmojiX+r*89, bitmojiY+r*-15,bitmojiX+r*84, bitmojiY+r*2,bitmojiX+r*88, bitmojiY+r*10);//right ear tip
    fill(255, 251, 0);//fur
    ellipse(bitmojiX+r*50,bitmojiY+r*50,r*80,r*80);//head
    arc(bitmojiX+r*50,bitmojiY+r*71,r*25,r*12,5,175);//mouth
    fill(255, 0, 0);//cheek color
    ellipse(bitmojiX+r*30,bitmojiY+r*65,r*10,r*10);//left cheek
    ellipse(bitmojiX+r*70,bitmojiY+r*65,r*10,r*10);//right cheek
    fill (0,0,0);
    ellipse(bitmojiX+r*35,bitmojiY+r*48,r*10,r*10);//left eye
    ellipse(bitmojiX+r*65,bitmojiY+r*48,r*10,r*10);//right eye
};
var drawBodyPikachu= function(bitmojiX,bitmojiY,bitmojiH){
    var r = bitmojiH/80; 
    fill(255, 251, 0);//fur
    triangle(bitmojiX+r*-30,bitmojiY+r*50,bitmojiX+r*1,bitmojiY+r*50,bitmojiX+r*24,bitmojiY+r*140);//tail
    rect(bitmojiX+r*10, bitmojiY+r*90, r*80, r*80, r*25);//body

};
var drawPikachu= function(bitmojiX,bitmojiY,bitmojiH){
    drawHeadPikachu(bitmojiX,bitmojiY,bitmojiH);
    drawBodyPikachu(bitmojiX,bitmojiY,bitmojiH);
};

//Squirtle
var drawHeadSquirtle=function(bitmojiX,bitmojiY,bitmojiH){
    var r = bitmojiH/80; 
    fill(118, 235, 237);//skin
    ellipse(bitmojiX+r*50,bitmojiY+r*50,r*80,r*87);//head
    arc(bitmojiX+r*50,bitmojiY+r*71,r*25,r*12,5,175);//mouth

    fill (0,0,0);
    ellipse(bitmojiX+r*35,bitmojiY+r*48,r*10,r*10);//left eye
    ellipse(bitmojiX+r*65,bitmojiY+r*48,r*10,r*10);//right eye
};
var drawBodySquirtle= function(bitmojiX,bitmojiY,bitmojiH){
    var r = bitmojiH/80; 
    fill(118, 235, 237);//skin
    triangle(bitmojiX+r*-30,bitmojiY+r*50,bitmojiX+r*1,bitmojiY+r*50,bitmojiX+r*24,bitmojiY+r*140);//tail
    fill(140, 108, 21);//shell color
    ellipse(bitmojiX+r*50,bitmojiY+r*126,r*89,r*94);//shell
    fill(242, 242, 162);//skin
    rect(bitmojiX+r*10, bitmojiY+r*90, r*80, r*80, r*25);//body
    
    

};
var drawSquirtle= function(bitmojiX,bitmojiY,bitmojiH){
    drawBodySquirtle(bitmojiX,bitmojiY,bitmojiH);
    drawHeadSquirtle(bitmojiX,bitmojiY,bitmojiH);
};

//Bulbasaur
var drawHeadBulbasaur=function(bitmojiX,bitmojiY,bitmojiH){
    var r = bitmojiH/80; 
    fill(214, 255, 173);//skin
    ellipse(bitmojiX+r*43,bitmojiY+r*50,r*80,r*80);//head
    arc(bitmojiX+r*50,bitmojiY+r*71,r*25,r*12,5,175);//mouth
    fill(181, 70, 70);//eye color
    ellipse(bitmojiX+r*35,bitmojiY+r*48,r*15,r*15);//left eye
    ellipse(bitmojiX+r*65,bitmojiY+r*48,r*15,r*15);//right eye
};
var drawBodyBulbasaur= function(bitmojiX,bitmojiY,bitmojiH){
    var r = bitmojiH/80; 
    fill(6, 94, 22);//bulb color
    ellipse(bitmojiX+r*4,bitmojiY+r*38,r*80,r*80);//bulb
    fill(214, 255, 173);//skin
    rect(bitmojiX+r*-40, bitmojiY+r*40, r*80, r*75, r*25);//body
    fill(0, 0, 0);
};
var drawBulbasaur= function(bitmojiX,bitmojiY,bitmojiH){
    drawBodyBulbasaur(bitmojiX,bitmojiY,bitmojiH);
    drawHeadBulbasaur(bitmojiX,bitmojiY,bitmojiH);
};

///quiz 2 GOLDEN GIRLS 
// SP SOPHIA 
var drawHeadSP=function(bitmojiX,bitmojiY,bitmojiH){
    var r = bitmojiH/80; 
    fill(249, 250, 237);//haircolor
    rect(bitmojiX+r*5, bitmojiY+r*0, r*90, r*80, 62);//hair
    fill(255,224,189);//skin
    ellipse(bitmojiX+r*50,bitmojiY+r*50,r*80,r*80);//head
    arc(bitmojiX+r*50,bitmojiY+r*71,r*25,r*-14,0,175);//mouth
    arc(bitmojiX+r*35,bitmojiY+r*48,r*24,r*22,0,360);//left lens
    arc(bitmojiX+r*65,bitmojiY+r*48,r*24,r*22,0,360);//right lens
    line(bitmojiX+r*48,bitmojiY+r*48,bitmojiX+r*52,bitmojiY+r*48);//glassesbridge
    line(bitmojiX+r*10,bitmojiY+r*48,bitmojiX+r*21,bitmojiY+r*48);//leftglasses
    line(bitmojiX+r*78,bitmojiY+r*48,bitmojiX+r*89,bitmojiY+r*48);//rightglasses
    fill (0,0,0);
    ellipse(bitmojiX+r*35,bitmojiY+r*48,r*10,r*10);//left eye
    ellipse(bitmojiX+r*65,bitmojiY+r*48,r*10,r*10);//right eye
};
var drawBodySP= function(bitmojiX,bitmojiY,bitmojiH){
    var r = bitmojiH/80; 
    fill(236, 181, 242);//shirtcolor
    rect(bitmojiX+r*10, bitmojiY+r*90, r*80, r*50, r*20);//body
    textSize(r*40);
    fill(0, 0, 0);
    text("SP",bitmojiX+r*23,bitmojiY+r*130);
};
var drawBitmojiSP= function(bitmojiX,bitmojiY,bitmojiH){
    drawHeadSP(bitmojiX,bitmojiY,bitmojiH);
    drawBodySP(bitmojiX,bitmojiY,bitmojiH);
};
drawBitmojiSP(0,17,82);

// BLANCHE BD 
var drawHeadBD=function(bitmojiX,bitmojiY,bitmojiH){
    var r = bitmojiH/80; 
    fill(107, 93, 53);//haircolor
    rect(bitmojiX+r*7, bitmojiY+r*14, r*85, r*74, 100);//hair
    fill(255,224,189);//skin
    ellipse(bitmojiX+r*50,bitmojiY+r*50,r*80,r*80);//head
    arc(bitmojiX+r*50,bitmojiY+r*71,r*25,r*9,0,175);//mouth
    fill(107, 93, 53);//haircolor
    arc(bitmojiX+r*90,bitmojiY+r*9,r*46,r*78,85,180);//righthair
    arc(bitmojiX+r*10,bitmojiY+r*9,r*118,r*78,0,95);//lefthair
    fill (0,0,0);
    ellipse(bitmojiX+r*35,bitmojiY+r*48,r*10,r*10);//left eye
    ellipse(bitmojiX+r*65,bitmojiY+r*48,r*10,r*10);//right eye
};
var drawBodyBD= function(bitmojiX,bitmojiY,bitmojiH){
    var r = bitmojiH/80; 
    fill(162, 0, 207);//shirtcolor
    rect(bitmojiX+r*10, bitmojiY+r*90, r*80, r*50, r*20);//body
    textSize(r*40);
    fill(0, 0, 0);
    text("BD",bitmojiX+r*21,bitmojiY+r*130);
};
var drawBitmojiBD= function(bitmojiX,bitmojiY,bitmojiH){
    drawHeadBD(bitmojiX,bitmojiY,bitmojiH);
    drawBodyBD(bitmojiX,bitmojiY,bitmojiH);
};
drawBitmojiBD(0,0,82);

/// DORTHY DZ
var drawHeadDZ=function(bitmojiX,bitmojiY,bitmojiH){
    var r = bitmojiH/80; 
    fill(150, 150, 150);//haircolor
    rect(bitmojiX+r*10, bitmojiY+r*38, r*80, r*50, 89);//hair
    fill(255,224,189);//skin
    ellipse(bitmojiX+r*50,bitmojiY+r*50,r*80,r*80);//head
    arc(bitmojiX+r*50,bitmojiY+r*71,r*25,r*9,0,175);//mouth

    fill(150, 150, 150);//haircolor
    arc(bitmojiX+r*90,bitmojiY+r*9,r*80,r*78,85,180);//righthair
    arc(bitmojiX+r*10,bitmojiY+r*9,r*80,r*78,0,95);//lefthair
    fill (0,0,0);
    ellipse(bitmojiX+r*35,bitmojiY+r*48,r*10,r*10);//left eye
    ellipse(bitmojiX+r*65,bitmojiY+r*48,r*10,r*10);//right eye
};
var drawBodyDZ= function(bitmojiX,bitmojiY,bitmojiH){
    var r = bitmojiH/80; 
    fill(84, 72, 120);//shirtcolor
    rect(bitmojiX+r*10, bitmojiY+r*90, r*80, r*50, r*20);//body
    textSize(r*40);
    fill(0, 0, 0);
    text("DZ",bitmojiX+r*23,bitmojiY+r*130);
};
var drawBitmojiDZ= function(bitmojiX,bitmojiY,bitmojiH){
    drawHeadDZ(bitmojiX,bitmojiY,bitmojiH);
    drawBodyDZ(bitmojiX,bitmojiY,bitmojiH);
};
drawBitmojiDZ(0,0,82);

/// ROSE RN
var drawHeadRN=function(bitmojiX,bitmojiY,bitmojiH){
    var r = bitmojiH/80; 
    fill(242, 247, 195);//haircolor
    rect(bitmojiX+r*10, bitmojiY+r*38, r*80, r*50, 20);//hair
    fill(255,224,189);//skin
    ellipse(bitmojiX+r*50,bitmojiY+r*50,r*80,r*80);//head
    arc(bitmojiX+r*50,bitmojiY+r*71,r*25,r*9,0,175);//mouth
    fill(242, 247, 195);//haircolor
    arc(bitmojiX+r*90,bitmojiY+r*9,r*80,r*78,85,180);//righthair
    arc(bitmojiX+r*10,bitmojiY+r*9,r*80,r*78,0,95);//lefthair
    fill (0,0,0);
    ellipse(bitmojiX+r*35,bitmojiY+r*48,r*10,r*10);//left eye
    ellipse(bitmojiX+r*65,bitmojiY+r*48,r*10,r*10);//right eye
};
var drawBodyRN= function(bitmojiX,bitmojiY,bitmojiH){
    var r = bitmojiH/80; 
    fill(140, 240, 255);//shirtcolor
    rect(bitmojiX+r*10, bitmojiY+r*90, r*80, r*50, r*20);//body
    textSize(r*40);
    fill(0, 0, 0);
    text("RN",bitmojiX+r*21,bitmojiY+r*130);
};
var drawBitmojiRN= function(bitmojiX,bitmojiY,bitmojiH){
    drawHeadRN(bitmojiX,bitmojiY,bitmojiH);
    drawBodyRN(bitmojiX,bitmojiY,bitmojiH);
};
drawBitmojiRN(0,0,82);



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

//function for Damien's Bitmoji 
var drawBitmojiHead = function(bitmojiX, bitmojiY,meHeight){
    
 fill(255, 255, 255);
fill(175, 110, 34); //skin tone
ellipse(bitmojiX +132*(meHeight/100),bitmojiY-6*(meHeight/100), 77*(meHeight/100), 75*(meHeight/100)); // head
fill(255,255, 255);
arc(bitmojiX + 110*(meHeight/100),bitmojiY+24*(meHeight/100),28*(meHeight/100), 55*(meHeight/100), 0,361); //left chin
arc(bitmojiX + 160*(meHeight/100),bitmojiY+24*(meHeight/100),28*(meHeight/100), 55*(meHeight/100), 0,361); //right chin
fill(8, 8, 8);
arc(bitmojiX +134 *(meHeight/100) ,bitmojiY+24*(meHeight/100),20*(meHeight/100), 12*(meHeight/100), 1,180);//chin hair

ellipse(bitmojiX +133*(meHeight/100),bitmojiY-35*(meHeight/100), 37*(meHeight/100), 22*(meHeight/100));// middle hat 1
ellipse(bitmojiX+160*(meHeight/100),bitmojiY-40*(meHeight/100), 36*(meHeight/100), 13*(meHeight/100));// middle hat 2


fill(128,128,128);//brim

rect(bitmojiX+128*(meHeight/100),bitmojiY-28*(meHeight/100),14*(meHeight/100), 6*(meHeight/100)); //hat strap

fill(225, 225, 225);
ellipse(bitmojiX+121*(meHeight/100),bitmojiY-13*(meHeight/100),17*(meHeight/100),15*(meHeight/100));// left glasses 1
ellipse(bitmojiX+147*(meHeight/100),bitmojiY-12*(meHeight/100),17*(meHeight/100),15*(meHeight/100));//right glaases 1
rect(bitmojiX +153*(meHeight/100),bitmojiY-14*(meHeight/100),9*(meHeight/100),4*(meHeight/100));// left glass on ears
rect(bitmojiX+105*(meHeight/100),bitmojiY-15*(meHeight/100),20*(meHeight/100),4*(meHeight/100));//right glass on ears

rect(bitmojiX+128*(meHeight/100),bitmojiY-15*(meHeight/100),16*(meHeight/100),4*(meHeight/100));// eye glass bridge
fill(175, 110, 34); //skin tone in eyes
ellipse(bitmojiX+121*(meHeight/100),bitmojiY-13*(meHeight/100),10*(meHeight/100),10*(meHeight/100)); //left glass 2
ellipse(bitmojiX+147*(meHeight/100),bitmojiY-12*(meHeight/100),10*(meHeight/100),10*(meHeight/100));//right glasses 2
rect(bitmojiX+129 *(meHeight/100),bitmojiY-27*(meHeight/100),13*(meHeight/100),-4*(meHeight/100));// forhead

fill(8, 8, 8);
ellipse(bitmojiX+148*(meHeight/100),bitmojiY-11*(meHeight/100),6*(meHeight/100),6*(meHeight/100));// eyes
ellipse(bitmojiX+122*(meHeight/100),bitmojiY-12*(meHeight/100),6*(meHeight/100),6*(meHeight/100));//eyes

bezier(bitmojiX+144 *(meHeight/100)  ,bitmojiY+3*(meHeight/100),bitmojiX + 131*(meHeight/100) ,bitmojiY+3*(meHeight/100)  ,bitmojiX +130*(meHeight/100),  bitmojiY-28*(meHeight/100),bitmojiX+124 *(meHeight/100), bitmojiY+4*(meHeight/100) ); // nose back ground 
fill(175, 110, 34); //skin tone
bezier(bitmojiX+136*(meHeight/100) ,bitmojiY-1*(meHeight/100),bitmojiX + 131*(meHeight/100) ,bitmojiY+12*(meHeight/100)  ,bitmojiX +132*(meHeight/100),  bitmojiY-32*(meHeight/100),bitmojiX+124 *(meHeight/100), bitmojiY+4 *(meHeight/100) ); // nose back ground  // nose back ground // nose skin color 

fill(255,255,255);

arc(bitmojiX +132 *(meHeight/100), bitmojiY+12*(meHeight/100), 14*(meHeight/100),15*(meHeight/100) ,3,180); // smile 

}; 
var drawBitmojiBody = function(bitmojiX, bitmojiY,meHeight){

fill(8,8,8);
arc(bitmojiX+133*(meHeight/100), bitmojiY+55*(meHeight/100), 102*(meHeight/100),45*(meHeight/100),180,360); //sholders / shirt
rect(bitmojiX+82*(meHeight/100),bitmojiY +54*(meHeight/100),102 *(meHeight/100),50*(meHeight/100));// bottome of shirt 

fill(175, 110, 34);
arc(bitmojiX+135*(meHeight/100),bitmojiY+30*(meHeight/100),24*(meHeight/100), 18*(meHeight/100), -20,201);//neck1
//rect(bitmojiX - 16 ,bitmojiY +70,31,17);//neck 2
triangle(bitmojiX +136 *(meHeight/100) ,bitmojiY +58*(meHeight/100),bitmojiX+147*(meHeight/100),bitmojiY +32*(meHeight/100),bitmojiX+122*(meHeight/100),bitmojiY+37*(meHeight/100));//neck 2

fill(255, 255, 255);

rect(bitmojiX+100*(meHeight/100),bitmojiY + 61*(meHeight/100),6*(meHeight/100),45*(meHeight/100));// D shirt
rect(bitmojiX+106*(meHeight/100),bitmojiY+64*(meHeight/100),6*(meHeight/100),10*(meHeight/100));// D shirt
rect(bitmojiX+112*(meHeight/100),bitmojiY +72*(meHeight/100),6*(meHeight/100),10*(meHeight/100));// D shirt
rect(bitmojiX+113*(meHeight/100),bitmojiY +82*(meHeight/100),6*(meHeight/100),10*(meHeight/100));// D shirt
rect(bitmojiX+109*(meHeight/100),bitmojiY+92*(meHeight/100),6*(meHeight/100),10*(meHeight/100));// D shirt
rect(bitmojiX+106*(meHeight/100),bitmojiY+96*(meHeight/100),6*(meHeight/100),10*(meHeight/100));// D shirt

rect(bitmojiX + 175*(meHeight/100),bitmojiY +61*(meHeight/100),-29*(meHeight/100),8*(meHeight/100));// J shirt
rect(bitmojiX+164*(meHeight/100),bitmojiY+66*(meHeight/100),-7*(meHeight/100),26*(meHeight/100));// J shirt
rect(bitmojiX+154*(meHeight/100),bitmojiY+87*(meHeight/100),6*(meHeight/100),10*(meHeight/100));// J shirt
rect(bitmojiX+149*(meHeight/100),bitmojiY+88*(meHeight/100),6*(meHeight/100),10*(meHeight/100));// J shirt

};
var realme =function (bitmojiX,bitmojiY,meHeight){ 
  drawBitmojiHead(bitmojiX,bitmojiY,meHeight);
   drawBitmojiBody(bitmojiX,bitmojiY,meHeight);
  
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
    label: "Pok??mon Starter",
    onClick: function() {
        quiz = 0;
        scene = questionArray[index];
    }
});
var btnStart1 = new Button({
    x: 124,
    y: 222,
    label: "Golden Girls",
    onClick: function() {
        quiz = 1;
        scene = questionArray[index];
    }
});
var btnStart2 = new Button({
    x: 124,
    y: 277,
    label: "Pok??mon Starter",
    onClick: function() {
        quiz = 2;
        scene = questionArray[index];
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
            if(scene===questionArray[index]){
                answerArray.push(1);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(1);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(1);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(2);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(2);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(2);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(3);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(3);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(3);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(4);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(4);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(4);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(1);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(1);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(1);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(3);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(3);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(3);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(4);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(4);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(4);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(2);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(2);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(2);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(4);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(4);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(4);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(2);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(2);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(2);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(3);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(3);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(3);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(1);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(1);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(1);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(4);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(4);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(4);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(3);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(3);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(3);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(1);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(1);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(1);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(2);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(2);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(2);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(2);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(2);
                scene = questionArray[index + 1]; index++;
            }
        }
         else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(2);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(1);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(1);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(1);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(3);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(3);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(3);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(4);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(4);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(4);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(4);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(4);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(4);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(1);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(1);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(1);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(3);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(3);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(3);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(2);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(2);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(2);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(1);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(1);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(1);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(2);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(2);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(2);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(3);
                scene = questionArray[index + 1]; index++;
            }
        }
        if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(3);
                scene = questionArray[index + 1]; index++;
            }
        }
        if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(3);
                scene = questionArray[index + 1]; index++;
            }
        }
    }});
var btnSevenFour = new Button({
    x: 201,
    y: 262,
    label: "           D",
    onClick: function() {
        if(quiz === 0){
            if(scene===questionArray[index]){
                answerArray.push(4);
                scene = questionArray[index + 1]; index++;
            }
        }
        if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(4);
                scene = questionArray[index + 1]; index++;
            }
        }
        if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(4);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(4);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(4);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(4);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(1);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(1);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(1);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(2);
                scene = questionArray[index + 1]; index++;
            }
        }
        if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(2);
                scene = questionArray[index + 1]; index++;
            }
        }
        if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(2);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(3);
                scene = questionArray[index + 1]; index++;
            }
        }
        if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(3);
                scene = questionArray[index + 1]; index++;
            }
        }
        if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(3);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(1);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(1);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(1);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(3);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(3);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(3);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(2);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(2);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(2);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(4);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(4);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(4);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(3);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(3);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(3);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(4);
                scene = questionArray[index + 1]; index++;
            }
        }else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(4);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(4);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(1);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(1);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(1);
                scene = questionArray[index + 1]; index++;
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
            if(scene===questionArray[index]){
                answerArray.push(2);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 1){
            if(scene===questionArray[index]){
                answerArray.push(2);
                scene = questionArray[index + 1]; index++;
            }
        }
        else if(quiz === 2){
            if(scene===questionArray[index]){
                answerArray.push(2);
                scene = questionArray[index + 1]; index++;
            }
        }
    }
});

// Scene functions; these functions draw the splash screen,results screen, and the questions
var splash = function(){
    background(130, 225, 255);
    
    //Bitmoji Charcter 
    drawBitmojiJared(22,190,60);
    realme(244,231,65);
   
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
    text("Results", 80,30);
    btnMainMenu.draw();
    textSize(25);
    
    if(scoreTest(answerArray) === 0){
        if(quiz === 0){
            drawCharmander(150,100,80);
            text("Charmander", 130,300);
            leaderBoard.push("Charmander");
        }
        else if(quiz === 1){
            drawBitmojiSP(150,100,80);
            text("SOPHIA", 130,300);
            leaderBoard.push("SOPHIA");
        }
        else if(quiz === 2){
            text("Charmander", 130,300);
            leaderBoard.push("Charmander");
        }
    }
    else if(scoreTest(answerArray) === 1){
        if(quiz === 0){
            drawPikachu(150, 100, 80);
            text("Pikachu", 130,300);
            leaderBoard.push("Pikachu");
        }
        else if(quiz === 1){
            drawBitmojiBD(150, 100, 80);
            text("BLANCHE", 130,300);
            leaderBoard.push("BLANCHE");
        }
        else if(quiz === 2){
            text("Pikachu", 130,300);
            leaderBoard.push("Pikachu");
        }
    }
    else if(scoreTest(answerArray) === 2){
        if(quiz === 0){
            drawSquirtle(150, 100, 80);
            text("Squirtle", 130,300);
            leaderBoard.push("Squirtle");
        }
        else if(quiz === 1){
            drawBitmojiDZ(150, 100, 80);
            text("DORTHY", 130,300);
            leaderBoard.push("DORTHY");
        }
        else if(quiz === 2){
            text("Squirtle", 130,300);
            leaderBoard.push("Squirtle");
        }
    }
    else if(scoreTest(answerArray) === 3){
        if(quiz === 0){
             drawBulbasaur(172,136,89);
             fill(0, 0, 0);
             text("Bulbasaur", 130,300);
             leaderBoard.push("Bulbasaur");
        }
        else if(quiz === 1){
            drawBitmojiRN(150, 100, 80);
             text("ROSE", 130,300);
             leaderBoard.push("ROSE");
        }
        else if(quiz === 2){
             text("Bulbasaur", 130,300);
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
        text("Pick a Movie...", 50,25);
        textSize(25);
        text("A: Steel Magnolias ", 65,65);
        text("B: Magic M", 65,95);
        text("C: Star Wars", 65,125);
        text("D: The Lorax", 65,155);
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
        text("Which is most fun to you?", 50,25);
        textSize(25);
        text("A: Gossip", 65,65);
        text("B: Going on dates ", 65,95);
        text("C: Reading", 65,125);
        text("D: Listening to Music", 65,155);
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
        text("What is your role in a friend group?", 50,25);
        textSize(25);
        text("A: The sassy one", 65,65);
        text("B: The wild card", 65,95);
        text("C: The leader ", 65,125);
        text("D: The jokester", 65,155);
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
        text("Pick a book", 50,25);
        text("A: The Catcher in the Rye", 65,65);
        text("B: 50 Shades of Gray", 65,95);
        text("C: The Great Gatsby", 65,125);
        text("D: The Cat in the Hat", 65,155);
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
        text("Pick a song", 50,25);
        text("A: Big Iron by Marty Robbins", 65,65);
        text("B: Montero (Call Me By Your Name) by Lil Nas X", 65,95);
        text("C: Killer Queen by Queen ", 65,125);
        text("D: Anything Weird Al made", 65,155);
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
        text("Choose a game", 50,25);
        text("A: Poker", 65,65);
        text("B: Twister", 65,95);
        text("C: Scrabble", 65,125);
        text("D: Uno", 65,155);
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
        text("What room would you be drawn to at a house party?", 50,25);
        text("A:  kitchen", 65,65);
        text("B: Wherever the most people are", 65,95);
        text("C: quietest room", 65,125);
        text("D: Whatever room your friend is in", 65,155);
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
        text("How introverted or extroverted are you?", 50,25);
        text("A: Extrovert/ introvert tendencies", 65,65);
        text("B: Hard extrovert", 65,95);
        text("C: Hard introvert", 65,125);
        text("D: Introvert with extrovert tendencies", 65,155);
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
    btnStart0.handleMouseClick();
    btnStart1.handleMouseClick();
    btnStart2.handleMouseClick();
    }
    //question 1
    else if(scene === 1){
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
    //results
    else if(scene === 11){
    btnMainMenu.handleMouseClick();
    }
};
