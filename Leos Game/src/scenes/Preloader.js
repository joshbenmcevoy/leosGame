export class Preloader extends Phaser.Scene {
    constructor() {
        super('Preloader');
    }

    init() {
        
    }

    preload() {
        //  Load the assets for the game - Replace with your own assets
        this.load.setPath('assets');

        this.load.spritesheet('ash', 'ash.png', {
            frameWidth: 50,
            frameHeight: 50,
        });

    
        this.load.image('background', 'background.png');
        this.load.image('pokeballs', 'pokeballs.png');
        this.load.image('pokemon', 'pokemon.png');
        this.load.image('sky', 'sky.png');
        this.load.image('platform', 'platform.png');

    }

    create() {
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.

        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        this.scene.start('Game');
    }
}
