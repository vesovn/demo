import { Player } from './Player/Player';
import { PlayerPlatformer } from './Player/PlayerTypes/PlayerPlatformer';
import { EnemyPlatformer } from '../enemies/enemyTypes/EnemyPlatformer';
import { Enemy } from '../enemies/Enemy';
import { Coin } from '../collectibles/Coin';

export class MainPlatformer extends Phaser.Scene {
  private playerPlatformer: PlayerPlatformer;
  private player: Player;
  private enemy1: EnemyPlatformer;
  private enemy2: EnemyPlatformer;
  private enemy3: EnemyPlatformer;
  private enemy4: EnemyPlatformer;
  private enemy5: EnemyPlatformer;
  private enemy6: EnemyPlatformer;
  private enemies: Phaser.Physics.Arcade.Group;
  private enemy: Enemy;
  private coins: Phaser.Physics.Arcade.Group;
  constructor() {
    super('MainPlatformer');
  }
  preload() {
    this.load.atlas('Leaf', 'assets/images/Leaf.png', 'assets/images/Leaf.json');
    this.load.atlas('Player', 'assets/images/Player.png', 'assets/images/Player.json');
    this.load.image('background', 'assets/images/BackGround.jpg');
    this.load.image('platform', 'assets/images/platform.png');
    this.load.image('hero', 'assets/images/attack-01.png');
    this.load.image('goldenCoin', 'assets/images/goldenCoin.png');
    this.load.spritesheet('knife', 'assets/images/throwingKnife.png', { frameWidth: 128, frameHeight: 96 });
  }
  create() {
    let BackGround = this.add.sprite(700,450,'background');
    let BackGround1 = this.add.sprite(2100,450,'background');
    let BackGround2 = this.add.sprite(3500,450,'background');
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

    let leaf = this.add.sprite(100, -20, 'Leaf', 'leaf2');
    leaf.setOrigin(0, 0);

    this.player = new Player(500, 400);

    this.playerPlatformer = new PlayerPlatformer(this, this.player.getX(), this.player.getY());

    this.enemy1 = new EnemyPlatformer(this, platform1.x - 150, platform1.y - 100, platform1);
    this.enemy2 = new EnemyPlatformer(this, platform2.x - 150, platform2.y - 100, platform2);
    this.enemy3 = new EnemyPlatformer(this, platform3.x - 150, platform3.y - 100, platform3);
    this.enemy4 = new EnemyPlatformer(this, platform4.x - 150, platform4.y - 100, platform4);
    this.enemy5 = new EnemyPlatformer(this, platform5.x - 150, platform5.y - 100, platform5);
    this.enemy6 = new EnemyPlatformer(this, platform6.x - 150, platform6.y - 100, platform6);

    this.enemies = this.physics.add.group();
    this.enemies.add(this.enemy1);
    this.enemies.add(this.enemy2);
    this.enemies.add(this.enemy3);
    this.enemies.add(this.enemy4);
    this.enemies.add(this.enemy5);
    this.enemies.add(this.enemy6);

    let coin1 = new Coin(this, platform1.x - 150, platform1.y - 100);
    let coin2 = new Coin(this, platform1.x, platform1.y - 100);
    let coin3 = new Coin(this, platform1.x + 150, platform1.y - 100);

    let coin4 = new Coin(this, platform2.x - 150, platform2.y - 100);
    let coin5 = new Coin(this, platform2.x, platform2.y - 100);
    let coin6 = new Coin(this, platform2.x + 150, platform2.y - 100);

    let coin7 = new Coin(this, platform3.x - 150, platform3.y - 100);
    let coin8 = new Coin(this, platform3.x, platform3.y - 100);
    let coin9 = new Coin(this, platform3.x + 150, platform3.y - 100);

    let coin10 = new Coin(this, platform4.x - 150, platform4.y - 100);
    let coin11 = new Coin(this, platform4.x, platform4.y - 100);
    let coin12 = new Coin(this, platform4.x + 150, platform4.y - 100);

    let coin13 = new Coin(this, platform5.x - 150, platform5.y - 100);
    let coin14 = new Coin(this, platform5.x, platform5.y - 100);
    let coin15 = new Coin(this, platform5.x + 150, platform5.y - 100);

    let coin16 = new Coin(this, platform6.x - 150, platform6.y - 100);
    let coin17 = new Coin(this, platform6.x, platform6.y - 100);
    let coin18 = new Coin(this, platform6.x + 150, platform6.y - 100);

    this.coins = this.physics.add.group();
    this.coins.add(coin1);
    this.coins.add(coin2);
    this.coins.add(coin3);
    this.coins.add(coin4);
    this.coins.add(coin5);
    this.coins.add(coin6);
    this.coins.add(coin7);
    this.coins.add(coin8);
    this.coins.add(coin9);
    this.coins.add(coin10);
    this.coins.add(coin11);
    this.coins.add(coin12);
    this.coins.add(coin13);
    this.coins.add(coin14);
    this.coins.add(coin15);
    this.coins.add(coin16);
    this.coins.add(coin17);
    this.coins.add(coin18);
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

    this.physics.add.collider(this.playerPlatformer, platforms);
    this.physics.add.collider(this.playerPlatformer, this.coins, this.collectCoin);
    this.physics.add.collider(this.enemies, platforms);

    this.collisions();
    this.time.delayedCall(20000, () => {
      this.cameras.main.shake();
      this.time.delayedCall(500, () => {
        this.scene.start('MainTopDown', { x: this.playerPlatformer.x, y: this.playerPlatformer.y });
      });
    });
    this.cameras.main.startFollow(this.playerPlatformer);
    this.cameras.main.setBounds(0, 0, 1600 * 2, 900);
  }

  public collectCoin(player: PlayerPlatformer, coin: Coin) {
    console.log('new coin');
    coin.active = false;

    coin.setVisible(false);
    coin.destroy(true);
  }
  public changeScene() {
    this.scene.start('MainTopDown');
  }

  public collisions() {
    if (this.playerPlatformer.getWeapon() != null) {
      this.physics.add.collider(this.playerPlatformer.getWeapon(), this.enemies, this.hitEnemy, null, this);
    }
  }

  public hitEnemy(weapon: Phaser.Physics.Arcade.Sprite, enemy: EnemyPlatformer) {
    weapon.destroy(true);
    enemy.active = false;

    enemy.setVisible(false);
    enemy.destroy(true);
  }
  update() {
    this.collisions();
    this.playerPlatformer.setVelocityX(0);
    this.playerPlatformer.controlls();
  }
}
