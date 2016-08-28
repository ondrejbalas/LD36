module LD36.Client {

    export class MainMenu extends Phaser.State {
        
        pool: SnowflakePool;
        logo: Phaser.Sprite;

        create() {
            GameEngine.playMusic('music_menu');

            this.stage.setBackgroundColor(0x181828);

            //var bgdata = RectangleImageFactory.create(this.game, this.game.width, this.game.height, 24, 24, 32);
            //this.background = this.add.sprite(0, 0, bgdata);

            this.pool = new SnowflakePool(this.game, 250, 0.29, 0.18, 160, 520);



            //this.background = this.add.sprite(0, 0, 'titlepage');
            //this.background.alpha = 0;

            this.logo = this.add.sprite(this.world.centerX, -300, 'sprites', 'Title.png');
            this.logo.anchor.setTo(0.5);
            this.add.tween(this.logo).to({ y: 220 }, 2000, Phaser.Easing.Elastic.Out, true, 500);

            //this.add.tween(this.background).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true);
            //this.add.tween(this.logo).to({ y: 220 }, 2000, Phaser.Easing.Elastic.Out, true, 500);

            //this.game.debug.text("Click the logo to start the game", 0, this.world.height, "red");

            this.input.onDown.addOnce(this.fadeOut, this);
        }

        update() {
            this.pool.update();
        }

        fadeOut() {
            this.add.audio('game_over', 1, false).play();
            GameEngine.stopMusic();
            
            this.add.tween(this.stage.backgroundColor).to({ r: 0, g: 0, b: 0 }, 500, Phaser.Easing.Linear.None, true);
            this.add.tween(this.logo).to({ y: -800 }, 800, Phaser.Easing.Linear.None, true);
            var tween = this.add.tween(this.pool).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startGame, this);
        }

        startGame() {
            this.game.state.start('Game', true, false);
        }

    }

}