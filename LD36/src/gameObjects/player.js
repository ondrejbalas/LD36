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
                _super.call(this, game, x, y, 'level01-sprites', 1);
                this.anchor.setTo(0.5);
                this.animations.add('fly', [0, 1], 5, true);
                game.add.existing(this);
                game.physics.enable(this);
                this.body.collideWorldBounds = true;
                this.body.setCircle(20);
            }
            Player.prototype.update = function () {
                this.body.velocity.x = 0;
                if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                    this.body.velocity.x = -50;
                    this.animations.play('fly');
                    if (this.scale.x === -1) {
                        this.scale.x = 1;
                    }
                }
                else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                    this.body.velocity.x = 50;
                    this.animations.play('fly');
                    if (this.scale.x === 1) {
                        this.scale.x = -1;
                    }
                }
                else {
                    this.animations.frame = 0;
                }
            };
            return Player;
        }(Phaser.Sprite));
        Client.Player = Player;
    })(Client = LD36.Client || (LD36.Client = {}));
})(LD36 || (LD36 = {}));
