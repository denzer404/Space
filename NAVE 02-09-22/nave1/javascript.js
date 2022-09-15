//Variables y funciones comunes a todas nuestras clases
var nave = "";
var xraton;
var yraton;
var raton2=0;
let xcentro = 550;
let ycentro = 336;
var angulo;
//Las clases de nuestro videojueg
function listener(evento){
    xraton = evento.clientX;
    yraton= evento.clientY;
    angulo= Math.atan2( yraton - ycentro,xraton-xcentro);
    angulo = (180/Math.PI)*angulo+ + 90;
    console.log(angulo);
    
}
window.addEventListener("mousemove",listener);
    
class MainScene extends Phaser.Scene {
  
    constructor() {
        super('gameScene');
    }

    preload() {
        this.load.image('gameTiles', '../sources/espacio.jpg');
        this.load.tilemapTiledJSON('tilemap', '../sources/space1.json');
        this.load.image('nave','../sources/nave3.png');
      
    }

    create() {
        const map = this.add.tilemap('tilemap');
        const tileset = map.addTilesetImage('estrellas', 'gameTiles');
        map.createLayer('estrellas', tileset);
        nave=this.add.sprite(config.width/2, config.height/2,'nave');
        
       
    
    }
    
    update() {
        //Una y otra vez
            
            nave.angle = angulo;
       
        


    }
}
class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene');
    }

    load() {

    }

    create() {

    }

    update() {
        
    }
}

class Level extends Phaser.Scene {
    constructor() {
        super('levelScene');
    }

    load() {

    }

    create() {

    }

    update() {
        
    }
}

class Mode extends Phaser.Scene {
    constructor() {
        super('modeScene');
    }

    load() {

    }

    create() {

    }

    update() {
        
    }
}

class Controls extends Phaser.Scene {
    constructor() {
        super('controlsScene');
    }

    load() {

    }

    create() {

    }

    update() {
        
    }
}

class EndGame extends Phaser.Scene {
    constructor() {
        super('endScene');
    }

    load() {

    }

    create() {

    }

    update() {
        
    }
}

//Configuración genérica del juego
const config = {
    type: Phaser.AUTO,
    
    width: 1080,
    parent:'juego',
    height: 570,
    scene: [MainScene, Menu, Level, Mode, Controls, EndGame],
    scale: {
        mode: Phaser.Scale.FIT
    },
    physics: {
        default: 'arcade',
    },
}

//Inicialización del objeto Phaser
new Phaser.Game(config);