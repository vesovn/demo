import { Enemy } from '../Enemy';

export class EnemyPlatformer extends Phaser.Physics.Arcade.Sprite {
  private enemy: Enemy;
  private platform: Phaser.Physics.Arcade.StaticBody;

  constructor(scene: Phaser.Scene, x: number, y: number, platform) {
    super(scene, x, y, 'hero');
    if (this != undefined) {
      this.platform = platform;
      scene.physics.world.enable(this);
      this.setScale(3);
      this.setGravityY(700);
      this.setCollideWorldBounds(true);
      this.enemyMove();
      this.flipX = false;
      this.scene.time.addEvent({
        callback: this.shoot,
        repeat: -1,
        delay: 2000,
        callbackScope: this,
      });
      this.scene.add.existing(this);
    }
  }

  public enemyMove() {
    this.scene.add.tween({
      targets: this,
      x: this.x + (this.platform.width - this.width),
      yoyo: true,
      flipX: true,
      duration: 2000,
      repeat: -1,
    });
  }

  public shoot() {
    if (this.active) {
      let knife = this.scene.physics.add.sprite(this.x, this.y, 'knife', 13);
      if (this.flipX) {
        knife.setVelocityX(-500);
      }
      if (!this.flipX) {
        knife.setVelocityX(500);
      }
    }
  }

  public enemyDestroy() {
    this.destroy(true);
  }
}
