import { AsterixRecord } from "../AsterixRecord";
import { Cat062FSpec } from "../Cat062FSpec";

export class SicSac extends AsterixRecord {

    public constructor(private readonly sic: number,
                       private readonly sac: number) {
        super();
    }

    protected getFSpec(): Cat062FSpec {
        return Cat062FSpec.I062_010;
    }

    public getRecord(): Buffer {
        var sic = Buffer.alloc(1);
        var sac = Buffer.alloc(1);
        sac.writeUInt8(this.sic) // sic
        sic.writeUInt8(this.sac); // sac

        return Buffer.concat([sic, sac]);
    }

}