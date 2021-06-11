import { AsterixDataItem } from "../AsterixDataItem";
import { Cat062FSpec } from "../Cat062FSpec";
import {AsterixFSpec} from "../AsterixFSpec";
import {FspecUtil} from "../../convertor/FspecUtil";
import {AsterixRecord} from "../AsterixRecord";
import {CallSign} from "./item390/CallSign";
import {ToAsterix062Convertor} from "../../convertor/ToAsterix062Convertor";

export class FlightPlanRelatedData extends AsterixRecord {

    public callSign: CallSign;

    public constructor() {
        super();
    }

    public getFSpec(): Cat062FSpec {
        return Cat062FSpec.I062_390;
    }

    getBuffer(): Buffer {
        let len: Buffer = Buffer.alloc(2);
        let buffers: Buffer = this.getRecords()
            .map(record => record.getBuffer())
            .reduce((b1, b2) => Buffer.concat([b1, b2]));

        let allFrns: number[] = this.getRecords()
            .map(record => record.getFSpec().getFRN());

        let buff = Buffer.concat([FspecUtil.fspecs(allFrns), buffers]);

        return buff;
    }

}

export class FlightRelatedDataFSpec extends AsterixFSpec {

    // Callsign
    public static CSN: FlightRelatedDataFSpec = new FlightRelatedDataFSpec(1);

}
