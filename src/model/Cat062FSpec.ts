export class Cat062FSpec {

    static readonly I062_010: Cat062FSpec = new Cat062FSpec(1);
    static readonly I062_070: Cat062FSpec = new Cat062FSpec(4);
    static readonly I062_105: Cat062FSpec = new Cat062FSpec(5);
    static readonly I062_040: Cat062FSpec = new Cat062FSpec(12);
    static readonly I062_080: Cat062FSpec = new Cat062FSpec(13);

    private frn: number;

    private constructor(frn: number) {
        this.frn = frn;
    }

    public getFSpec(): Buffer {
        var octet = Math.ceil(this.frn / 7);
        var fspec = Buffer.alloc(octet);

        for (var i=0;i<octet-1;i++) {
            fspec[i] = 0b1;
        }

        let shift = 8 - (this.frn % 7);
        fspec[fspec.length-1] = 1 << shift;

        return fspec;
    }

    /**
     * @returns Field Reference Number
     */
    public getFRN(): number {
        return this.frn;
    }

}