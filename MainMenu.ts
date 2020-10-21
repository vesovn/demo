import { BaseButton } from '../uI/BaseButton'

export class MainMenu extends Phaser.Scene {

    private background: Phaser.GameObjects.Sprite;

    private startButton: BaseButton;
    private resumeButton: BaseButton;
    private exitButton: BaseButton;

    constructor() {
        super('MainMenu')

    }

    create() {
        this.background = new Phaser.GameObjects.Sprite(this, 0, 0, 'bgM');
        this.background.setPosition(this.cameras.main.width / 2, this.cameras.main.height / 2);
        this.add.existing(this.background);

        this.startButton = new BaseButton(this, 'play');
        this.startButton.setPosition(this.cameras.main.centerX, this.cameras.main.height * 0.2);
        this.add.existing(this.startButton);

        // this.resumeButton = new BaseButton(this, 'resume');
        // this.resumeButton.setPosition(this.cameras.main.centerX, this.cameras.main.height * 0.5);
        // this.add.existing(this.resumeButton);

        this.exitButton = new BaseButton(this, 'exit');
        this.exitButton.setPosition(this.cameras.main.centerX, this.cameras.main.height * 0.8);
        this.add.existing(this.exitButton);
    }

}  