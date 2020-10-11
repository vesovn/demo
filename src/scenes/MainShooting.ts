import { Enemy } from '../enemies/Enemy';
import { EnemyTopDown } from '../enemies/enemyTypes/EnemyTopDown';
import { Player } from './Player/Player';
import { PlayerPlatformer } from './Player/PlayerTypes/PlayerPlatformer';
import { PlayerTopDown } from './Player/PlayerTypes/PlayerTopDown';

export class MainShooting extends Phaser.Scene {
  private cursorShoot: Phaser.Physics.Arcade.Sprite;
  private player: Player;
  private enemy1: EnemyTopDown;
  private enemy2: EnemyTopDown;
  private enemy3: EnemyTopDown;
  private enemy4: EnemyTopDown;
  private enemy5: EnemyTopDown;
  private enemy6: EnemyTopDown;
  private enemies: Phaser.Physics.Arcade.Group;
  private enemy: Enemy;
  private shootColider: Phaser.Physics.Arcade.Collider;
  private controls;
  constructor() {
    super('MainShooting');
  }

  init(data) {
    console.log('init', data);
  }

  preload() {
    this.load.image('platform', 'assets/images/platform.png');
    this.load.image('cursor', 'assets/images/cursor.png');
  }
  create(data) {
    this.cameras.main.shake(500);
    let ground = this.add.sprite(0, 800, 'platform');
    ground.setOrigin(0, 0);
    let ground1 = this.add.sprite(ground.width, 800, 'platform');
    ground1.setOrigin(0, 0);
    let ground2 = this.add.sprite(ground.width * 2, 800, 'platform');
    ground2.setOrigin(0, 0);
    let ground3 = this.add.sprite(ground.width * 3, 800, 'platform');
    ground3.setOrigin(0, 0);
    let platform1 = this.add.sprite(200, 500, 'platform');
    let platform2 = this.add.sprite(1200, 650, 'platform');
    let platform3 = this.add.sprite(700, 300, 'platform');
    let ground4 = this.add.sprite(1600, 800, 'platform');
    ground4.setOrigin(0, 0);
    let ground6 = this.add.sprite(ground.width + 1600, 800, 'platform');
    ground6.setOrigin(0, 0);
    let ground7 = this.add.sprite(ground.width * 2 + 1600, 800, 'platform');
    ground7.setOrigin(0, 0);
    let ground8 = this.add.sprite(ground.width * 3 + 1600, 800, 'platform');
    ground8.setOrigin(0, 0);
    let platform4 = this.add.sprite(200 + 1600, 500, 'platform');
    let platform5 = this.add.sprite(1200 + 1600, 650, 'platform');
    let platform6 = this.add.sprite(700 + 1600, 300, 'platform');
    this.input.on(
      'pointerdown',
      (pointer) => {
        this.input.mouse.requestPointerLock();
      },
      this
    );
    this.enemy1 = new EnemyTopDown(this, platform1.x - 150, platform1.y - 100, platform1);
    this.enemy2 = new EnemyTopDown(this, platform2.x - 150, platform2.y - 100, platform2);
    this.enemy3 = new EnemyTopDown(this, platform3.x - 150, platform3.y - 100, platform3);
    this.enemy4 = new EnemyTopDown(this, platform4.x - 150, platform4.y - 100, platform4);
    this.enemy5 = new EnemyTopDown(this, platform5.x - 150, platform5.y - 100, platform5);
    this.enemy6 = new EnemyTopDown(this, platform6.x - 150, platform6.y - 100, platform6);

    this.enemies = this.physics.add.group();
    this.enemies.add(this.enemy1);
    this.enemies.add(this.enemy2);
    this.enemies.add(this.enemy3);
    this.enemies.add(this.enemy4);
    this.enemies.add(this.enemy5);
    this.enemies.add(this.enemy6);
    this.cursorMovement();

    this.cursorShoot = this.physics.add.sprite(data.x, data.y, 'cursor');
    this.cursorShoot.setSize(256, 256);
    this.cursorShoot.setScale(0.05);

    let platforms = this.physics.add.staticGroup();
    platforms.add(ground);
    platforms.add(ground1);
    platforms.add(ground2);
    platforms.add(ground3);
    platforms.add(ground4);
    platforms.add(ground6);
    platforms.add(ground7);
    platforms.add(platform1);
    platforms.add(platform2);
    platforms.add(platform3);
    platforms.add(platform4);
    platforms.add(platform5);
    platforms.add(platform6);

    this.input.on('pointerdown', () => {
      this.shootColider = this.physics.add.collider(this.cursorShoot, this.enemies, this.hitEnemy);
    });
    this.shootColider = this.physics.add.collider(this.cursorShoot, this.enemies, this.hitEnemy);
    this.input.on('pointerup', () => {
      this.physics.world.removeCollider(this.shootColider);
    });
    this.cameras.main.setBounds(0, 0, 1600 * 2, 900);

    this.cameraControlls();
  }
  public hitEnemy(weapon: Phaser.Physics.Arcade.Sprite, enemy: PlayerTopDown) {
    enemy.active = false;

    enemy.setVisible(false);
    enemy.destroy(true);
  }

  public cursorMovement() {
    this.input.on(
      'pointermove',
      function (pointer) {
        if (this.input.mouse.locked) {
          this.cursorShoot.x += pointer.movementX;
          this.cursorShoot.y += pointer.movementY;
        }
      },
      this
    );
  }

  public cameraControlls() {
    let cursors = this.input.keyboard.createCursorKeys();
    let A = this.input.keyboard.addKey('A');
    let D = this.input.keyboard.addKey('D');
    let controlConfig = {
      camera: this.cameras.main,
      left: A,
      right: D,
      up: cursors.up,
      down: cursors.down,
      speed: 0.5,
    };

    this.controls = new Phaser.Cameras.Controls.FixedKeyControl(controlConfig);
  }
  update(time, delta) {
    this.controls.update(delta);
  }
}
