// gun = rock
// snake = scissors
// water = paper



console.log("Welcome to Snake Water & Gun")
let i =0;
let wins=0;
let draw=0;

do{

console.log("Choose Any of Three");
let p1=prompt("Press 1 for Gun\nPress 2 for Water\nPress 3 for Snake");
p1=Number.parseInt(p1);
if(p1 == 1){
    console.log("You chose Gun");
}
else if(p1==2){
    console.log("You chose Water");
}
else if(p1 ==3){
    console.log("You chose Snake");
}

let num = getRndInteger(1, 4);
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(num)

if(num == 1){
    console.log("The computer chose Gun");
}
else if(num==2){
    console.log("The computer chose Water");
}
else if(num ==3){
    console.log("The computer chose Snake");
}

if(p1==num){
    alert("It's a draw try again");
    console.log("It's a draw try again")
    draw++;
}
else if(p1==1 && num==3 || p1==2 && num==1 || p1==3 && num==2){
    alert("You Won Congratulations");
    console.log("You Won Congratulations")
    wins++
}
else{
    alert("You Lost");
    console.log("you lost")
    
}
i++;
}while(i<3)
if(wins==2){
    alert("You are the winner of best of 3")
    console.log("You are the winner of best of 3")
}

else if(draw=1){
    alert("It was a draw")
    console.log("It was a draw")
}

else if(wins==0){
    alert("You lost the best of 3")
    console.log("YOu lost the best of 3")
}