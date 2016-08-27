var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LD36;
(function (LD36) {
    var Client;
    (function (Client) {
        var Player = (function (_super) {
            __extends(Player, _super);
            function Player(game, x, y) {
                _super.call(this, game, x, y, 'sprites', 'Player.png');
                this.speed = 333;
                this.anchor.setTo(0.5);
                game.add.existing(this);
                game.physics.enable(this);
                this.body.collideWorldBounds = true;
                this.body.setCircle(20);
            }
            Player.prototype.update = function () {
                this.body.velocity.x = 0;
                this.body.velocity.y = 0;
                if (this.game.input.keyboard.isDown(Phaser.Keyboard.A)) {
                    this.body.velocity.x = -this.speed;
                }
                else if (this.game.input.keyboard.isDown(Phaser.Keyboard.D)) {
                    this.body.velocity.x = this.speed;
                }
                if (this.game.input.keyboard.isDown(Phaser.Keyboard.W)) {
                    this.body.velocity.y = -this.speed;
                }
                else if (this.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
                    this.body.velocity.y = this.speed;
                }
                if (this.body.velocity.x != 0 && this.body.velocity.y != 0) {
                    this.body.velocity.x *= Math.SQRT1_2;
                    this.body.velocity.y *= Math.SQRT1_2;
                }
                var cursor = new Phaser.Point(this.game.input.activePointer.x, this.game.input.activePointer.y);
                this.body.rotation = cursor.angle(this.body, true) - 90;
            };
            return Player;
        }(Phaser.Sprite));
        Client.Player = Player;
    })(Client = LD36.Client || (LD36.Client = {}));
})(LD36 || (LD36 = {}));
