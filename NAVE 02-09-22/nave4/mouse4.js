/*var arrow;
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
            x: 400,
            y: 300,
            ease: 'Sine.easeIn',
            duration: 14000,
            paused: true
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
        else {
            text.setText('Click to start');
        }
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
new Phaser.Game(config);*/



  
  var text;
  class Raton extends Phaser.Scene {
    preload() {
      this.load.image("map", "../sources/espacio.jpg");
    }
    
     create() {
      var cam = this.cameras.main;
      this.add.image(0, 0, "map").setOrigin(0, 0);
    
      // cam.setBounds(0, 0, map.displayWidth, map.displayHeight);
      cam.setZoom(2);
    
      text = this.add
        .text(400, 300, "", {
          font: "16px monospace",
          fill: "#0ff",
          backgroundColor: "#000c",
          fixedWidth: 200,
          fixedHeight: 300
        })
        .setScale(1 / cam.zoom)
        .setScrollFactor(0);
    
      this.input.on("pointermove", function (p) {
        if (!p.isDown) return;
    
        cam.scrollX -= (p.x - p.prevPosition.x) / cam.zoom;
        cam.scrollY -= (p.y - p.prevPosition.y) / cam.zoom;
      });
    }
    
     update() {
      text.setText(
        JSON.stringify(
          this.input.activePointer,
          [
            "isDown",
            "downX",
            "downY",
            "worldX",
            "worldY",
            "x",
            "y",
            "position",
            "prevPosition"
          ],
          2
        )
      );
    }
    
  }
  


  var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    pixelArt: true,
    scene: [Raton],
    physics:{
      default:'arcade',
    },
    scale:{
        mode: Phaser.Scale.FIT
    }
  
  };
  new Phaser.Game(config);
  
  