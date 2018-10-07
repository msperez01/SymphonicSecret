
var egg_time = 0;
function egg(num){
    egg_time = egg_time + num;
    document.getElementById("egg_time").innerHTML=egg_time;
};

window.setInterval(function(){
    egg(1);
   }, 500); //will do everything at tick of 500ms or .5sec

