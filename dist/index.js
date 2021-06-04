"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dgram = __importStar(require("dgram"));
const AsterixDataBlock_1 = require("./src/model/AsterixDataBlock");
const SicSac_1 = require("./src/model/records/SicSac");
const TrackNumber_1 = require("./src/model/records/TrackNumber");
let asterixMessage = new AsterixDataBlock_1.AsterixDataBlock();
asterixMessage.sicSac = new SicSac_1.SicSac(1, 2);
asterixMessage.trackNumber = new TrackNumber_1.TrackNumber(123);
console.log(asterixMessage.toBuffer());
const client = dgram.createSocket('udp4');
client.connect(33003, 'localhost', () => {
    console.log("Connected !");
    client.send(asterixMessage.toBuffer(), (err) => {
        console.log("Message sent ! (err = " + err + ")");
        client.close();
    });
});
//# sourceMappingURL=index.js.map