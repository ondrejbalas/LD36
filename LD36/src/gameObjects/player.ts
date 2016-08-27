module LD36.Client {

    export class Player extends Phaser.Sprite {
        private speed: number = 333;


        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y,'sprites', 'Player.png');
            this.anchor.setTo(0.5);
            game.add.existing(this);
            // Physics
            game.physics.enable(this);
            this.body.collideWorldBounds = true;
            this.body.setCircle(20);
        }

        update() {
            this.body.velocity.x = 0;
            this.body.velocity.y = 0;
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.A)) {
                this.body.velocity.x = -this.speed;
            } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.D)) {
                this.body.velocity.x = this.speed;
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.W)) {
                this.body.velocity.y = -this.speed;
            } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
                this.body.velocity.y = this.speed;
            }
        }

    }

}