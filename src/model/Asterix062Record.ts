import {SicSac} from "./records/SicSac";
import {TrackNumber} from "./records/TrackNumber";
import {Timestamp} from "./records/Timestamp";
import {TrackStatus} from "./records/TrackStatus";
import {PositionWGS84} from "./records/PositionWGS84";
import {ReservedExpansionField} from "./records/ReservedExpansionField";
import {AsterixRecord} from "./AsterixRecord";
import {FlightPlanRelatedData} from "./records/FlightPlanRelatedData";
import {ToAsterix062Convertor} from "../convertor/ToAsterix062Convertor";

export class Asterix062Record extends AsterixRecord {

    public sicSac: SicSac;
    public trackNumber: TrackNumber;
    public timestamp: Timestamp;
    public trackStatus: TrackStatus;
    public positionWGS84: PositionWGS84;
    public flightPlanRelatedData: FlightPlanRelatedData;

    getBuffer(): Buffer {
        return ToAsterix062Convertor.toBuffer(this);
    }
}