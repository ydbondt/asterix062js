"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservedExpansionField = void 0;
const AsterixDataItem_1 = require("../AsterixDataItem");
const Cat062FSpec_1 = require("../Cat062FSpec");
class ReservedExpansionField extends AsterixDataItem_1.AsterixDataItem {
    constructor() {
        super();
    }
    getFSpec() {
        return Cat062FSpec_1.Cat062FSpec.RE;
    }
    getBuffer() {
        var lat = Buffer.from("545454");
        var len = Buffer.alloc(1);
        len.writeUInt8(lat.length + 1);
        return Buffer.concat([len, lat]);
    }
}
exports.ReservedExpansionField = ReservedExpansionField;
//# sourceMappingURL=ReservedSpecialPurpose.js.map