module LD36.Client {

    export class GameEngine extends Phaser.Game {

        constructor() {
            super(1024, 800, Phaser.AUTO, 'content', null);

            this.state.add('Boot', Boot, false);
            this.state.add('Preloader', Preloader, false);
            this.state.add('MainMenu', MainMenu, false);
            this.state.add('Game', LD36.Client.Game, false);

            this.state.start('Boot');

        }
    }
}

window.onload = () => {
    var game = new LD36.Client.GameEngine();
};