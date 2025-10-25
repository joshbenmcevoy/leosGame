export class Game extends Phaser.Scene {
    constructor(){
        super('Game');
    }

    createPlatforms(){
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(208, 588, 'platform');
        this.platforms.create(592, 588, 'platform');
    }

    createPlayer(){
        this.player = this.physics.add.sprite(50, 50, 'ash');
        this.player.setCollideWorldBounds(true);
        this.player.setBounce(0.2);
    }

    createControls(){
        let keyboard = this.input.keyboard.createCursorKeys();

        if(keyboard.right.isDown){
            this.player.setVelocityX(160);
        }
        else if(keyboard.left.isDown){
            this.player.setVelocityX(-160);
        }
        else{
            this.player.setVelocityX(0);
        }

        if(keyboard.up.isDown && this.player.body.touching.down){
            this.player.setVelocityY(-200);
        }
    }

    setCollisions(){
        this.physics.add.collider(this.player, this.platforms);
    }
    
    create(){
        this.add.image(400, 300, 'sky');
        
        this.createPlatforms();
        this.createPlayer();
        this.setCollisions();
    }

    update(time) {
        this.createControls();
    }

}
