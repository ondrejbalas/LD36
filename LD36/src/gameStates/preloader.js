var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LD36;
(function (LD36) {
    var Client;
    (function (Client) {
        var Preloader = (function (_super) {
            __extends(Preloader, _super);
            function Preloader() {
                _super.apply(this, arguments);
            }
            Preloader.prototype.preload = function () {
                this.loaderText = this.game.add.text(this.world.centerX, 200, "Loading...", { font: "18px Arial", fill: "#A9A91111", align: "center" });
                this.loaderText.anchor.setTo(0.5);
                this.load.audio('music_menu', './assets/music/menu.ogg', true);
                this.load.audio('music_main_bg', './assets/music/main_bg.ogg', true);
                this.load.audio('blip', './assets/sfx/blip.wav', true);
                this.load.audio('game_over', './assets/sfx/game_over.wav', true);
                this.load.audio('hit_hurt', './assets/sfx/hit_hurt.wav', true);
                this.load.audio('monster_dead', './assets/sfx/monster_dead.wav', true);
                this.load.audio('player_died', './assets/sfx/player_died.wav', true);
                this.load.audio('swing_miss', './assets/sfx/swing_miss.wav', true);
            };
            Preloader.prototype.create = function () {
                var tween = this.add.tween(this.loaderText).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
                tween.onComplete.add(this.startMainMenu, this);
            };
            Preloader.prototype.startMainMenu = function () {
                this.game.state.start('MainMenu', true, false);
            };
            return Preloader;
        }(Phaser.State));
        Client.Preloader = Preloader;
    })(Client = LD36.Client || (LD36.Client = {}));
})(LD36 || (LD36 = {}));
