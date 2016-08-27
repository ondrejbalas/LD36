﻿module LD36.Client {

    export class Game extends Phaser.State {

        music: Phaser.Sound;
        player: Player;

        create() {
            this.physics.startSystem(Phaser.Physics.ARCADE);

            this.music = this.add.audio('music_main_bg', 1, true).play();

            this.stage.setBackgroundColor(0x181828);

            this.player = new Player(this.game, this.world.centerX, this.world.centerX);

            //this.game.debug.text("Use Right and Left arrow keys to move the man", 0, this.world.height, "red");
        }

    }

}