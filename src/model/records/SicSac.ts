import { AsterixDataItem } from "../AsterixDataItem";
import { Cat062FSpec } from "../Cat062FSpec";

export class SicSac extends AsterixDataItem {

    public constructor(private readonly sic: number,
                       private readonly sac: number) {
        super();
    }

    public getFSpec(): Cat062FSpec {
        return Cat062FSpec.I062_010;
    }

    public getBuffer(): Buffer {
        var sic = Buffer.alloc(1);
        var sac = Buffer.alloc(1);
        sic.writeUInt8(this.sic) // sic
        sac.writeUInt8(this.sac); // sac

        return Buffer.concat([sac, sic]);
    }

}
