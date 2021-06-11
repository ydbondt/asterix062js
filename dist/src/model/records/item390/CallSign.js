"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallSign = void 0;
const AsterixDataItem_1 = require("../../AsterixDataItem");
const FlightPlanRelatedData_1 = require("../FlightPlanRelatedData");
class CallSign extends AsterixDataItem_1.AsterixDataItem {
    constructor(callsign) {
        super();
        this.callsign = callsign;
    }
    getFSpec() {
        return FlightPlanRelatedData_1.FlightRelatedDataFSpec.CSN;
    }
    getBuffer() {
        return Buffer.from(this.callsign);
    }
}
exports.CallSign = CallSign;
//# sourceMappingURL=CallSign.js.map