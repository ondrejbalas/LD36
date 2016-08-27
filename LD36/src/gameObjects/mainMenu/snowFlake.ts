class Snowflake extends Phaser.Sprite {
    constructor(game: Phaser.Game, size: number) {
        super(game, -100, -100, SnowflakeFactory.create(game, size));
    }
}