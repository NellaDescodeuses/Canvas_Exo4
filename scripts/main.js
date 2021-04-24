var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//haut
// ctx.beginPath();//début de chemin
// ctx.fillStyle = "black";//je donne un style à mon chemin
// ctx.moveTo(125,200);//je déplace mon pinceau au coordonnées x = 125 et y= 200
//je crée une courbe qui a 3 points de contrôle.
//x cp1= 120 et y cp1 = 210
//x cp2 = 220 et y cp2 = 20
// point d'arrivé, x = 270 et y = 200
// ctx.bezierCurveTo(120, 210, 220, 20, 270, 200);
// ctx.fill();//je remplis la forme

//bas
// ctx.beginPath();
// ctx.fillStyle = "grey";
// ctx.moveTo(50,250);
// ctx.bezierCurveTo(100, 200, 220, 140, 350, 250);
// // ctx.bezierCurveTo(170, 400, 50, 240, 50, 250);
// ctx.bezierCurveTo(220, 400, 25, 240, 50, 250);
// ctx.fill();


//en Quadratic curve
//haut
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.moveTo(130,200);
ctx.quadraticCurveTo(200, 10, 270, 200);
ctx.fill();
//bas
ctx.beginPath();
ctx.fillStyle = 'grey';
ctx.moveTo(50,250);
ctx.quadraticCurveTo(200, 120, 350, 250);
ctx.moveTo(50,250);
ctx.quadraticCurveTo(200, 370, 350, 250);
ctx.fill();
