var result=61;
var passmark= 60;

if (result >= passmark){
    console.log("congratulations you passed.");
} else {
    console.log("Unfortunately, you did not pass.");
}


var place= "second";
if (place == "first"){
    console.log("Congratulations, you won Gold");
} else if (place == "second"){
    console.log("Congratulations, you won Silver");
} else if (place == "third"){
    console.log("Congratulations, you won Bronze");
} else {
    console.log("No Medal");
}



 

for(var counter=0; counter < 5; counter++){
    console.log("what is your name:");
}

// SWITCH //

 var place="First";

 switch(place){
    case "First":
        console.log("You won Gold");
        break;
        case "Second":
            console.log("You won Silver");
            break;
            case "Third":
            console.log("You won Bronze");
            break;
            default:
                console.log("Unfortunately, you won nothing");
 }

 var counter=0;
 do{
    console.log("What is your name?");
    counter++;
 }while(counter<5);

// Functions with parameters//

 function addition(a,b){
    var c = a+b;
    console.log(c);
 }

 addition(10,5);
 addition (10,10);

 // function without parameters//

 function addition1(){
    var a =10;
    var b=50;
    var c = a+b;
    console.log(c);
 }
 addition1();
 
 // ARRAYS 

 var number=[10,30,40,50];
 console.log(number[0]);

 var words=["Kojo", "James", "Tim", "Samuel"];
 console.log(words[1]);

// OBJECT //
 var assistantManager = {
    ghana: "We are the Black Stars",
    Nigeria: "The giant of Africa",
    health: 40,


   
}
console.log (assistantManager.ghana);

var number= Math.max(5,7,9);
console.log(number);

// WHILE LOOP

var i=0;

while(i<5){
    console.log("Where are you from?");
    i++;
}

var i=0;
for(i=0; i<5; i++){
    console.log('I am Kyebambo Timothy');
}

function myDay() {
    console.log('Morning');
    console.log('Afternoon');
    console.log('Evening');
    
}

myDay();


 

// another function



function rate(){
    var currencyone= 100;
    var exchangerate=1.2;
    var c= exchangerate * currencyone;
    console.log(c);
}

rate();

// OBJECT ORIENTED PROGRAMMING

var purchase={
    shoes:100,
    price:10,
    totalprice: function(){
        var calculations= purchase.shoes* purchase.price;
        console.log("Total Price is:", calculations);
    }
}
purchase.totalprice();

console.log (new Date());
console.log(Math.pow(2,5));

// INHERITANCE

var bird={
    canfly:true,
    canswim: false,
    hasfeathers: true,
}



console.log("eagle can fly:", bird.canfly);
console.log("eagle can swim:", bird.canswim);
console.log("eagle has feathers:", bird.hasfeathers);


//OBJ

var purchaseprice={
     shoes:30,
     price: 10,
    totalprice: function(){
        var calculations= this.shoes*this.price;
        console.log("Total price of all the shoes is:", calculations);
    }
}

purchaseprice.totalprice();

var number=1;

while(number<5){
    console.log("I am a Ghanaian");
    number++;
}


function sum(a,b){
    var c= a*b;
    console.log(c);
}

sum(10,10);


function divide(){
    var a=100;
    var b=10;
    var c= a/b;
    console.log(c);
}

divide();


var a=100;
var b=10;
var divide=a/b;

console.log("The answer is:",divide);


// function

function square(number){
    console.log("The answer of squaring the number is: ",number*number);
}

square(10);

// OBJECT.KEYS // OBJECT.VALUES // OBJECT.ENTRIES




const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.entries(car2)); 


// FOR IN AND FOR OF LOOP


var god={
    amazing:"Giver of life",
}

var satan= Object.create(god);
satan.destroyer="yes";
console.log("Satan actually destroy humans:", satan);

// FOR IN LOOP

for(prop in satan){
    console.log(satan);
}

// FOR OF LOOP
for(prop of Object.keys(satan)){
    console.log(prop+":"+satan[prop]);
}

// Template literals

var life=`
Life is not easy at all
But I will make it regardless
Ghana to the world chale
Grrrrrrrr

`;

console.log(life);

var life=["Mango","Pear", "Pineapple"];
console.log(...life);

