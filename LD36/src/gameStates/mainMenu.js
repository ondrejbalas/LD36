var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LD36;
(function (LD36) {
    var Client;
    (function (Client) {
        var MainMenu = (function (_super) {
            __extends(MainMenu, _super);
            function MainMenu() {
                _super.apply(this, arguments);
            }
            MainMenu.prototype.create = function () {
                this.music = this.add.audio('music_menu', 1, true).play();
                this.stage.setBackgroundColor(0x181828);
                this.pool = new SnowflakePool(this.game, 250, 0.29, 0.18, 160, 520);
                this.logo = this.add.sprite(this.world.centerX, -300, 'sprites', 'Title.png');
                this.logo.anchor.setTo(0.5);
                this.add.tween(this.logo).to({ y: 220 }, 2000, Phaser.Easing.Elastic.Out, true, 500);
                this.input.onDown.addOnce(this.fadeOut, this);
            };
            MainMenu.prototype.update = function () {
                this.pool.update();
            };
            MainMenu.prototype.fadeOut = function () {
                this.add.audio('game_over', 1, false).play();
                this.music.stop();
                this.add.tween(this.stage.backgroundColor).to({ r: 0, g: 0, b: 0 }, 500, Phaser.Easing.Linear.None, true);
                this.add.tween(this.logo).to({ y: -800 }, 800, Phaser.Easing.Linear.None, true);
                var tween = this.add.tween(this.pool).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
                tween.onComplete.add(this.startGame, this);
            };
            MainMenu.prototype.startGame = function () {
                this.game.state.start('Game', true, false);
            };
            return MainMenu;
        }(Phaser.State));
        Client.MainMenu = MainMenu;
    })(Client = LD36.Client || (LD36.Client = {}));
})(LD36 || (LD36 = {}));
