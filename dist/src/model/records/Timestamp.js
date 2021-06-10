"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timestamp = void 0;
const AsterixDataItem_1 = require("../AsterixDataItem");
const Cat062FSpec_1 = require("../Cat062FSpec");
class Timestamp extends AsterixDataItem_1.AsterixDataItem {
    constructor(timestamp) {
        super();
        this.timestamp = timestamp;
    }
    getFSpec() {
        return Cat062FSpec_1.Cat062FSpec.I062_070;
    }
    getBuffer() {
        var hours = Buffer.alloc(1);
        hours.writeUInt8(this.timestamp.getHours());
        var minutes = Buffer.alloc(1);
        minutes.writeUInt8(this.timestamp.getHours());
        var seconds = Buffer.alloc(1);
        seconds.writeUInt8(this.timestamp.getSeconds());
        return Buffer.concat([hours, minutes, seconds]);
    }
}
exports.Timestamp = Timestamp;
//# sourceMappingURL=Timestamp.js.map