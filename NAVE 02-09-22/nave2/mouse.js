var nave;

class Mouse extends Phaser.Scene {

    preload() {
        this.load.image('gameTiles', '../sources/espacio.jpg');
        this.load.tilemapTiledJSON('tilemap', '../sources/space1.json');
        this.load.image("arrow", "../sources/nave4.png");
    }

    create() {
        //text = this.add.text(30, 20, '0', { font: '16px Courier', fill: '#00ff00' });
        const map = this.add.tilemap('tilemap');
        const tileset = map.addTilesetImage('estrellas', 'gameTiles');
        map.createLayer('estrellas', tileset);

        this.nave = this.physics.add.image(400, 300, 'arrow');
        this.teclas = this.input.keyboard.createCursorKeys();
    }

    update() {
        this.nave.setVelocity(0);

        this.nave.rotation= Math.atan2(this.input.y - this.nave.y, this.input.x - this.nave.x);
        if (this.teclas.up.isDown) {
            this.nave.setVelocity(50);
        }

    }

}
var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: [Mouse],
    physics: {
        default: 'arcade',
    },


};
new Phaser.Game(config);