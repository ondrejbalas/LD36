class SnowflakeFactory {
    public static create(game: Phaser.Game, size: number): Phaser.BitmapData {
        var key = 'snowflake.' + size;
        var factory = () => {
            var data = game.add.bitmapData(size, size, key, true);
            data.fill(255, 255, 255, 1);
            return data;
        }
        return ImageFactory.getOrAdd(game, key, factory);
    }
}