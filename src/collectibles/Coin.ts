export class Coin extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'goldenCoin');
    this.scene.physics.world.enable(this);

    this.scene.add.existing(this);
  }
}
