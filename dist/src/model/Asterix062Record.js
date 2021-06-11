"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asterix062Record = void 0;
const AsterixRecord_1 = require("./AsterixRecord");
const ToAsterix062Convertor_1 = require("../convertor/ToAsterix062Convertor");
class Asterix062Record extends AsterixRecord_1.AsterixRecord {
    getBuffer() {
        return ToAsterix062Convertor_1.ToAsterix062Convertor.toBuffer(this);
    }
}
exports.Asterix062Record = Asterix062Record;
//# sourceMappingURL=Asterix062Record.js.map