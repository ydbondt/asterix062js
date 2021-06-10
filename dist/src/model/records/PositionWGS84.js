"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionWGS84 = void 0;
const AsterixDataItem_1 = require("../AsterixDataItem");
const Cat062FSpec_1 = require("../Cat062FSpec");
const LAT_LONG_WGS_PRECISION_4_BYTE_P25 = 180 / Math.pow(2, 25);
class PositionWGS84 extends AsterixDataItem_1.AsterixDataItem {
    constructor(lat, lon) {
        super();
        this.lat = lat;
        this.lon = lon;
    }
    getFSpec() {
        return Cat062FSpec_1.Cat062FSpec.I062_105;
    }
    getBuffer() {
        var lat = Buffer.alloc(4);
        lat.writeUInt32BE(parseInt((this.lat / LAT_LONG_WGS_PRECISION_4_BYTE_P25 + "")));
        var lon = Buffer.alloc(4);
        lon.writeUInt32BE(parseInt((this.lon / LAT_LONG_WGS_PRECISION_4_BYTE_P25 + "")));
        return Buffer.concat([lat, lon]);
    }
}
exports.PositionWGS84 = PositionWGS84;
//# sourceMappingURL=PositionWGS84.js.map