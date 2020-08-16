//import Table from './table.js'


// var newTable = new Table();
window.onload = function(){

}
var canvas = document.getElementById('gamecanvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = "#FFFFFF";

function loadAndDrawImage(){
    var img = new Image();
    image.onload = function()
        {
            ctx.drawImage(img);
        }

    img.src = './assets/hearts-1.png';
}

loadAndDrawImage();