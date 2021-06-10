import { AsterixDataItem } from "../AsterixDataItem";
import { Cat062FSpec } from "../Cat062FSpec";

export class TrackNumber extends AsterixDataItem {

    public constructor(private readonly trackNumber: number) {
        super();
    }

    public getFSpec(): Cat062FSpec {
        return Cat062FSpec.I062_040;
    }

    public getBuffer(): Buffer {
        var tracknumber = Buffer.alloc(2);
        tracknumber.writeUInt16BE(this.trackNumber);

        return tracknumber;
    }

}
