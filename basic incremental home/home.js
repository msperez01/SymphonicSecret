var egg_time = 0;

function egg(num){
    egg_time = egg_time + num;
    document.getElementById("egg_time").innerHTML=egg_time;
};

var hand = 1;
function helpingHand(){
   
    var cost = Math.floor(10 * Math.pow(1.1,pet)); //the cost of a petting hand. Math.floor() rounds the cost down so there's no fractional cost
    
    if(egg_time >= cost){

        hand = hand + 1; //add a loving hand
        egg_time = egg_time - cost; //subtracts the cost of the hand from the egg time
        document.getElementById('hand').innerHTML = hand;
        document.getElementById('egg_time').innerHTML = egg_time;             
    };

   var nextCost = Math.floor(10 * Math.pow(1.1,pet)); //increases price by 10 times 
   document.getElementById('cost').innerHTML = nextCost; 

};

window.setInterval(function(){
                     egg(hand);
                    }, 1000); //will do everything at tick of 1000ms or 1sec