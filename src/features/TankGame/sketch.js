//Sources in the Code
//Collision Detection: http://www.jeffreythompson.org/collision-detection/license.php

let p, e, o, ob; //player, enemies, obstacles
let wayPoint;
let modeDiff, waveNum;
let bullet, bulletCount, bulletEnemy, reloadProg;
let isLeft, isRight, isUp, isDown;
let keysUsed;
let keysActive;
let timeCount, alertColorR, alertColorG, alertColorB, hurtRed;
let gameStart,
  gameTextStage,
  waveStage,
  waveQueue,
  tutorialProg,
  confirm1,
  wait,
  waitWave,
  objHealth;
let getPos;
let enemyPathFind, enemyRoute1, enemyRoute2, enemyRoute3; //bottom route
let img, mySound;

function preload() {
  //preload main menu image
  img = loadImage(
    'https://upload.wikimedia.org/wikipedia/commons/2/2a/Defilada_15_sierpnia_2007_%286%29.jpg',
  );
  soundFormats('mp3', 'ogg');
  mySound = loadSound('Behind the Enemy Lines.mp3');
}

function setup() {
  frameRate(60);
  createCanvas(1000, 600);
  textSize(100);
  mySound.setVolume(0.1);
  mySound.play();
  gameStart = 0;
}

function draw() {
  //console.log(boolean(isLeft));
  switch (gameStart) {
    case 1: //the main game run loop
      background(245, 222, 179);
      rect(0, 180, 200, 150); //supply area

      p.collDir = [false, false, false, false];
      for (i = 0; i < o.length; i++) {
        //collision detection
        p.collDir = tankCollOne(
          p.collDir,
          p.vertices,
          o[i].pos,
          o[i].w,
          o[i].h,
        ); //collision detection
        for (n = 0; n < e.length; n++) {
          let detect = tankCollTwo(
            e[n].pos.x,
            e[n].pos.y,
            p.pos.x,
            p.pos.y,
            o[i].pos.x,
            o[i].pos.y,
            o[i].w,
            o[i].h,
          );
          //line(e[n].pos.x, e[n].pos.y, p.pos.x, p.pos.y);
          if (!e[n].detectP && detect) {
            e[n].detectP = true;
          } else if (e[n].detectP && detect) {
          }
        }
      }
      textSize(20);
      fill(150);
      rect(300, 20, 400, 70);
      fill(0);
      switch (
        gameTextStage //the text box for progression
      ) {
        case 0: //the text that displays when the game starts
          text('The Germans have been spotted and', 500, 40);
          text('could attack this outpost soon!', 500, 70);
          break;
        case 1:
          text('Get ready to defend the train', 500, 40);
          text('from enemy tanks!', 500, 70);
          break;
        case 2:
          text('Enemies Sighted!', 500, 60);
          waveStage = 2;
          gameTextStage = 3;
          wait = frameCount + 100;
          getPos.position(650, -70);
          break;
        case 3:
          text('Enemies Sighted!', 500, 60);
          if (wait <= frameCount) {
            gameTextStage = 4;
          }
          break;
        case 4:
          text('Wave:1', 500, 60);
          if (e.length == 0) {
            gameTextStage = 5;
            wait = frameCount + 200;
          }
          break;
        case 5:
          text('That was a just a scout!', 500, 40);
          text('Recon suggests more are on their way!', 500, 70);
          if (wait <= frameCount) {
            gameTextStage = 6;
            waveStage = 3;
          }
          break;
        case 6:
          text('Wave 2', 500, 40);
          if (e.length == 0) {
            gameTextStage = 7;
            wait = frameCount + 200;
          }
          break;
        case 7:
          text('More Enemies Incoming!', 500, 40);
          if (wait <= frameCount) {
            gameTextStage = 8;
            waveStage = 4;
          }
          break;
        case 8:
          text('Wave 3', 500, 40);
          if (e.length == 0) {
            gameTextStage = 9;
            wait = frameCount + 200;
          }
          break;
        case 9:
          text('Watch out!', 500, 40);
          text('There is a flanking force assaulting', 500, 70);
          if (wait <= frameCount) {
            gameTextStage = 10;
            waveStage = 5;
          }
          break;
        case 10:
          text('Wave 4', 500, 40);
          if (e.length == 0) {
            gameTextStage = 11;
            wait = frameCount + 200;
          }
          break;
        case 11:
          text("Good job. There's already more", 500, 40);
          text('tanks approaching, so watch out', 500, 70);
          if (wait <= frameCount) {
            gameTextStage = 12;
            waveStage = 7;
          }
          break;
        case 12:
          text('Wave 5', 500, 40);
          if (e.length == 0) {
            gameTextStage = 13;
            wait = frameCount + 200;
          }
          break;
        case 13:
          text('This wave should be that last few', 500, 40);
          text("We're almost done loading the cargo", 500, 70);
          if (wait <= frameCount) {
            gameTextStage = 14;
            waveStage = 8;
          }
          break;
        case 14:
          text('Wave 6', 500, 40);
          if (e.length == 0) {
            gameTextStage = 15;
            wait = frameCount + 200;
            p.health = 40;
          }
          break;
        case 15:
          text('we repaired your tank', 500, 40);
          text('Just a few more waves', 500, 70);
          if (wait <= frameCount) {
            gameTextStage = 16;
            waveStage = 9;
          }
          break;
        case 16:
          text('Wave 7', 500, 40);
          if (e.length == 0) {
            gameTextStage = 17;
            wait = frameCount + 200;
            p.health = 40;
          }
          break;
        case 17:
          text('Another repair is done', 500, 40);
          text('Recon suggests a heavy tank is approaching!', 500, 70);
          if (wait <= frameCount) {
            gameTextStage = 18;
            waveStage = 10;
          }
          break;
        case 18:
          text('Final Wave', 500, 40);
          if (e.length == 0) {
            gameStart = 4;
          }
          break;
        default:
      }

      switch (
        waveStage //the wave spawning switch function - all link to case 0 after running once
      ) {
        case 0:
          break;
        case 1:
          if (waitWave < frameCount) {
            waveStage = waveQueue;
          }
          break;
        case 2:
          spawnLight(2);
          waveStage = 0;
          break;
        case 3:
          spawnLight(2);
          spawnMedium(3);
          waveStage = 0;
          break;
        case 4:
          spawnMedium(2);
          spawnLight(3);
          waitWave = frameCount + 100;
          waveQueue = 2;
          waveStage = 1;
          break;
        case 5:
          spawnLight(2);
          waitWave = frameCount + 50;
          waveQueue = 6;
          waveStage = 1;
          break;
        case 6:
          spawnLight(2);
          spawnMedium(1);
          waveStage = 0;
          break;
        case 7:
          spawnMedium(2);
          spawnMedium(3);
          waitWave = frameCount + 200;
          waveQueue = 3;
          waveStage = 1;
          break;
        case 8:
          spawnMedium(1);
          spawnLight(1);
          waitWave = frameCount + 200;
          waveQueue = 4;
          waveStage = 1;
          break;
        case 9:
          spawnLight(1);
          spawnMedium(2);
          spawnMedium(3);
          waitWave = frameCount + 200;
          waveQueue = 5;
          waveStage = 1;
          break;
        case 10:
          spawnHeavy(2);
          spawnLight(3);
          spawnLight(1);
          spawnMedium(3);
          waitWave = frameCount + 200;
          waveQueue = 4;
          waveStage = 1;
          break;
      }
      textSize(15);
      ////drawing the enemies, deletes them if their health is 0
      for (i = 0; i < e.length; i++) {
        e[i].draw();
        if (e[i].health == 0) {
          e.splice(i, 1);
        }
      }
      //updating shells and draws them, collision detection, removes on impact
      bulletUpdate: for (i = 0; i < bullet.length; i++) {
        bullet[i].draw(); //updates shell travelling
        for (n = 0; n < e.length; n++) {
          if (
            dist(bullet[i].pos.x, bullet[i].pos.y, e[n].pos.x, e[n].pos.y) <= 25
          ) {
            //detecting if the shell has hit the enemy
            bullet.splice(i, 1);
            e[n].health -= 10;
            n = e.length;
            continue bulletUpdate;
          }
        }

        if (bullet[i].timeAlive >= 50) {
          bullet.splice(i, 1); //cuts shells that have been alive for 100 intervals
          continue bulletUpdate;
        }

        for (n = 0; n < o.length; n++) {
          //collision detection for obstacles
          if (
            bullet[i].pos.x >= o[n].pos.x &&
            bullet[i].pos.x <= o[n].pos.x + o[n].w &&
            bullet[i].pos.y >= o[n].pos.y &&
            bullet[i].pos.y <= o[n].pos.y + o[n].h
          ) {
            bullet.splice(i, 1);
            n = o.length;
          }
        }
      }

      //drawing and updating the enemies' bullets
      enemyBulletUpdate: for (i = 0; i < bulletEnemy.length; i++) {
        bulletEnemy[i].draw(); //updates shell travelling
        if (
          dist(bulletEnemy[i].pos.x, bulletEnemy[i].pos.y, p.pos.x, p.pos.y) <=
          25
        ) {
          //collision detection to player's tank
          //removes the shell's damage from player's health
          p.health -= bulletEnemy[i].hurtAmt;
          bulletEnemy.splice(i, 1);
          hurtRed += 20;
          continue;
        }
        if (bulletEnemy[i].timeAlive >= 40) {
          //cuts shells that have been alive for 40 intervals
          bulletEnemy.splice(i, 1);
          continue;
        }
        //collision detection for the objective
        for (m = 0; m < ob.length; m++) {
          if (
            bulletEnemy[i].pos.x >= ob[m].pos.x &&
            bulletEnemy[i].pos.x <= ob[m].pos.x + ob[m].w &&
            bulletEnemy[i].pos.y >= ob[m].pos.y &&
            bulletEnemy[i].pos.y <= ob[m].pos.y + ob[m].h
          ) {
            //objHealth -= bulletEnemy[i].hurtAmt;
            objHealth -= bulletEnemy[i].hurtAmt;
            // removes the shells damage from the bjective's health
            bulletEnemy.splice(i, 1);
            m = ob.length;
            continue enemyBulletUpdate;
          }
        }
        //detects if enemy's shells hit an obstacle
        for (n = 0; n < o.length; n++) {
          if (
            bulletEnemy[i].pos.x >= o[n].pos.x &&
            bulletEnemy[i].pos.x <= o[n].pos.x + o[n].w &&
            bulletEnemy[i].pos.y >= o[n].pos.y &&
            bulletEnemy[i].pos.y <= o[n].pos.y + o[n].h
          ) {
            bulletEnemy.splice(i, 1);
            n = o.length;
          }
        }
      }
      //draws the reload bar when the player has just fired
      reloadProg = constrain(reloadProg + 1, 0, 20);

      //drawing player's tank
      p.draw();
      //drawing objectives
      for (i = 0; i < ob.length; i++) {
        ob[i].draw();
        //console.log(i);
      }
      //goes through objective array and draws each one
      for (i = 0; i < o.length; i++) {
        o[i].draw();
        //console.log(i);
      }
      //drawing healthbar and ammo
      drawStats();
      //for the reloading and animation for when ammo is low
      if (frameCount % 10 == 0) {
        timerAction();
      }
      //detecting when either the objective or player is dead
      if (objHealth <= 0) {
        gameStart = 2;
      }
      if (p.health <= 0) {
        console.log('ded');
        gameStart = 2;
      }
      fill(200, 0, 0);
      //drawing the healthbar for the objective
      rect(10, 480, 300 * (objHealth / 70), 10);
      //the red aimation for when the player gets hit
      hurtScreen();
      break;
    //drawSupply();

    //////////////////////Tutorial Drawing/////////////////////////
    case 3:
      background(245, 222, 179);
      rect(0, 320, 200, 150);
      //tracks the progress of the tutorial
      switch (tutorialProg) {
        case 0:
          tutorial1();

          if (p.pos.x != 500 && frameCount % 20 == 0) {
            //when the player moves forward or backward
            tutorialProg = 1;
          }
          break;
        case 1:
          tutorial2();
          if (p.rotation != 0 && frameCount % 20 == 0) {
            //when the player rotates left or right
            tutorialProg = 2;
          }
          break;
        case 2:
          tutorial3();
          if (p.pos.dist(createVector(800, 300)) <= 20) {
            //when the player moves somewhere
            tutorialProg = 3;
          }
          break;
        case 3:
          tutorial4();
          if (p.pos.dist(createVector(300, 400)) <= 20) {
            tutorialProg = 4;
          }
          break;
        case 4:
          tutorial5();
          if (p.pos.dist(createVector(490, 135)) <= 20) {
            tutorialProg = 5;
            confirm1 = true;
          }
          break;
        case 5:
          tutorial6();
          if (p.pos.dist(createVector(300, 350)) <= 20) {
            tutorialProg = 6;
          }
          break;
        case 6:
          tutorial7();
          if (e.length == 0) {
            tutorialProg = 7;
          }
          break;
        case 7:
          tutorial8();
          if (bulletCount == 50 && frameCount % 100 == 0) {
            tutorialProg = 8;
          }
          break;
        case 8:
          tutorial9();
          if (frameCount % 200 == 0) {
            gameStart = 0;
          }
          break;
        default:
      }
      /*if (p.pos.x != 500 && confirm1) {
         wait = frameCount + 100;
         confirm1 = false;
       }
       if (frameCount >= wait) {
         tutorialProg += 1;
         
       }*/

      p.collDir = [false, false, false, false];
      //collision detection
      for (i = 0; i < o.length; i++) {
        p.collDir = tankCollOne(
          p.collDir,
          p.vertices,
          o[i].pos,
          o[i].w,
          o[i].h,
        ); //collision detection
        for (n = 0; n < e.length; n++) {
          let detect = tankCollTwo(
            e[n].pos.x,
            e[n].pos.y,
            p.pos.x,
            p.pos.y,
            o[i].pos.x,
            o[i].pos.y,
            o[i].w,
            o[i].h,
          );
          //line(e[n].pos.x, e[n].pos.y, p.pos.x, p.pos.y);
          if (!e[n].detectP && detect) {
            e[n].detectP = true;
          } else if (e[n].detectP && detect) {
          }
        }
      }

      ////drawing the enemies, deletes them if their health is 0
      for (i = 0; i < e.length; i++) {
        e[i].draw();
        if (e[i].health == 0) {
          e.splice(i, 1);
        }
      }

      //updating shells and draws them, collision detection, removes on impact
      bulletUpdate: for (i = 0; i < bullet.length; i++) {
        bullet[i].draw(); //updates shell travelling

        for (n = 0; n < e.length; n++) {
          if (
            dist(bullet[i].pos.x, bullet[i].pos.y, e[n].pos.x, e[n].pos.y) <= 25
          ) {
            bullet.splice(i, 1);
            e[n].health -= 10;
            n = e.length;
            continue bulletUpdate;
          }
        }

        if (bullet[i].timeAlive >= 50) {
          bullet.splice(i, 1); //cuts shells that have been alive for 100 intervals
          continue bulletUpdate;
        }

        for (n = 0; n < o.length; n++) {
          if (
            bullet[i].pos.x >= o[n].pos.x &&
            bullet[i].pos.x <= o[n].pos.x + o[n].w &&
            bullet[i].pos.y >= o[n].pos.y &&
            bullet[i].pos.y <= o[n].pos.y + o[n].h
          ) {
            bullet.splice(i, 1);
            n = o.length;
          }
        }
      }
      reloadProg = constrain(reloadProg + 1, 0, 20);
      p.draw();
      for (i = 0; i < o.length; i++) {
        o[i].draw();
        //console.log(i);
      }
      drawStats();
      if (frameCount % 10 == 0) {
        timerAction();
      }

      break;

    case 0:
      // the main menu
      background(220);
      fill(0);
      image(img, 0, 0, 1066, 600);
      textSize(100);
      textAlign(CENTER);
      text('Under Attack', 350, 140);
      textSize(75);
      fill(120, 120, 120, 170);
      noStroke();
      rect(0, 250, 400, 100);
      rect(0, 370, 250, 75);
      fill(255);
      text('Start Game', 200, 325);
      textSize(50);
      text('Tutorial', 125, 425);
      stroke(1);
      noLoop();
      break;
    case 2: //deathScreen
      console.log('drawing death');
      fill(255, 0, 0, 150);
      rect(0, 0, 1000, 600);
      fill(120, 120, 120, 170);
      rect(300, 250, 400, 100);
      rect(300, 375, 400, 100);
      textSize(100);
      textAlign(CENTER);
      fill(0);
      if (objHealth <= 0) {
        text('Objective Destroyed', 500, 200);
      } else {
        text('You Died!', 500, 200);
      }
      textSize(75);
      text('Replay', 500, 320);
      text('Main Menu', 500, 445);
      noLoop();
      break;
    case 4: // victory screen
      fill(0, 255, 0, 150);
      rect(0, 0, 1000, 600);
      fill(120, 120, 120, 170);
      rect(300, 250, 400, 100);
      rect(300, 375, 400, 100);
      textSize(100);
      textAlign(CENTER);
      fill(0);
      text('Victory!', 500, 100);
      textSize(40);
      text('You successfully defended the point.', 500, 200);
      textSize(75);
      text('Replay', 500, 320);
      text('Main Menu', 500, 445);
      noLoop();
      break;
    default:
  }
}
////////////////functions to start the game/////////////

function setupGame() {
  modeDiff = 0; // 0-easy, 1-medium, 2-hard
  p = new Player(); //creates the tank
  //arrays for enemies, obstacles, objectives
  e = [];
  o = [];
  ob = [];
  wayPoint = [];
  keysUsed = [87, 65, 68, 83]; //is order 1.w, 2.a, 3.d, 4.s
  keysActive = [false, false, false, false]; //the array of the keys pressed down
  bullet = []; //the active shells to be drawn
  bulletEnemy = []; //the array of active enemy shells
  bulletCount = 50; //ammo counter
  reloadProg = 20;
  timeCount = 0;
  objHealth = 70;
  alertColorR = 255;
  alertColorG = 255;
  alertColorB = 255;
  /*let upbutton = createButton('make enemy');
   upbutton.position(100, 100);
   upbutton.mousePressed(spawnMedium(1));*/
  getPos = createButton('Next');
  getPos.position(650, 70);
  getPos.mousePressed(logPos);
  gameStart = 1;
  gameTextStage = 0;
  waveStage = 0;
  hurtRed = 0;
  //the arrays for coordinates of the 3 routes
  enemyRoute1 = [];
  enemyRoute2 = [];
  enemyRoute3 = [];
  dataCoord = [
    //route1 - 0-11 route2 - 12-21 route3 = 22-35
    804, 650, 689, 524, 510, 534, 510, 534, 290, 467, 194, 444, 887, -40, 884,
    292, 400, 321, 308, 346, 274, 396, 779, -40, 680, 86, 573, 132, 415, 84,
    276, 118, 136, 164, 121, 305,
  ];
  //creates the obstacles
  mapInit();
  //creates the objective
  objInit();
  //creates enemy routes
  enemyRoutes();
  textSize(15);
  loop();
}

function tutorialStart() {
  modeDiff = 0; // 0-easy, 1-medium, 2-hard
  p = new Player(); //creates the tank
  e = [];
  o = [];
  wayPoint = [];
  keysUsed = [87, 65, 68, 83]; //is order 1.w, 2.a, 3.d, 4.s
  keysActive = [false, false, false, false]; //the array of the keys pressed down
  bullet = []; //the active shells to be drawn
  bulletEnemy = []; //the array of active enemy shells
  bulletCount = 50; //ammo counter
  reloadProg = 20;
  timeCount = 0;
  alertColorR = 255;
  alertColorG = 255;
  alertColorB = 255;
  /*let upbutton = createButton('make enemy');
   upbutton.position(100, 100);
   upbutton.mousePressed(testingFunct);
   let getPos = createButton('getPos');
   getPos.position(200, 100);
   getPos.mousePressed(logPos);*/
  gameStart = 3;
  confirm1 = true;
  tutorialProg = 0; //track the progress of the player
  tutorialMapInit();
  textSize(15);
  loop();
}
function objInit() {
  let rock = new Obstacle(0, 500, 100, 40, 'trainCargo');
  ob.push(rock);
  rock = new Obstacle(110, 500, 100, 40, 'trainCargo');
  ob.push(rock);
  rock = new Obstacle(220, 500, 100, 40, 'trainCargo');
  ob.push(rock);
}
function mapInit() {
  //creates new class with identifier for what prop it is and adds it to the array
  let rock = new Obstacle(220, 200, 30, 30, 'crate');
  o.push(rock);
  rock = new Obstacle(230, 250, 20, 20, 'crate');
  o.push(rock);
  rock = new Obstacle(240, 230, 20, 20, 'crate');
  o.push(rock);
  rock = new Obstacle(225, 295, 35, 35, 'crate');
  o.push(rock);
  rock = new Obstacle(180, 190, 35, 35, 'crate');
  o.push(rock);
  rock = new Obstacle(255, 190, 30, 60, 'truckUp');
  o.push(rock);
  rock = new Obstacle(550, 195, 30, 60, 'truckUp');
  o.push(rock);
  rock = new Obstacle(260, 250, 30, 60, 'truckUp');
  o.push(rock);
  rock = new Obstacle(360, 250, 40, 40, 'crate');
  o.push(rock);
  rock = new Obstacle(350, 150, 200, 100, 'building');
  o.push(rock);
  rock = new Obstacle(20, 200, 60, 40, 'tank');
  o.push(rock);
  rock = new Obstacle(10, 150, 60, 40, 'tank');
  o.push(rock);
  rock = new Obstacle(23, 255, 60, 40, 'tank');
  o.push(rock);
  rock = new Obstacle(10, 305, 50, 50, 'crate');
  o.push(rock);
  rock = new Obstacle(60, 315, 20, 20, 'crate');
  o.push(rock);
  rock = new Obstacle(370, 375, 35, 35, 'crate');
  o.push(rock);
  rock = new Obstacle(385, 410, 15, 15, 'crate');
  o.push(rock);
  rock = new Obstacle(400, 440, 20, 20, 'crate');
  o.push(rock);
  rock = new Obstacle(410, 400, 100, 40, 'trainCargo');
  o.push(rock);
  rock = new Obstacle(580, 400, 100, 40, 'trainCargo');
  o.push(rock);
  rock = new Obstacle(690, 400, 100, 40, 'trainCargo');
  o.push(rock);
  rock = new Obstacle(420, 445, 60, 30, 'truckRight');
  o.push(rock);

  console.log(o.length);
  //rock = new Obstacle(550,200,100,400, "wall");
  //o.push(rock);
  //let points = createVector(
}

function tutorialMapInit() {
  //creates the props for the tutorial
  let rock = new Obstacle(20, 120, 60, 40, 'tank');
  o.push(rock);
  rock = new Obstacle(20, 180, 60, 40, 'tank');
  o.push(rock);
  rock = new Obstacle(20, 240, 60, 40, 'tank');
  o.push(rock);
  rock = new Obstacle(20, 300, 60, 40, 'tank');
  o.push(rock);
  rock = new Obstacle(100, 120, 60, 40, 'tank');
  o.push(rock);
  rock = new Obstacle(100, 180, 60, 40, 'tank');
  o.push(rock);
  rock = new Obstacle(100, 240, 60, 40, 'tank');
  o.push(rock);
  rock = new Obstacle(100, 300, 60, 40, 'tank');
  o.push(rock);
  rock = new Obstacle(300, 40, 100, 40, 'trainCargo');
  o.push(rock);
  rock = new Obstacle(410, 40, 100, 40, 'trainCargo');
  o.push(rock);
  rock = new Obstacle(520, 40, 100, 40, 'trainCargo');
  o.push(rock);
}
///////////////////////Tutorial functions//////////////////////////////
function tutorial1() {
  textSize(50);
  text('Welcome to tank school,', 500, 200);
  text('private', 500, 275);
  text('Use W and S to move', 500, 400);
  text('forward and backward', 500, 475);
  //rect(430,295,70,10);
  //quad(440,295,430,295,450,280,460,280);
  textSize(15);
}

function tutorial2() {
  textSize(50);
  text('Not bad, Private', 500, 200);
  text('Next, use A and D', 500, 400);
  text('to turn left and right', 500, 475);
  textSize(15);
}

function tutorial3() {
  textSize(50);
  text('Now you know the basics', 500, 200);
  text('of tank controls', 500, 275);
  text('Try going to', 500, 400);
  text('these coordinates', 500, 475);
  textSize(15);
  ellipse(800, 300, 15, 15);
}

function tutorial4() {
  textSize(50);
  text('Nice job', 500, 200);
  text('now go to these', 500, 400);
  text('coordinates', 500, 475);
  textSize(15);
  ellipse(300, 400, 15, 15);
}

function tutorial5() {
  if (confirm1 == true) {
    //creating the crates that players navigate around
    let crate = new Obstacle(250, 250, 45, 45, 'crate');
    o.push(crate);
    crate = new Obstacle(350, 300, 45, 45, 'crate');
    o.push(crate);
    crate = new Obstacle(280, 214, 35, 35, 'crate');
    o.push(crate);
    crate = new Obstacle(440, 240, 55, 55, 'crate');
    o.push(crate);
    crate = new Obstacle(500, 224, 50, 50, 'crate');
    o.push(crate);
    crate = new Obstacle(400, 125, 35, 35, 'crate');
    o.push(crate);
    confirm1 = false;
  }
  textSize(50);
  text('Now a harder route', 500, 200);
  text('Navigate through the', 500, 400);
  text('obstacles to the coordinates', 500, 475);
  textSize(15);
  ellipse(490, 135, 15, 15);
}

function tutorial6() {
  textSize(50);
  text('Now for the firing training', 500, 200);
  text('Use the cursor to aim', 500, 400);
  text('left mouse to fire, move here to begin', 500, 475);
  textSize(15);
  ellipse(300, 350, 15, 15);
}

function tutorial7() {
  if (confirm1 == true) {
    let enemyT = new EnemyDummy(0);
    e.push(enemyT);
    confirm1 = false;
  }
  textSize(50);
  text('Here is a dummy tank', 500, 200);
  text('Use the crates as cover', 500, 400);
  text('it aims at your last seen position', 500, 475);
  textSize(15);
}

function tutorial8() {
  textSize(50);
  text('Before we deploy you,', 500, 200);
  text('You should reload you ammo', 500, 400);
  text('<-- drive onto here', 500, 475);
  textSize(15);
}

function tutorial9() {
  textSize(50);
  text('Well done, Private,', 500, 200);
  text("I expect you'll be", 500, 400);
  text('deployed very soon', 500, 475);
  textSize(15);
}

function hurtScreen() {
  fill(255, 0, 0, hurtRed);
  rect(0, 0, width, height);
  hurtRed -= 2;
  hurtRed = constrain(hurtRed, 0, 150);
}

function enemyRoutes() {
  //takes the 2 next coordinates and makes a vector out of them, adds it to an array
  let count = 0;
  for (i = 0; i < 6; i++) {
    //this is for the first route
    //console.log(count);
    let yCoordIndex = count + 1;
    let pX = dataCoord[count];
    let pY = dataCoord[yCoordIndex];
    posVector = createVector(pX, pY);
    enemyRoute1.push(posVector);
    count += 2;
    //console.log(i);
  }

  for (i = 6; i < 11; i++) {
    //second route
    //console.log(count);
    let yCoordIndex = count + 1;
    let pX = dataCoord[count];
    let pY = dataCoord[yCoordIndex];
    posVector = createVector(pX, pY);
    enemyRoute2.push(posVector);
    count += 2;
  }
  for (i = 11; i < 18; i++) {
    //third route
    //console.log(count);
    let yCoordIndex = count + 1;
    let pX = dataCoord[count];
    let pY = dataCoord[yCoordIndex];
    posVector = createVector(pX, pY);
    enemyRoute3.push(posVector);
    count += 2;
  }
  /*console.log(enemyRoute1);
   console.log(enemyRoute2);
   console.log(enemyRoute3);
   console.log(count);*/
}

function drawStats() {
  //the HUD - ammo counter, hp
  rect(50, 25, 200, 30);
  rect(50, 70, 152, 20);
  fill(alertColorR, alertColorG, alertColorB);
  rect(52, 72, bulletCount * 3, 16);
  fill(255);
  fill(0);
  text('Shells', 75, 68);
  text(bulletCount, 61, 85);
  fill(255, 0, 0);
  rect(52, 27, (p.health / p.maxH) * 200, 26);
  rect(50, 90, 7.5 * reloadProg, 5);
  fill(255);
  //brokenTank();
}
//creates a new bullet on click
function mousePressed() {
  //0,250,400,100
  switch (gameStart) {
    case 0: //when on the main menu, it detects click position
      if (mouseX <= 400 && mouseY <= 350 && mouseY >= 250) {
        setupGame();
      }
      if (mouseX <= 250 && mouseY <= 445 && mouseY >= 370) {
        tutorialStart();
      }
      break;
    case 2:
      if (mouseX <= 700 && mouseX >= 300) {
        if (mouseY <= 350 && mouseY >= 250) {
          setupGame();
        } else if (mouseY <= 475 && mouseY >= 375) {
          gameStart = 0;
          loop();
        }
      }
      break;
    case 4:
      if (mouseX <= 700 && mouseX >= 300) {
        if (mouseY <= 350 && mouseY >= 250) {
          setupGame();
        } else if (mouseY <= 475 && mouseY >= 375) {
          gameStart = 0;
          loop();
        }
      }
      break;
    //300, 375, 400, 100
    //300, 250, 400, 100
  }
  //if(gameStart && mouseButton == RIGHT){gameStart = false}

  if (bulletCount > 0 && p.reloadCounter <= frameCount) {
    let shells = new Shell(p.pos.x, p.pos.y, p.prevAngle, 10);
    p.reloadCounter = frameCount + 15;
    reloadProg -= 20;
    //console.log(shells.rotation);
    bullet.push(shells);
    //console.log(bullet);
    bulletCount--;
  }
}

function spawnMedium(route) {
  let pathing;
  let initPosX;
  let initPosY;
  let initPos;
  //creates the first coordinate of the route array as it's own variable to prevent the reference array from being changed
  switch (route) {
    case 1:
      pathing = enemyRoute1;
      initPosX = enemyRoute1[0].x;
      initPosY = enemyRoute1[0].y;
      console.log(enemyRoute1);
      break;
    case 2:
      pathing = enemyRoute2;
      initPosX = enemyRoute2[0].x;
      initPosY = enemyRoute2[0].y;
      console.log(enemyRoute2);
      break;
    case 3:
      pathing = enemyRoute3;
      initPosX = enemyRoute3[0].x;
      initPosY = enemyRoute3[0].y;
      console.log(enemyRoute3);
      break;
    default:
  }
  initPos = createVector(initPosX, initPosY);
  //console.log(pathRoute);
  let enemyT = new Enemy(2, pathing, initPos); // creates the enemy tank, with a velocity of 2
  e.push(enemyT);
  //console.log(p.pos.x, p.pos.y);
}
function spawnHeavy(route) {
  //the creator for heavy tanks
  let pathing;
  let initPosX;
  let initPosY;
  let initPos;
  switch (route) {
    case 1:
      pathing = enemyRoute1;
      initPosX = enemyRoute1[0].x;
      initPosY = enemyRoute1[0].y;
      console.log(enemyRoute1);
      break;
    case 2:
      pathing = enemyRoute2;
      initPosX = enemyRoute2[0].x;
      initPosY = enemyRoute2[0].y;
      console.log(enemyRoute2);
      break;
    case 3:
      pathing = enemyRoute3;
      initPosX = enemyRoute3[0].x;
      initPosY = enemyRoute3[0].y;
      console.log(enemyRoute3);
      break;
    default:
  }
  initPos = createVector(initPosX, initPosY);
  //console.log(pathRoute);
  let enemyT = new EnemyHeavy(1, pathing, initPos);
  e.push(enemyT);
  //console.log(p.pos.x, p.pos.y);
}
function spawnLight(route) {
  //creator for light tanks.
  let pathing;
  let initPosX;
  let initPosY;
  let initPos;
  switch (route) {
    case 1:
      pathing = enemyRoute1;
      initPosX = enemyRoute1[0].x;
      initPosY = enemyRoute1[0].y;
      console.log(enemyRoute1);
      break;
    case 2:
      pathing = enemyRoute2;
      initPosX = enemyRoute2[0].x;
      initPosY = enemyRoute2[0].y;
      console.log(enemyRoute2);
      break;
    case 3:
      pathing = enemyRoute3;
      initPosX = enemyRoute3[0].x;
      initPosY = enemyRoute3[0].y;
      console.log(enemyRoute3);
      break;
    default:
  }
  initPos = createVector(initPosX, initPosY);
  //console.log(pathRoute);
  let enemyT = new EnemyLight(3, pathing, initPos);
  e.push(enemyT);
  //console.log(p.pos.x, p.pos.y);
}

function logPos() {
  //not actually the function of this function
  //console.log(p.pos.x, p.pos.y);
  gameTextStage += 1;
}

function timerAction() {
  //a function that runs every 10 frames

  //refill shells when in this area
  if (
    p.pos.x >= 0 &&
    p.pos.x <= 200 &&
    p.pos.y <= 450 &&
    p.pos.y >= 320 &&
    bulletCount < 50 &&
    gameStart == 3
  ) {
    bulletCount++;
    alertColorG = 255;
    alertColorR = 0;
    alertColorB = 0; //0, 180, 200, 150
  } else if (
    p.pos.x >= 0 &&
    p.pos.x <= 200 &&
    p.pos.y <= 330 &&
    p.pos.y >= 180 &&
    bulletCount < 50 &&
    gameStart == 1
  ) {
    bulletCount++;
    alertColorG = 255;
    alertColorR = 0;
    alertColorB = 0;
  } else if (bulletCount <= 10 && alertColorG == 255) {
    alertColorG = 0;
    alertColorB = 0;
  } else if (alertColorG == 0 || alertColorR == 0 || alertColorB == 0) {
    alertColorR = 255;
    alertColorG = 255;
    alertColorB = 255;
  } //creates blinking alert when ammo counter is low
}

function keyPressed() {
  //sends the key that was pressed down
  setMove(keyCode, true);
  //console.log(int(keyCode));
}

function keyReleased() {
  //removes the key that was released
  setMove(keyCode, false);
}

function setMove(k, b) {
  for (i = 0; i < keysUsed.length; i++) {
    if (int(k) == keysUsed[i]) {
      keysActive[i] = b; //adds the active keys to the array, and removes if b == false
      //console.log(keysActive);
    }
  }
}

//the first step of the collision detection - takes the vertices for the 4 sides of the tank and sends it to step 2
function tankCollOne(collDir, vertices, oPos, oW, oH) {
  let second;
  for (first = 0; first < vertices.length; first++) {
    second = first + 1;
    if (second == vertices.length) {
      second = 0;
    }
    fV = vertices[first];
    sV = vertices[second];
    //console.log(oPos);
    let isCol = tankCollTwo(fV.x, fV.y, sV.x, sV.y, oPos.x, oPos.y, oW, oH);
    //console.log(isCol);
    if (isCol) {
      collDir[first] = true;
    }
    //else {collDir[first] = false}
  }
  return collDir;
}
//step two takes the vertices and compares it to the obstacle sides, and sends it to step 3
function tankCollTwo(x1, y1, x2, y2, rx, ry, rw, rh) {
  //also used for line of sight
  let left = tankLine(x1, y1, x2, y2, rx, ry, rx, ry + rh);
  let right = tankLine(x1, y1, x2, y2, rx + rw, ry, rx + rw, ry + rh);
  let top = tankLine(x1, y1, x2, y2, rx, ry, rx + rw, ry);
  let bottom = tankLine(x1, y1, x2, y2, rx, ry + rh, rx + rw, ry + rh);

  if (left || right || top || bottom) {
    return true;
  }
  //return false;
}
//step 3 sees if the lines are intersecting
function tankLine(x1, y1, x2, y2, x3, y3, x4, y4) {
  let uA =
    ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) /
    ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
  let uB =
    ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) /
    ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
  if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
    //console.log('hit');
    return true;
  }
  return false;
}
////////////////////////the tank classes///////////////
class tankFrame {
  constructor(posX, posY, aimX, aimY, vel) {
    //these variables are for the tank chassi
    this.dir = createVector(0, 0); //the chassi direction
    this.pos = createVector(posX, posY); //the tank position
    this.vel = createVector(vel, vel); //the speed the tank drives
    this.collDir = [false, false, false, false]; //front,right,bottom,left
    this.vertices = []; //the 4 points for collision detection
    this.vertices[0] = createVector(0, 0); //z1///z3---------------------z1/////
    this.vertices[1] = createVector(0, 0); //z2////|/////////////////////|////////
    this.vertices[2] = createVector(0, 0); //z3////|/////////////////////|///////
    this.vertices[3] = createVector(0, 0); //z4///z4---------------------z2///
    this.rotation = 0; //tank chassi rotation

    //these variables are for the tank turret
    this.turretTarget = createVector(aimX, aimY); // what the turret targets initially
    this.turretDir = createVector(0, 0); //direction turret is facing
    this.turretTraverse = 0.02; //how fast the turret traverses
    this.angle = 3.14159; //the angle the turret is aiming currently
    this.prevAngle = 3.14159; //the previous angle
  }
}

///////////////////////Player's Tank///////////////////////////
class Player extends tankFrame {
  constructor() {
    super(width / 2, height / 2, mouseX, mouseY, 3);
    this.reloadCounter = 20;
    switch (
      modeDiff //sets health according to difficulty
    ) {
      case 0:
        this.health = 40;
        this.maxH = 40;
        break;
      case 1:
        this.health = 30;
        this.maxH = 30;
        break;
      case 2:
        this.health = 20;
        this.maxH = 20;
        break;
      default:
        console.log('No Difficulty Could be Read!');
    }
  }
  draw() {
    //update loop
    this.update();
    this.display();
  }

  update() {
    //for updating and setting the coords/angles for the tank
    //the movement controllers
    if (
      this.collDir[0] &&
      this.collDir[1] &&
      this.collDir[2] &&
      this.collDir[3]
    ) {
      this.collDir = false;
    }
    if (keysActive[0] && !this.collDir[0]) {
      this.pos.x += cos(this.rotation) * this.vel.x;
      this.pos.y += sin(this.rotation) * this.vel.y;
    }
    if (keysActive[1] && !this.collDir[3]) {
      this.rotation -= 0.03;
      this.prevAngle -= 0.03;
    }
    if (keysActive[2] && !this.collDir[1]) {
      this.rotation += 0.03;
      this.prevAngle += 0.03;
    }
    if (keysActive[3] && !this.collDir[2]) {
      this.pos.x -= cos(this.rotation) * this.vel.x;
      this.pos.y -= sin(this.rotation) * this.vel.y;
    }

    this.turretTarget.x = mouseX;
    this.turretTarget.y = mouseY;

    this.dX = float(this.pos.x - this.turretTarget.x);
    this.dY = float(this.pos.y - this.turretTarget.y);

    this.angle = float(radians((atan2(this.dY, this.dX) * 180) / PI));
    let angleDiff = this.angle - this.prevAngle;
    //console.log(this.angle);
    //console.log("angle difference: "+angleDiff+" angle: "+angle+" prev angle: "+this.prevAngle);
    //console.log(this.rotation);

    //detects if the turret needs to turn past the radians, and minuses the radians to allow the turret to turn back to 0
    if (angleDiff <= -PI) {
      this.angle = this.prevAngle - 2 * PI;
    } else if (angleDiff >= PI) {
      this.angle = this.prevAngle + 2 * PI;
    } else if (angleDiff >= this.turretTraverse) {
      this.angle = this.prevAngle + this.turretTraverse;
    } else if (angleDiff <= -this.turretTraverse) {
      this.angle = this.prevAngle - this.turretTraverse;
    }
    this.prevAngle = this.angle;
    this.angle -= this.rotation;

    //calculate the change for the 4 points
    let cx = createVector(cos(this.rotation) * 30, sin(this.rotation) * 30);
    let cy = createVector(sin(this.rotation) * 20, cos(this.rotation) * 20);
    //z1
    this.vertices[0].x = this.pos.x + cx.x + cy.x;
    this.vertices[0].y = this.pos.y + cx.y - cy.y;
    //z2
    this.vertices[1].x = this.pos.x + cx.x - cy.x;
    this.vertices[1].y = this.pos.y + cx.y + cy.y;
    //z3
    this.vertices[2].x = this.pos.x - cx.x + cy.x;
    this.vertices[2].y = this.pos.y - cx.y - cy.y;
    //z4
    this.vertices[3].x = this.pos.x - cx.x - cy.x;
    this.vertices[3].y = this.pos.y - cx.y + cy.y;
    //console.log(this.vertices[0]);
  }

  display() {
    //draws the tank stuff
    push(); //push the matrix
    translate(this.pos.x, this.pos.y); //go to the location
    rotate(this.rotation); //rotate it so the tank is rotated
    rectMode(CENTER); //make the tank base centered at 0,0

    //drawing the tracks
    fill(100);
    rect(0, 20, 50, 10);
    rect(0, -20, 50, 10);

    //drawing the actual tank chassi
    fill(102, 103, 41);
    //fill(255, 103, 41);
    rect(0, 0, 60, 40);
    noStroke();
    //minor details
    fill(122, 123, 61);
    rect(25, 0, 10, 40);
    rect(-15, 10, 10, 3);
    stroke(1);

    //drawing the turret
    fill(102, 103, 41);
    rotate(this.angle); //rotate the turret anlge
    rect(-20, 0, 40, 5);
    rect(0, 0, 25, 25);
    ellipse(-5, 5, 10, 10);
    pop();
    /*ellipse(this.vertices[0].x, this.vertices[0].y,10,10);
     ellipse(this.vertices[1].x, this.vertices[1].y,10,10);
     ellipse(this.vertices[2].x, this.vertices[2].y,10,10);
     ellipse(this.vertices[3].x, this.vertices[3].y,10,10);*/
  }
}

///////////////////Enemy Tank Classes///////////////////////
class Enemy extends tankFrame {
  // a medium tank

  constructor(vel, path, initial) {
    super(600, 200, 500, 0, vel); //sends the values to the tankFrame class
    this.pos = initial;
    this.health = 50;
    this.move = 0;
    this.detectP = true;
    this.reloadCounter = 100;
    this.routeProg = 1;
    this.route = path;
    this.moveTimer = frameCount;
    this.turretTraverse = 0.015;

    //console.log(this.pos);
  }
  draw() {
    this.update();
    push();
    translate(this.pos.x, this.pos.y);
    rect(-20, 40, this.health, 2); //healthbar
    rotate(this.rotation);
    rectMode(CENTER);
    fill(100);
    rect(0, 20, 50, 10);
    rect(0, -20, 50, 10);
    fill(150);
    rect(0, 0, 60, 40);
    noStroke();
    fill(200);
    rect(25, 0, 10, 40);
    rect(-15, 10, 10, 3);
    stroke(1);
    fill(150);

    //create angle from the difference
    rotate(this.angle);
    rect(-20, 0, 50, 5);
    rect(2, 0, 30, 25);
    pop();
  }

  moveRoute(speed) {
    this.bX = this.route[this.routeProg].x - this.pos.x;
    this.bY = this.route[this.routeProg].y - this.pos.y;
    this.dest = this.pos.dist(this.route[this.routeProg]);
    //console.log(distance);
    if (this.dest <= 3) {
      //console.log('next');
      this.routeProg += 1;
    }
    this.tarA = radians((atan2(this.bY, this.bX) * 180) / PI);
    let diffA = this.tarA - this.rotation;
    //console.log("current: " + this.rotation + "targetting: " +this.tarA+ " difference: " + diffA);
    if (diffA <= -PI) {
      this.rotation -= 2 * PI;
    } else if (diffA >= PI) {
      this.rotation += 2 * PI;
    } else if (diffA >= 0.03) {
      this.rotation += 0.03;
    } else if (diffA <= -0.03) {
      this.rotation -= 0.03;
    } else {
      this.pos.x += cos(this.rotation) * (this.vel.x / speed);
      this.pos.y += sin(this.rotation) * (this.vel.y / speed);
    } //console.log('i cant see');
  }
  update() {
    //if (frameCount % 40 == 0) {
    //this.move = round(random(6));
    //console.log(this.move);
    //}
    /*if (this.move == 1) {
       this.pos.x += cos(this.rotation) * this.vel.x;
       this.pos.y += sin(this.rotation) * this.vel.y;
     }
     if (this.move == 2) {
       this.rotation -= 0.03;
       this.prevAngle -= 0.03;
     }
     if (this.move == 3) {
       this.rotation += 0.03;
       this.prevAngle += 0.03;
     }
     if (this.move == 4) {
       this.pos.x -= cos(this.rotation) * this.vel.x;
       this.pos.y -= sin(this.rotation) * this.vel.y;
     }*/

    switch (this.detectP) {
      case false:
        this.turretTarget.x = p.pos.x;
        this.turretTarget.y = p.pos.y;
        this.moveTimer = frameCount + 100;
        if (this.pos.dist(p.pos) >= 300 && this.routeProg < this.route.length) {
          this.moveRoute(5);
        } else if (this.routeProg >= this.route.length) {
          this.turretTarget.x = 110;
          this.turretTarget.y = 530;
        }
        break;
      default:
        if (
          this.moveTimer <= frameCount &&
          this.routeProg < this.route.length
        ) {
          this.moveRoute(1);
        } else if (this.routeProg >= this.route.length) {
          this.turretTarget.x = 110;
          this.turretTarget.y = 530;
        }
    }

    this.dX = float(this.pos.x - this.turretTarget.x);
    this.dY = float(this.pos.y - this.turretTarget.y);

    this.angle = float(radians((atan2(this.dY, this.dX) * 180) / PI));
    let angleDiff = this.angle - this.prevAngle;
    //console.log("angle difference: "+angleDiff+" angle: "+angle+" prev angle: "+this.prevAngle);
    if (angleDiff <= -3.1) {
      this.angle = this.prevAngle - 6.2;
    } else if (angleDiff >= 3.1) {
      this.angle = this.prevAngle + 6.2;
    } else if (angleDiff >= this.turretTraverse) {
      this.angle = this.prevAngle + this.turretTraverse;
    } else if (angleDiff <= -this.turretTraverse) {
      this.angle = this.prevAngle - this.turretTraverse;
    } else {
      //console.log('fire');
      if (
        this.reloadCounter <= frameCount &&
        (this.routeProg >= this.route.length ||
          (!this.detectP && this.pos.dist(p.pos) <= 325))
      ) {
        let shells = new Shell(this.pos.x, this.pos.y, this.prevAngle, 5);
        this.reloadCounter = frameCount + 100;
        //console.log(frameCount)
        bulletEnemy.push(shells);
      }
    }
    this.detectP = false;
    this.prevAngle = this.angle;
    this.angle -= this.rotation;
  }
}
class EnemyLight extends tankFrame {
  // a light tank

  constructor(vel, path, initial) {
    super(600, 200, 500, 0, vel);
    this.pos = initial;
    this.health = 20;
    this.move = 0;
    this.detectP = true;
    this.reloadCounter = 100;
    this.routeProg = 1;
    this.route = path;
    this.moveTimer = frameCount;

    //console.log(this.pos);
  }
  draw() {
    this.update();
    push();
    translate(this.pos.x, this.pos.y);
    rect(-20, 40, 50 * (this.health / 20), 2); //healthbar
    rotate(this.rotation);
    rectMode(CENTER);
    fill(100);
    rect(0, 16, 40, 10); //tracks
    rect(0, -16, 40, 10);
    fill(150);
    rect(0, 0, 50, 35); //body
    noStroke();
    fill(200);
    rect(25, 0, 10, 35); //details
    rect(-15, 10, 10, 3);
    stroke(1);
    fill(150);

    //create angle from the difference
    rotate(this.angle); //turret
    rect(-20, 0, 30, 3);
    rect(0, 0, 20, 20);
    pop();
  }

  moveRoute(speed) {
    this.bX = this.route[this.routeProg].x - this.pos.x;
    this.bY = this.route[this.routeProg].y - this.pos.y;
    this.dest = this.pos.dist(this.route[this.routeProg]);
    //console.log(distance);
    if (this.dest <= 3) {
      //console.log('next');
      this.routeProg += 1;
    }
    this.tarA = radians((atan2(this.bY, this.bX) * 180) / PI);
    let diffA = this.tarA - this.rotation;
    //console.log("current: " + this.rotation + "targetting: " +this.tarA+ " difference: " + diffA);
    if (diffA <= -PI) {
      this.rotation -= 2 * PI;
    } else if (diffA >= PI) {
      this.rotation += 2 * PI;
    } else if (diffA >= 0.03) {
      this.rotation += 0.03;
    } else if (diffA <= -0.03) {
      this.rotation -= 0.03;
    } else {
      this.pos.x += cos(this.rotation) * (this.vel.x / speed);
      this.pos.y += sin(this.rotation) * (this.vel.y / speed);
    } //console.log('i cant see');
  }

  update() {
    switch (this.detectP) {
      case false:
        this.turretTarget.x = p.pos.x;
        this.turretTarget.y = p.pos.y;
        this.moveTimer = frameCount + 100;
        if (this.pos.dist(p.pos) >= 250 && this.routeProg < this.route.length) {
          this.moveRoute(5);
        } else if (this.routeProg >= this.route.length) {
          this.turretTarget.x = 110;
          this.turretTarget.y = 530;
        }
        break;
      default:
        if (
          this.moveTimer <= frameCount &&
          this.routeProg < this.route.length
        ) {
          this.moveRoute(1);
        } else if (this.routeProg >= this.route.length) {
          this.turretTarget.x = 110;
          this.turretTarget.y = 530;
        }
    }

    this.dX = float(this.pos.x - this.turretTarget.x);
    this.dY = float(this.pos.y - this.turretTarget.y);

    this.angle = float(radians((atan2(this.dY, this.dX) * 180) / PI));
    let angleDiff = this.angle - this.prevAngle;
    //console.log("angle difference: "+angleDiff+" angle: "+angle+" prev angle: "+this.prevAngle);
    if (angleDiff <= -3.1) {
      this.angle = this.prevAngle - 6.2;
    } else if (angleDiff >= 3.1) {
      this.angle = this.prevAngle + 6.2;
    } else if (angleDiff >= this.turretTraverse) {
      this.angle = this.prevAngle + this.turretTraverse;
    } else if (angleDiff <= -this.turretTraverse) {
      this.angle = this.prevAngle - this.turretTraverse;
    } else {
      //console.log('fire');
      if (
        this.reloadCounter <= frameCount &&
        (this.routeProg >= this.route.length ||
          (!this.detectP && this.pos.dist(p.pos) <= 275))
      ) {
        let shells = new Shell(this.pos.x, this.pos.y, this.prevAngle, 1);
        this.reloadCounter = frameCount + 20;
        //console.log(frameCount)
        bulletEnemy.push(shells);
      }
    }
    this.detectP = false;
    this.prevAngle = this.angle;
    this.angle -= this.rotation;
  }
}

class EnemyHeavy extends tankFrame {
  // a medium tank

  constructor(vel, path, initial) {
    super(600, 200, 500, 0, vel);
    this.pos = initial;
    this.health = 150;
    this.move = 0;
    this.detectP = true;
    this.reloadCounter = 300;
    this.routeProg = 1;
    this.route = path;
    this.moveTimer = frameCount;
    this.turretTraverse = 0.01;

    //console.log(this.pos);
  }
  draw() {
    this.update();
    push();
    translate(this.pos.x, this.pos.y);
    rect(-50, 40, this.health / 1.5, 2); //healthbar
    text('Boss', 0, -40);
    rotate(this.rotation);
    rectMode(CENTER);
    fill(100);
    rect(0, 22, 60, 10);
    rect(0, -22, 60, 10);
    fill(150);
    rect(0, 0, 70, 45);
    noStroke();
    fill(200);
    rect(30, 0, 10, 45);
    rect(-15, 10, 10, 3);
    stroke(1);
    fill(150);

    //create angle from the difference
    rotate(this.angle);
    rect(-20, 0, 60, 5);
    rect(-50, 0, 6, 10);
    rect(2, 0, 35, 30);
    pop();
  }

  moveRoute(speed) {
    this.bX = this.route[this.routeProg].x - this.pos.x;
    this.bY = this.route[this.routeProg].y - this.pos.y;
    this.dest = this.pos.dist(this.route[this.routeProg]);
    //console.log(distance);
    if (this.dest <= 3) {
      //console.log('next');
      this.routeProg += 1;
    }
    this.tarA = radians((atan2(this.bY, this.bX) * 180) / PI);
    let diffA = this.tarA - this.rotation;
    //console.log("current: " + this.rotation + "targetting: " +this.tarA+ " difference: " + diffA);
    if (diffA <= -PI) {
      this.rotation -= 2 * PI;
    } else if (diffA >= PI) {
      this.rotation += 2 * PI;
    } else if (diffA >= 0.015) {
      this.rotation += 0.015;
    } else if (diffA <= -0.015) {
      this.rotation -= 0.015;
    } else {
      this.pos.x += cos(this.rotation) * (this.vel.x / speed);
      this.pos.y += sin(this.rotation) * (this.vel.y / speed);
    } //console.log('i cant see');
  }
  update() {
    //if (frameCount % 40 == 0) {
    //this.move = round(random(6));
    //console.log(this.move);
    //}
    /*if (this.move == 1) {
       this.pos.x += cos(this.rotation) * this.vel.x;
       this.pos.y += sin(this.rotation) * this.vel.y;
     }
     if (this.move == 2) {
       this.rotation -= 0.03;
       this.prevAngle -= 0.03;
     }
     if (this.move == 3) {
       this.rotation += 0.03;
       this.prevAngle += 0.03;
     }
     if (this.move == 4) {
       this.pos.x -= cos(this.rotation) * this.vel.x;
       this.pos.y -= sin(this.rotation) * this.vel.y;
     }*/

    switch (this.detectP) {
      case false:
        this.turretTarget.x = p.pos.x;
        this.turretTarget.y = p.pos.y;
        this.moveTimer = frameCount + 100;
        if (this.pos.dist(p.pos) >= 375 && this.routeProg < this.route.length) {
          this.moveRoute(5);
        } else if (this.routeProg >= this.route.length) {
          this.turretTarget.x = 110;
          this.turretTarget.y = 530;
        }
        break;
      default:
        if (
          this.moveTimer <= frameCount &&
          this.routeProg < this.route.length
        ) {
          this.moveRoute(1);
        } else if (this.routeProg >= this.route.length) {
          this.turretTarget.x = 110;
          this.turretTarget.y = 530;
        }
    }

    this.dX = float(this.pos.x - this.turretTarget.x);
    this.dY = float(this.pos.y - this.turretTarget.y);

    this.angle = float(radians((atan2(this.dY, this.dX) * 180) / PI));
    let angleDiff = this.angle - this.prevAngle;
    //console.log("angle difference: "+angleDiff+" angle: "+angle+" prev angle: "+this.prevAngle);
    if (angleDiff <= -3.1) {
      this.angle = this.prevAngle - 6.2;
    } else if (angleDiff >= 3.1) {
      this.angle = this.prevAngle + 6.2;
    } else if (angleDiff >= this.turretTraverse) {
      this.angle = this.prevAngle + this.turretTraverse;
    } else if (angleDiff <= -this.turretTraverse) {
      this.angle = this.prevAngle - this.turretTraverse;
    } else {
      //console.log('fire');
      if (
        this.reloadCounter <= frameCount &&
        (this.routeProg >= this.route.length ||
          (!this.detectP && this.pos.dist(p.pos) <= 400))
      ) {
        let shells = new Shell(this.pos.x, this.pos.y, this.prevAngle, 20);
        this.reloadCounter = frameCount + 300;
        //console.log(frameCount)
        bulletEnemy.push(shells);
      }
    }
    this.detectP = false;
    this.prevAngle = this.angle;
    this.angle -= this.rotation;
  }
}
class EnemyDummy extends tankFrame {
  constructor(vel) {
    super(800, 300, 500, 0, vel);
    this.health = 50;
    this.detectP = true;
  }
  draw() {
    this.update();
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.rotation);
    rectMode(CENTER);
    fill(100);
    rect(0, 20, 50, 10);
    rect(0, -20, 50, 10);
    fill(150);
    rect(0, 0, 60, 40);
    noStroke();
    fill(200);
    rect(25, 0, 10, 40);
    rect(-15, 10, 10, 3);
    stroke(1);
    fill(150);
    rect(0, -40, 50 * (this.health / 20), 2);

    //create angle from the difference

    rotate(this.angle);
    rect(-20, 0, 40, 5);
    rect(0, 0, 25, 25);
    pop();
  }

  update() {
    //if (frameCount % 40 == 0) {
    //this.move = round(random(6));
    //console.log(this.move);
    //}
    /*if (this.move == 1) {
       this.pos.x += cos(this.rotation) * this.vel.x;
       this.pos.y += sin(this.rotation) * this.vel.y;
     }
     if (this.move == 2) {
       this.rotation -= 0.03;
       this.prevAngle -= 0.03;
     }
     if (this.move == 3) {
       this.rotation += 0.03;
       this.prevAngle += 0.03;
     }
     if (this.move == 4) {
       this.pos.x -= cos(this.rotation) * this.vel.x;
       this.pos.y -= sin(this.rotation) * this.vel.y;
     }*/

    switch (this.detectP) {
      case false:
        this.turretTarget.x = p.pos.x;
        this.turretTarget.y = p.pos.y;
        break;
      default:
    }
    this.dX = float(this.pos.x - this.turretTarget.x);
    this.dY = float(this.pos.y - this.turretTarget.y);

    this.angle = float(radians((atan2(this.dY, this.dX) * 180) / PI));
    let angleDiff = this.angle - this.prevAngle;
    //console.log("angle difference: "+angleDiff+" angle: "+angle+" prev angle: "+this.prevAngle);
    if (angleDiff <= -3.1) {
      this.angle = this.prevAngle - 6.2;
    } else if (angleDiff >= 3.1) {
      this.angle = this.prevAngle + 6.2;
    } else if (angleDiff >= this.turretTraverse) {
      this.angle = this.prevAngle + this.turretTraverse;
    } else if (angleDiff <= -this.turretTraverse) {
      this.angle = this.prevAngle - this.turretTraverse;
    } else {
      //console.log('fire');
    }
    this.detectP = false;
    this.prevAngle = this.angle;
    this.angle -= this.rotation;
  }
}

class Shell {
  constructor(x, y, rotate, damage) {
    this.pos = createVector(x, y);
    this.rotation = rotate;
    this.velocity = createVector(10, 10);
    this.timeAlive = 0;
    this.hurtAmt = damage;
  }

  draw() {
    this.update();
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.rotation);
    rectMode(CENTER);
    rect(0, 0, 10, 5);
    pop();
  }

  update() {
    this.pos.x -= cos(this.rotation) * this.velocity.x;
    this.pos.y -= sin(this.rotation) * this.velocity.y;
    this.timeAlive++;
  }
}

class Obstacle {
  constructor(x, y, wd, hg, type) {
    this.pos = createVector(x, y);
    this.w = wd;
    this.h = hg;
    this.propType = type;

    //console.log(this.propType);
  }

  draw() {
    fill(150);
    //rect(this.pos.x, this.pos.y, this.w, this.h);
    switch (this.propType) {
      case 'crate':
        crateProp(this.pos.x, this.pos.y, this.w, this.h);
        break;
      case 'tank':
        //console.log(this.pos.x);
        tankProp(this.pos.x + this.w / 2, this.pos.y + this.h / 2);
        break;
      case 'truckUp':
        truckPropUp(this.pos.x, this.pos.y, this.w, this.h);
        break;
      case 'truckRight':
        truckPropRight(this.pos.x, this.pos.y, this.w, this.h);
        break;
      case 'trainCargo':
        trainProp(this.pos.x, this.pos.y);
        break;
      case 'building':
        buildingProp(this.pos.x, this.pos.y, this.w, this.h);
        break;
      default:
    }
  }
}

////////////////////props for background///////////////////

function tankProp(x, y) {
  //console.log(x);
  push();
  translate(x, y);
  rectMode(CENTER);
  fill(100);
  rect(0, 20, 50, 10);
  rect(0, -20, 50, 10);

  //drawing the actual tank chassi
  fill(102, 103, 41);
  //fill(255, 103, 41);
  rect(0, 0, 60, 40);
  noStroke();
  //minor details
  fill(122, 123, 61);
  rect(25, 0, 10, 40);
  rect(-15, 10, 10, 3);
  stroke(1);

  //drawing the turret
  fill(102, 103, 41);
  rect(20, 0, 40, 5);
  rect(0, 0, 25, 25);
  ellipse(-5, 5, 10, 10);
  pop();
}

function crateProp(x, y, w, h) {
  push();
  translate(x, y);
  fill(166, 128, 100);
  rect(0, 0, w, h);
  rect(w * 0.1, h * 0.1, w * 0.8, h * 0.8);
  pop();
}

function truckPropUp(x, y) {
  push();
  translate(x, y);
  fill(50);
  rect(0, 5, 3, 8);
  rect(27, 5, 3, 8);
  fill(102, 103, 41);
  rect(3, 0, 24, 20);
  fill(176, 224, 230);
  rect(5, 10, 20, 5);
  fill(210, 180, 140);
  rect(0, 23, 30, 36);
  for (l = 0; l < 3; l++) {
    line(0, l * 10 + 25, 30, l * 10 + 25);
  }
  pop();
}

function truckPropRight(x, y) {
  push();
  translate(x + 60, y);
  rotate(radians(90));
  fill(50);
  rect(0, 5, 3, 8);
  rect(27, 5, 3, 8);
  fill(102, 103, 41);
  rect(3, 0, 24, 20);
  fill(176, 224, 230);
  rect(5, 10, 20, 5);
  fill(210, 180, 140);
  rect(0, 23, 30, 36);
  for (l = 0; l < 3; l++) {
    line(0, l * 10 + 25, 30, l * 10 + 25);
  }
  pop();
}

function trainProp(x, y) {
  push();
  translate(x, y);
  fill(129, 69, 59);
  rect(0, 0, 100, 40);
  fill(160, 82, 45);
  rect(20, -5, 40, 5);
  fill(150);
  rect(100, 15, 10, 10);
  pop();
}

function buildingProp(x, y, w, h) {
  push();
  translate(x, y);
  fill(200);
  rect(0, 0, w, h);
  pop();
}
