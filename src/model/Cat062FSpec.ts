export class Cat062FSpec {

    static readonly I062_010: Cat062FSpec = new Cat062FSpec(7);
    static readonly I062_040: Cat062FSpec = new Cat062FSpec(11);

    private fspec: number;

    private constructor(fspec: number) {
        this.fspec = fspec;
    }

    public getFSpec(): Buffer {
        var octet = Math.round(this.fspec / 7);
        var fspec = Buffer.alloc(octet);

        console.log("fspec = " + this.fspec);
        console.log("octet = " + octet);

        for (var i=0;i<=octet;i++) {
            fspec[i] = 0b1;
        }

        let shift = (octet*7) - this.fspec;
        fspec[fspec.length-1] = 1 << (shift > 0 ? shift : 1);

        console.log("fspec = 1 << " + (shift > 0 ? shift : 1));

        return fspec;
    }
}