"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackNumber = void 0;
const AsterixDataItem_1 = require("../AsterixDataItem");
const Cat062FSpec_1 = require("../Cat062FSpec");
class TrackNumber extends AsterixDataItem_1.AsterixDataItem {
    constructor(trackNumber) {
        super();
        this.trackNumber = trackNumber;
    }
    getFSpec() {
        return Cat062FSpec_1.Cat062FSpec.I062_040;
    }
    getBuffer() {
        var tracknumber = Buffer.alloc(2);
        tracknumber.writeUInt16BE(this.trackNumber);
        return tracknumber;
    }
}
exports.TrackNumber = TrackNumber;
//# sourceMappingURL=TrackNumber.js.map