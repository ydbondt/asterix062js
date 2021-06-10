import { AsterixDataItem } from "../AsterixDataItem";
import { Cat062FSpec } from "../Cat062FSpec";

const LAT_LONG_WGS_PRECISION_4_BYTE_P25 = 180 / Math.pow(2, 25);

export class PositionWGS84 extends AsterixDataItem {


    public constructor(private readonly lat: number,
                       private readonly lon: number) {
        super();
    }

    public getFSpec(): Cat062FSpec {
        return Cat062FSpec.I062_105;
    }

    public getBuffer(): Buffer {
        var lat = Buffer.alloc(4);

        lat.writeUInt32BE(parseInt((this.lat / LAT_LONG_WGS_PRECISION_4_BYTE_P25 + "")));

        var lon = Buffer.alloc(4);
        lon.writeUInt32BE(parseInt((this.lon / LAT_LONG_WGS_PRECISION_4_BYTE_P25 + "")));

        return Buffer.concat([lat, lon]);
    }

}
