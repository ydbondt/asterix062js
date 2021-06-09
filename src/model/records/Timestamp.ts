import { AsterixRecord } from "../AsterixRecord";
import { Cat062FSpec } from "../Cat062FSpec";

export class Timestamp extends AsterixRecord {

    public constructor(private readonly timestamp: Date) {
        super();
    }

    public getFSpec(): Cat062FSpec {
        return Cat062FSpec.I062_070;
    }

    public getRecord(): Buffer {
        var hours = Buffer.alloc(1);
        hours.writeUInt8(this.timestamp.getHours());

        var minutes = Buffer.alloc(1);
        minutes.writeUInt8(this.timestamp.getHours());

        var seconds = Buffer.alloc(1);
        seconds.writeUInt8(this.timestamp.getSeconds());

        return Buffer.concat([hours, minutes, seconds]);
    }


}
