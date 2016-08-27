class SnowflakePool {
    private snowflakes: Array<Snowflake> = [];

    private minAngle: number;
    private maxAngle: number;
    private minSnowflakeStartX: number; // the lowest X a snowflake can start at and still be able to reach the screen, given the maximum rightward angle it can have
    private maxSnowflakeStartX: number; // the highest X a snowflake can start at and still be able to reach the screen, given the maximum leftward angle it can have

    constructor(private game: Phaser.Game, private flakes: number, private angle: number, private angleVariation: number, private minSpeed: number, private maxSpeed: number) {
        this.minAngle = this.angle - this.angleVariation;
        this.maxAngle = this.angle + this.angleVariation;
        var minAngleHorizontalMaximum = Math.tan(this.minAngle) * this.game.height;
        var maxAngleHorizontalMaximum = Math.tan(this.maxAngle) * this.game.height;
        this.minSnowflakeStartX = Math.min(0, 0 - minAngleHorizontalMaximum);
        this.maxSnowflakeStartX = Math.max(this.game.width, this.game.width + maxAngleHorizontalMaximum);

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
        // Set the snowflake's heading
        snowflake.heading = Util.randRange(this.angle - this.angleVariation, this.angle + this.angleVariation);
        snowflake.speed = Util.randRange(this.minSpeed, this.maxSpeed);

        var startX = Util.randInt(this.minSnowflakeStartX, this.maxSnowflakeStartX);

        if (isNew) {
            var endX = startX + (startX * Math.tan(snowflake.heading));
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