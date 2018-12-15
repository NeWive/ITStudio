//初始化canvas画布
var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor="black";
var width = canvas.width;
var height = canvas.width;
var context;
if(canvas.getContext("2d")){
    context = canvas.getContext("2d");
}else{
    alert("您的浏览器不支持canvas");
}


function Snow(location_x, location_y, radius){
    this.location_x = location_x;
    this.location_y = location_y;
    this.radius = radius
}
Snow.prototype={
    constructor: Snow,
    getLocationX: function(){
        return this.location_x;
    },
    getLocationY: function(){
        return this.location_y;
    },
    getRadius: function(){
        return this.radius;
    },
    setLocationX: function(location_x){
         this.location_x = location_x;
    },
    setLocationY: function(location_y){
        this.location_y = location_y;
    }
}
function SnowSky(numberSnow, snows){
    this.numberSnow = numberSnow;
    this.snows = snows;
}
SnowSky.prototype={
    constructor: SnowSky,
    fallSnow: function(snow, x, y){
        x += Math.random() * 2 + 1;
        if(x > width){x = 0;}
        y += Math.random() * 2 + 1;
        if(y > height){y = 0;}
        snow.setLocationX(x);
        snow.setLocationY(y);
    },
    drawSnows: function(){
        context.clearRect(0, 0, width, height);
        context.fillStyle = "white";
        context.beginPath();
            for(var i = 0; i < numberSnow; i++){
                var snowTemp = this.snows[i];
                var x = snowTemp.getLocationX();
                var y = snowTemp.getLocationY();
                var r = snowTemp.getRadius();
                context.moveTo(x, y);
                context.arc(x, y, r, 0, 2 * Math.PI, false);
                this.fallSnow(snows[i], x, y);
            }
        context.fill();
        context.closePath();
    },
    snowing: function(){
        console.log(this.snows);
        this.drawSnows();
        setInterval(()=>{
            this.drawSnows();
        },0.1);
    }
}

var numberSnow = 200;
var snows = new Array();
for(var i = 0; i < numberSnow; i++){
    snows.push(new Snow(Math.random() * width, Math.random() * height, Math.random() * 10 + 1));
}

function loadSnowing(){
    console.log("12");
    var snowSky = new SnowSky(numberSnow, snows);
    snowSky.snowing();
}
document.onload(loadSnowing());

//模拟下雪
// var snows = initSnows();
// function snowing(){
//     drawSnows();
//     setInterval(drawSnows, 50);
// }

// //画雪花
// function drawSnows(){
//     context.clearRect(0, 0, width, height);
//     context.fillStyle = "white";
//     context.beginPath();
//     for(var i = 0; i < numberSnow; i++){
//         var snowTemp = snows[i];
//         var x = snowTemp.getLocationX();
//         var y = snowTemp.getLocationY();
//         var r = snowTemp.getRadius();
//         context.moveTo(x, y);
//         context.arc(x, y, r, 0, 2 * Math.PI, false);
//         fallSnow(snows[i], x, y);
//     }
//     context.fill();
//     context.closePath();
//     return;
// }

// //雪花飘
// function fallSnow(snow, x, y) {
//     x += Math.random() * 2 + 1;
//     if(x > width){x = 0;}
//     y += Math.random() * 2 + 1;
//     if(y > height){y = 0;}
//     snow.setLocationX(x);
//     snow.setLocationY(y);
// }

// //numbers of "snow"
// var numberSnow = 200;

// //初始化雪花
// function initSnows() {
//     var snows = new Array();
//     for(var i = 0; i < numberSnow; i++){
//         snows.push(new Snow(Math.random() * width, Math.random() * height, Math.random() * 10 + 1));
//     }
//     return snows;
// }