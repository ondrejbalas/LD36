module LD36.Client {

    export class Preloader extends Phaser.State {
        loaderText: Phaser.Text;

        preload() {
            
            this.loaderText = this.game.add.text(this.world.centerX, 200, "Loading...",
                { font: "18px Arial", fill: "#A9A91111", align: "center" });
            this.loaderText.anchor.setTo(0.5);

            //this.load.image('titlepage', './assets/ui/titlePage.png');
            //this.load.image('logo', './assets/ui/gameLogo.png');

            this.load.audio('music_menu', './assets/music/menu.ogg', true);
            this.load.audio('music_main_bg', './assets/music/main_bg.ogg', true);
            this.load.audio('blip', './assets/sfx/blip.wav', true);
            this.load.audio('game_over', './assets/sfx/game_over.wav', true);
            this.load.audio('hit_hurt', './assets/sfx/hit_hurt.wav', true);
            this.load.audio('monster_dead', './assets/sfx/monster_dead.wav', true);
            this.load.audio('player_died', './assets/sfx/player_died.wav', true);
            this.load.audio('swing_miss', './assets/sfx/swing_miss.wav', true);

            //this.load.atlasJSONHash('level01-sprites', './assets/sprites/level01-sprites.png', './assets/sprites/level01-sprites.json');
        }

        create() {
            var tween = this.add.tween(this.loaderText).to({ alpha: 0 }, 2000,
                Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        }

        startMainMenu() {
            this.game.state.start('MainMenu', true, false);
        }

    }

}