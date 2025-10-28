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
            this.player.anims.play('moveRight', true);
        }
        else if(keyboard.left.isDown){
            this.player.setVelocityX(-160);
            this.player.anims.play('moveLeft', true);
        }
        else{
            this.player.setVelocityX(0);
            this.player.anims.play('turn', true);
        }

        if(keyboard.up.isDown && this.player.body.touching.down){
            this.player.setVelocityY(-200);
            
        }
        else if (keyboard.left.isDown && !this.player.body.touching.down){
            this.player.anims.play('jumpLeft', true);
        }
        else if (keyboard.right.isDown && !this.player.body.touching.down){
            this.player.anims.play('jumpRight', true);
        }
        else if (!this.player.body.blocked.down && this.player.body.velocity.y > 0) {
            this.player.anims.play('fall', true);
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

        this.anims.create({
            key: 'moveLeft',
            frames: this.anims.generateFrameNumbers('ash', {
                start: 5,
                end: 9,
            }),
            frameRate: 10,
            repeat: -1,
        })

        this.anims.create({
            key: 'moveRight',
            frames: this.anims.generateFrameNumbers('ash', {
                start: 15,
                end: 19,
            }),
            frameRate: 10,
            repeat: -1,
        })

        this.anims.create({
            key: 'fall',
            frames: this.anims.generateFrameNumbers('ash', {
                start: 1,
                end: 4,
            }),
            frameRate: 10,
            repeat: -1,
        })

        this.anims.create({
            key: 'turn',
            frames: [{
                key: 'ash',
                frame: 0,
            }],
        })

        this.anims.create({
            key: 'jumpRight',
            frames: [{
                key: 'ash',
                frame: 16,
            }],
            frameRate: 20,
        })

        this.anims.create({
            key: 'jumpLeft',
            frames: [{
                key: 'ash',
                frame: 6,
            }],
            frameRate: 20,
        })
    }

    update(time) {
        this.createControls();
    }

}
