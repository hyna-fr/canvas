var bg = new Image();
bg.src = "sky.jpg"; // Je voulais mettre des étoiles de façon random
// j'y suis arrivée dans un fichier test (je mettrais le fichier) mais 
// je ne suis pas parvenue à l'intégrer dans mon canvas TT

function initCanvas() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    var lineaire = ctx.createLinearGradient(1100, 200, 900, 800);
    lineaire.addColorStop(0,'rgb(141, 126, 107)');
    lineaire.addColorStop(0.1, 'rgb(213, 202, 188)');
    lineaire.addColorStop(0.2, 'rgb(141, 126, 107)');
    lineaire.addColorStop(0.3, 'rgb(213, 202, 188)');
    lineaire.addColorStop(0.4, 'rgb(215, 198, 167)');
    lineaire.addColorStop(0.5, 'rgb(141, 126, 107)');
    lineaire.addColorStop(0.6, 'rgb(215, 198, 167)');
    lineaire.addColorStop(0.7, 'rgb(213, 202, 188)');
    lineaire.addColorStop(0.8, 'rgb(116, 106, 90)');
    lineaire.addColorStop(0.9, 'rgb(215, 198, 167)');
    lineaire.addColorStop(1, 'rgb(141, 126, 107)');

    ctx.beginPath(); // saturne
    ctx.fillStyle = lineaire;
    ctx.shadowColor = 'rgba(239, 232, 214, 0.4)';
    ctx.shadowOffsetX = 7;
    ctx.shadowOffsetY = -7;
    ctx.shadowBlur = 13;
    ctx.arc(960, 540, 300, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // coube 1        
    ctx.lineWidth = "7";
    ctx.strokeStyle = "white"; 
    ctx.moveTo(710, 370);
    ctx.bezierCurveTo(500, 300, 200, 400, 950, 641);
    ctx.stroke();

    ctx.beginPath();              
    ctx.lineWidth = "7";
    ctx.strokeStyle = "white"; 
    ctx.moveTo(1261, 550);
    ctx.bezierCurveTo(1700, 800, 1100, 700, 900, 623);
    ctx.stroke();

    ctx.beginPath(); // courbe 2      
    ctx.lineWidth = "5";
    ctx.strokeStyle = "rgb(141, 126, 107)"; 
    ctx.moveTo(707, 375);
    ctx.bezierCurveTo(515, 315, 210, 390, 940, 635);
    ctx.stroke();

    ctx.beginPath();              
    ctx.lineWidth = "5";
    ctx.strokeStyle = "rgb(141, 126, 107)"; 
    ctx.moveTo(1261, 556);
    ctx.bezierCurveTo(1685, 795, 1090, 690, 890, 618);
    ctx.stroke();

    ctx.beginPath(); // courbe 3      
    ctx.lineWidth = "7";
    ctx.strokeStyle ="white"; 
    ctx.moveTo(704, 380);
    ctx.bezierCurveTo(527, 325, 225, 380, 930, 624);
    ctx.stroke();

    ctx.beginPath();              
    ctx.lineWidth = "7";
    ctx.strokeStyle ="white"; 
    ctx.moveTo(1261, 563);
    ctx.bezierCurveTo(1670, 790, 1070, 675, 880, 607);
    ctx.stroke();

    ctx.beginPath(); // courbe 5
    ctx.lineWidth = "12";
    ctx.strokeStyle = "#0B173B"; 
    ctx.moveTo(698, 392);
    ctx.bezierCurveTo(550, 335, 260, 385, 970, 616);
    ctx.stroke();

    ctx.beginPath();              
    ctx.lineWidth = "12";
    ctx.strokeStyle = "#0B173B"; 
    ctx.moveTo(1261, 574);
    ctx.bezierCurveTo(1650, 780, 950, 630, 840, 572);
    ctx.stroke();

    ctx.beginPath(); // courbe 4
    ctx.lineWidth = "7";
    ctx.strokeStyle = "rgb(215, 198, 167)"; 
    ctx.moveTo(701, 385);
    ctx.bezierCurveTo(530, 330, 240, 385, 970, 626);
    ctx.stroke();

    ctx.beginPath();              
    ctx.lineWidth = "7";
    ctx.strokeStyle = "rgb(215, 198, 167)"; 
    ctx.moveTo(1261, 569);
    ctx.bezierCurveTo(1660, 785, 1020, 655, 860, 589);
    ctx.stroke();

    ctx.beginPath(); // courbe 6
    ctx.lineWidth = "7";
    ctx.strokeStyle = "white"; 
    ctx.moveTo(696, 395);
    ctx.bezierCurveTo(535, 340, 320, 400, 980, 605);
    ctx.stroke();

    ctx.beginPath();              
    ctx.lineWidth = "7";
    ctx.strokeStyle = "white"; 
    ctx.moveTo(1259, 581);
    ctx.bezierCurveTo(1600, 760, 1000, 620, 870, 570);
    ctx.stroke();

    ctx.beginPath(); // courbe 8      
    ctx.lineWidth = "5";
    ctx.strokeStyle = "rgb(141, 126, 107)"; 
    ctx.moveTo(693, 400);
    ctx.bezierCurveTo(540, 350, 355, 403, 980, 594);
    ctx.stroke();

    ctx.beginPath();              
    ctx.lineWidth = "5";
    ctx.strokeStyle = "rgb(141, 126, 107)"; 
    ctx.moveTo(1259, 587);
    ctx.bezierCurveTo(1570, 750, 980, 600, 870, 560);
    ctx.stroke();

    ctx.beginPath(); // courbe 7
    ctx.lineWidth = "7";
    ctx.strokeStyle = "rgb(253, 255, 208)";
    ctx.moveTo(691, 404);
    ctx.bezierCurveTo(515, 360, 420, 412, 980, 583);
    ctx.stroke();

    ctx.beginPath();              
    ctx.lineWidth = "7";
    ctx.strokeStyle = "rgb(253, 255, 208)"; 
    ctx.moveTo(1257, 592);
    ctx.bezierCurveTo(1530, 730, 1020, 602, 820, 533);
    ctx.stroke();

    /* Je voulais faire un mini jeu de points relier afin de relier 
    * les étoiles pour former leur constellation.
    * Il y a 2 vraies constellations et 2 "fausses" dans le thème geek ;)
    */

    ctx.beginPath(); // étoiles c1
    ctx.fillStyle = "white";
    ctx.arc(1600, 80, 4, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // étoiles c1
    ctx.fillStyle = "white";
    ctx.arc(1440, 350, 4, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // étoiles c1
    ctx.fillStyle = "white";
    ctx.arc(1760, 350, 4, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // étoiles c1
    ctx.fillStyle = "white";
    ctx.arc(1600, 350, 3, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // étoiles c1
    ctx.fillStyle = "white";
    ctx.arc(1520, 215, 3, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // étoiles c1
    ctx.fillStyle = "white";
    ctx.arc(1680, 215, 3, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // étoiles c1
    ctx.fillStyle = "white";
    ctx.arc(1600, 147, 3, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // étoiles c1
    ctx.fillStyle = "white";
    ctx.arc(1600, 215, 4, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // étoiles c1
    ctx.fillStyle = "white";
    ctx.arc(1600, 260, 4, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // étoiles c1
    ctx.fillStyle = "white";
    ctx.arc(1600, 305, 4, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // étoiles c2
    ctx.fillStyle = "white";
    ctx.arc(590, 650, 4, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // étoiles c2
    ctx.fillStyle = "white";
    ctx.arc(510, 700, 3, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // étoiles c2
    ctx.fillStyle = "white";
    ctx.arc(390, 710, 4, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // étoiles c2
    ctx.fillStyle = "white";
    ctx.arc(280, 760, 3, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // étoiles c2
    ctx.fillStyle = "white";
    ctx.arc(300, 940, 3, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // étoiles c2
    ctx.fillStyle = "white";
    ctx.arc(150, 900, 4, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // étoiles c2
    ctx.fillStyle = "white";
    ctx.arc(470, 930, 4, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // étoiles c2
    ctx.fillStyle = "white";
    ctx.arc(510, 810, 3, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // étoiles c2
    ctx.fillStyle = "white";
    ctx.arc(400, 780, 3, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // étoiles c2
    ctx.fillStyle = "white";
    ctx.arc(350, 860, 4, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // étoiles c2
    ctx.fillStyle = "white";
    ctx.arc(440, 850, 3, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // étoiles c3
    ctx.fillStyle = "white";
    ctx.arc(1690, 700, 4, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // étoiles c3
    ctx.fillStyle = "white";
    ctx.arc(1630, 750, 4, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // étoiles c3
    ctx.fillStyle = "white";
    ctx.arc(1790, 770, 4, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // étoiles c3
    ctx.fillStyle = "white";
    ctx.arc(1750, 950, 4, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // étoiles c3
    ctx.fillStyle = "white";
    ctx.arc(1635, 1000, 4, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // étoiles c3
    ctx.fillStyle = "white";
    ctx.arc(1625, 1035, 4, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // étoiles c4
    ctx.fillStyle = "white";
    ctx.arc(150, 100, 4, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // étoiles c4
    ctx.fillStyle = "white";
    ctx.arc(220, 200, 4, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // étoiles c4
    ctx.fillStyle = "white";
    ctx.arc(310, 195, 4, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // étoiles c4
    ctx.fillStyle = "white";
    ctx.arc(350, 270, 4, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath(); // étoiles c4
    ctx.fillStyle = "white";
    ctx.arc(420, 210, 4, 0, 2 * Math.PI);
    ctx.fill();

};

window.addEventListener('load', function(event) {
	initCanvas();
});