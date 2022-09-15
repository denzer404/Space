//Variables y funciones comunes a todas nuestras clases
var nave = "";
var xraton;
var yraton;
var raton2=0;
let xcentro ;
let ycentro ;
var angulo;
//Las clases de nuestro videojueg
    
class Example extends Phaser.Scene {
  
    constructor() {
        super();
    }

    preload() {
        this.load.image('gameTiles', '../sources/espacio.jpg');
        this.load.tilemapTiledJSON('tilemap', '../sources/mapa1.json');
        this.load.image('nave','../sources/nave3.png');
    }

    create() {
        const map = this.add.tilemap('tilemap');
        const tileset = map.addTilesetImage('estrellas', 'gameTiles');
        map.createLayer('Mapa', tileset);

        
       

        //  Set the camera and physics bounds to be the size of 4x4 bg images
        this.cameras.main.setBounds(0, 0, 1920 * 2, 1080 * 2);
        this.physics.world.setBounds(0, 0, 1920 * 2, 1080 * 2);

         //  nuestra camara acechadora
         this.cursors = this.input.keyboard.createCursorKeys();
         this.player = this.physics.add.image(500, 1800, 'nave');
         this.player.setCollideWorldBounds(true);
         this.cameras.main.startFollow(this.player, true, 0.05, 0.05);
    
    }
    
    update() {
        //Una y otra vez
        this.player.setVelocity(0);
     
        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-500);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(500);
        }

        if (this.cursors.up.isDown)
        {
            this.player.setVelocityY(-500);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.setVelocityY(500);
        }
        

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
    parent: 'phaser-example',
    with:2000,
        height:2000,
    physics: {
        default: 'arcade',
    },
    scale:{
       
        mode: Phaser.Scale.ENVELOP,
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLX,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [ Example ]
}

//Inicialización del objeto Phaser
new Phaser.Game(config);