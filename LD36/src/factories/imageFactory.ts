class ImageFactory {
    public static getOrAdd(game: Phaser.Game, key: string, factory: () => Phaser.BitmapData): Phaser.BitmapData {
        if (game.cache.checkBitmapDataKey(key)) {
            return game.cache.getBitmapData(key);
        } else {
            return factory();
        }
    }
}