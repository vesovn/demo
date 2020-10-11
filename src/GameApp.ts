import 'phaser';
import { MainPlatformer } from './scenes/MainPlatformer';
import { MainShooting } from './scenes/MainShooting';
import { MainTopDown } from './scenes/MainTopDown';

export class GameApp extends Phaser.Game {
  public static gameConfig: Phaser.Types.Core.GameConfig = null;

  constructor(config: Phaser.Types.Core.GameConfig) {
    GameApp.gameConfig = config;

    if (GameApp.gameConfig == null) {
      GameApp.gameConfig = {
        type: Phaser.AUTO,
        parent: 'content',
        backgroundColor: '#000000',
        width: 1600,
        height: 900,
        physics: {
          default: 'arcade',
          arcade: {
            debug: true,
          },
        },
        scene: [MainPlatformer, MainTopDown, MainShooting],
      };
    }

    super(GameApp.gameConfig);
  }
}

new GameApp(null);
