module LD36.Client {

    export class GameEngine extends Phaser.Game {
        private musicOn = false;
        public firstState = "MainMenu"; // Change to MainMenu to enable menu

        public static engine: GameEngine;

        private wasMDown = false;

        private music: Phaser.Sound;

        constructor() {
            super(1024, 800, Phaser.AUTO, 'content', null);

            this.state.add('Boot', Boot, false);
            this.state.add('Preloader', Preloader, false);
            this.state.add('MainMenu', MainMenu, false);
            this.state.add('Game', LD36.Client.Game, false);

            this.state.start('Boot');

            GameEngine.engine = this;
        }

        update(time: number): void {
            super.update(time);

            if (this.input.keyboard.isDown(Phaser.Keyboard.M)) {
                if (!this.wasMDown) {
                    this.wasMDown = true;
                    GameEngine.engine.musicOn = !GameEngine.engine.musicOn;
                    if (GameEngine.engine.musicOn) {
                        GameEngine.engine.music.play();
                        this.debug.text("Music on", 100, 40, 'red');
                    } else {
                        GameEngine.engine.music.stop();
                        this.debug.text("Music off", 100, 40, 'red');
                    }
                }
            } else {
                this.wasMDown = false;
            }
        }

        public static playMusic(key: string): void {
            GameEngine.engine.music = GameEngine.engine.add.audio(key, 1, true);
            if (GameEngine.engine.musicOn) {
                GameEngine.engine.music.play();
            }
        }

        public static stopMusic(): void {
            GameEngine.engine.music.stop();
        }
    }
}

window.onload = () => {
    var game = new LD36.Client.GameEngine();
};