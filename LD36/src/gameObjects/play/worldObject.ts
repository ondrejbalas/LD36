abstract class WorldObject extends Phaser.Sprite {
    constructor(game: Phaser.Game, world: World, spriteName: string) {
        super(game, , world.screenY(this), 'sprites', spriteName);
    }
}