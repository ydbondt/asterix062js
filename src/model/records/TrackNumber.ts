import { AsterixRecord } from "../AsterixRecord";
import { Cat062FSpec } from "../Cat062FSpec";

export class TrackNumber extends AsterixRecord {

    public constructor(private readonly trackNumber: number) {
        super();
    }

    protected getFSpec(): Cat062FSpec {
        return Cat062FSpec.I062_040;
    }

    public getRecord(): Buffer {
        var tracknumber = Buffer.alloc(2);
        tracknumber.writeUInt16BE(this.trackNumber);

        return tracknumber;
    }


}