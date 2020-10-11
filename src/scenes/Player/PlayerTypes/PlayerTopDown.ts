import { Player } from '../Player';

export class PlayerTopDown extends Phaser.Physics.Arcade.Sprite {
  private player: Player;
  private knife: Phaser.Physics.Arcade.Sprite;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y,'Player', 'Mage');
    scene.physics.world.enable(this);
    this.setScale(3);
    this.scene.add.existing(this);
  }

  public getWeapon() {
    return this.knife;
  }

  public controlls() {
    let keys = this.scene.input.keyboard.createCursorKeys();
    let W = this.scene.input.keyboard.addKey('W');
    let A = this.scene.input.keyboard.addKey('A');
    let D = this.scene.input.keyboard.addKey('D');
    let S = this.scene.input.keyboard.addKey('S');
    let C = this.scene.input.keyboard.addKey('C');
    if (keys.left.isDown || A.isDown) {
      this.setVelocityX(-400);
      this.flipX = true;
    }
    if (keys.right.isDown || D.isDown) {
      this.setVelocityX(400);
      this.flipX = false;
    }
    if (keys.up.isDown || W.isDown) {
      this.setVelocityY(-400);
    }
    if (keys.down.isDown || S.isDown) {
      this.setVelocityY(400);
    }

    if (Phaser.Input.Keyboard.JustDown(C)) {
      this.knife = this.scene.physics.add.sprite(this.x, this.y, 'fire_extra1', 13);
      if (this.flipX) {
        this.knife.setVelocityX(-500);
      }
      if (!this.flipX) {
        this.knife.setVelocityX(500);
      }
    }
  }
}
