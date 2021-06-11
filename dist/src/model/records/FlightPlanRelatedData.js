"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightRelatedDataFSpec = exports.FlightPlanRelatedData = void 0;
const Cat062FSpec_1 = require("../Cat062FSpec");
const AsterixFSpec_1 = require("../AsterixFSpec");
const FspecUtil_1 = require("../../convertor/FspecUtil");
const AsterixRecord_1 = require("../AsterixRecord");
class FlightPlanRelatedData extends AsterixRecord_1.AsterixRecord {
    constructor() {
        super();
    }
    getFSpec() {
        return Cat062FSpec_1.Cat062FSpec.I062_390;
    }
    getBuffer() {
        let len = Buffer.alloc(2);
        let buffers = this.getRecords()
            .map(record => record.getBuffer())
            .reduce((b1, b2) => Buffer.concat([b1, b2]));
        let allFrns = this.getRecords()
            .map(record => record.getFSpec().getFRN());
        let buff = Buffer.concat([FspecUtil_1.FspecUtil.fspecs(allFrns), buffers]);
        return buff;
    }
}
exports.FlightPlanRelatedData = FlightPlanRelatedData;
class FlightRelatedDataFSpec extends AsterixFSpec_1.AsterixFSpec {
}
exports.FlightRelatedDataFSpec = FlightRelatedDataFSpec;
// Callsign
FlightRelatedDataFSpec.CSN = new FlightRelatedDataFSpec(1);
//# sourceMappingURL=FlightPlanRelatedData.js.map