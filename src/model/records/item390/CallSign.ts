import {AsterixDataItem} from "../../AsterixDataItem";
import {AsterixFSpec} from "../../AsterixFSpec";
import {FlightRelatedDataFSpec} from "../FlightPlanRelatedData";

export class CallSign extends AsterixDataItem {

    public constructor(private readonly callsign: string) {
        super();
    }

    getFSpec(): AsterixFSpec {
        return FlightRelatedDataFSpec.CSN;
    }

    getBuffer(): Buffer {
        return Buffer.from(this.callsign);
    }

}