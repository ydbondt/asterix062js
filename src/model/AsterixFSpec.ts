export abstract class AsterixFSpec {

    private frn: number;

    private constructor(frn: number) {
        this.frn = frn;
    }

    public getBuffer(): Buffer {
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