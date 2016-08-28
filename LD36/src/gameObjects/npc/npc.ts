abstract class Npc extends Phaser.Sprite
{
    constructor(game: Phaser.Game, x: number, y: number, spriteName: string) {
        super(game, x, y, 'sprites', spriteName);
    }
}