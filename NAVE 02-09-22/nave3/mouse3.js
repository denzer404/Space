var arrow;
var tween;
var text;
class Mouse extends Phaser.Scene {

    preload() {
        
        this.load.image('gameTiles', '../sources/espacio.jpg');
        this.load.tilemapTiledJSON('tilemap', '../sources/space1.json');
        this.load.image("nave", "../sources/nave4.png");

    }

    create() {
        //text = this.add.text(30, 20, '0', { font: '16px Courier', fill: '#00ff00' });
        const map = this.add.tilemap('tilemap');
        const tileset = map.addTilesetImage('estrellas', 'gameTiles');
        map.createLayer('estrellas', tileset);

        arrow = this.add.image(400, 300, 'nave');
        tween = this.tweens.add({
            targets: arrow,
            x: 0,
            y: 0,
            ease: 'Sine.easeIn',
            duration: 14000,
            paused: false
        });
      
        this.input.on('pointerdown', function(){

            tween.play();

        });
        
        this.cameras.main.setBounds(0, 0, 1920 * 2, 1080 * 2);
        this.physics.world.setBounds(0, 0, 1920 * 2, 1080 * 2);

         //  nuestra camara acechadora
         
         this.arrow.setCollideWorldBounds(true);
         this.cameras.main.startFollow(this.arrow, true, 0.05, 0.05);
    }

    update() {
       
        arrow.rotation= Math.atan2(this.input.y - arrow.y, this.input.x - arrow.x);

        if (tween.isPlaying()) {
            tween.updateTo('x', this.input.x , true);
            tween.updateTo('y', this.input.y , true);

            //text.setText('Progress: ' + tween.progress);
        }
        /*else {
            text.setText('Click to start');
        }*/
    }

}
var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 600,
    parent: 'phaser-example',
    scene: [Mouse],
    physics:{
        default:'arcade',
    },
    scale:{
        mode: Phaser.Scale.FIT
    }


};
new Phaser.Game(config);