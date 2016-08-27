class Util {
    public static randInt(min: number, max: number): number
    {
        return Math.floor(min + Math.random() * (max - min));
    }

    public static randRange(min: number, max: number): number {
        return min + Math.random() * (max - min);
    }
}