export class BaseButton extends Phaser.GameObjects.Container {
   
    private sprite: Phaser.GameObjects.Sprite;

    constructor(scene: Phaser.Scene, key: string, onOverFrame: string) {
        super(scene)

        this.sprite = new Phaser.GameObjects.Sprite(this.scene, 0, 0, key);
        this.sprite.setInteractive();

        this.add(this.sprite);

       
    }

    public enable(status: boolean): void {
        if (status) {
            this.sprite.setInteractive();
            this.sprite.setTint(0xffffff);
        } else {
            this.sprite.disableInteractive();
            this.sprite.setTint(0xd8ceab);
        }
    }

    public destroy(fromScene: boolean): void {
        if (this.sprite != null) {
            this.sprite.destroy(fromScene);
            this.sprite = null;
        }

        

        super.destroy(fromScene);

    }

}