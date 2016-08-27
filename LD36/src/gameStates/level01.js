var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LD36;
(function (LD36) {
    var Client;
    (function (Client) {
        var Level01 = (function (_super) {
            __extends(Level01, _super);
            function Level01() {
                _super.apply(this, arguments);
            }
            Level01.prototype.create = function () {
                this.physics.startSystem(Phaser.Physics.ARCADE);
                this.background = this.add.sprite(0, 0, 'level01-sprites', 'background');
                this.player = new Client.Player(this.game, this.world.centerX, this.world.centerX);
                this.player.anchor.setTo(0, 5);
                this.game.debug.text("Use Right and Left arrow keys to move the bat", 0, this.world.height, "red");
            };
            return Level01;
        }(Phaser.State));
        Client.Level01 = Level01;
    })(Client = LD36.Client || (LD36.Client = {}));
})(LD36 || (LD36 = {}));
