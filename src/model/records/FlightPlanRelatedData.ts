import { AsterixDataItem } from "../AsterixDataItem";
import { Cat062FSpec } from "../Cat062FSpec";
import {AsterixFSpec} from "../AsterixFSpec";
import {FspecUtil} from "../../convertor/FspecUtil";

export class FlightPlanRelatedData extends AsterixDataItem {

    private callSign: string;

    public constructor() {
        super();
    }

    public getFSpec(): Cat062FSpec {
        return Cat062FSpec.I062_390;
    }

    public getBuffer(): Buffer {
        //return Buffer.concat([FspecUtil.fspecs([FlightRelatedDataFSpec.CALLSIGN.getFRN()]),
    }

}

export class FlightRelatedDataFSpec extends AsterixFSpec {

    public static CALLSIGN: FlightRelatedDataFSpec = new FlightRelatedDataFSpec(2);

}
