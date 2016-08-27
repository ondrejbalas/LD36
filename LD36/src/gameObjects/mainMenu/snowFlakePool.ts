class SnowflakePool {
    private snowflakes: Array<Snowflake> = [];

    constructor(private game: Phaser.Game, private flakes: number, private angle: number, private angleVariation: number, private minSpeed: number, private maxSpeed: number) {
        for (var i = 0; i < flakes; i++) {
            var newFlake = new Snowflake(game, Util.randInt(3, 7));
            this.resetSnowflake(newFlake, true);
            this.snowflakes.push(newFlake);
        }
    }

    private snowflakeUpdateFrameSkip : number = 0;
    public update(): void {
        this.snowflakeUpdateFrameSkip++;

        for (var i = this.snowflakeUpdateFrameSkip % 20; i < this.snowflakes.length; i+=20) {
            var s = this.snowflakes[i];
            if (s.y > this.game.height || (s.x < 0 && s.heading < 0) || (s.x > this.game.width && s.heading > 0)) {
                this.resetSnowflake(s, false);
            }
        }
    }

    private resetSnowflake(snowflake: Snowflake, isNew: boolean): void {
        // We want the snowflake to fall off the screen vertically near the screen edge (so we don't have many off-screen flakes)
        var endX = Util.randInt(-40, this.game.width + 40);

        // Set the snowflake's heading
        snowflake.heading = Util.randRange(this.angle - this.angleVariation, this.angle + this.angleVariation);
        snowflake.speed = Util.randRange(this.minSpeed, this.maxSpeed);

        // Set the snowflake's position so that given its heading it lands at endX
        var startX = endX - Math.tan(snowflake.heading) * this.game.height;

        if (isNew) {
            snowflake.y = Util.randInt(0, this.game.height);
            snowflake.x = startX + (snowflake.y / this.game.height) * (endX - startX);
        } else {
            snowflake.y = 0;
            snowflake.x = startX;
        }

        snowflake.body.velocity.y = snowflake.speed * Math.cos(snowflake.heading);
        snowflake.body.velocity.x = snowflake.speed * Math.sin(snowflake.heading);
    }
}