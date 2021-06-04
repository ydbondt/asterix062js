"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackNumber = void 0;
const AsterixRecord_1 = require("../AsterixRecord");
const Cat062FSpec_1 = require("../Cat062FSpec");
class TrackNumber extends AsterixRecord_1.AsterixRecord {
    constructor(trackNumber) {
        super();
        this.trackNumber = trackNumber;
    }
    getFSpec() {
        return Cat062FSpec_1.Cat062FSpec.I062_040;
    }
    getRecord() {
        var tracknumber = Buffer.alloc(2);
        tracknumber.writeUInt16BE(this.trackNumber);
        return tracknumber;
    }
}
exports.TrackNumber = TrackNumber;
//# sourceMappingURL=TrackNumber.js.map