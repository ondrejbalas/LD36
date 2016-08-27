module LD36.Client {

    export class Game extends Phaser.State {

        music: Phaser.Sound;
        player: Player;

        create() {
            this.physics.startSystem(Phaser.Physics.ARCADE);

            this.music = this.add.audio('main_bg', 1, true);
            this.stage.setBackgroundColor(0x181828);

            this.player = new Player(this.game, this.world.centerX, this.world.centerX);
            //this.player.anchor.setTo(0, 5);

            this.game.debug.text("Use Right and Left arrow keys to move the man", 0, this.world.height, "red");
        }

    }

}