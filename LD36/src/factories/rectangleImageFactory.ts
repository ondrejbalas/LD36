class RectangleImageFactory {
    public static create(game: Phaser.Game, width: number, height: number,  r: number, g: number, b: number, a: number = 1): Phaser.BitmapData {
        var key = 'rect.' + width + '.' + height + "." + r + "." + g + "." + b + "." + a;
        var factory = () => {
            var data = game.add.bitmapData(width, height, key, true);
            data.fill(r, g, b, a);
            return data;
        }
        return ImageFactory.getOrAdd(game, key, factory);
    }
}