class Snowflake extends Phaser.Sprite {
    public heading: number; // Straight down is 0. Negative is to the left, and positive is to the right. Angle measued in radians.
    public speed: number;

    constructor(game: Phaser.Game, size: number) {
        super(game, game.width, game.height + 100, SnowflakeFactory.create(game, size));
        game.add.existing(this);

        // Physics
        game.physics.enable(this);
        this.body.collideWorldBounds = false;
    }

    update(): void {
    }
}