"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dgram_1 = __importDefault(require("dgram"));
var cat = Buffer.alloc(1);
cat.writeUInt8(62);
var fspec_sicsac = Buffer.alloc(1);
fspec_sicsac[0] = 1 << 7;
var fspec_tracknumber = Buffer.alloc(2);
fspec_tracknumber[0] = 0b1;
fspec_tracknumber[1] = 1 << 3;
var fspec_tracknumber = Buffer.alloc(2);
fspec_tracknumber[0] = 0b1;
fspec_tracknumber[1] = 1 << 3;
// I062/010
var sic = Buffer.alloc(1);
var sac = Buffer.alloc(1);
sac.writeUInt8(8); // sic
sic.writeUInt8(4); // sac
var tracknumber = Buffer.alloc(2);
tracknumber.writeUInt16BE(0883);
var len = Buffer.alloc(2);
len.writeUInt8(cat.length + fspec_sicsac.length + sic.length + sac.length + 2 + fspec_tracknumber.length + tracknumber.length);
var msg = Buffer.concat([cat, len, fspec_sicsac, sac, sic, fspec_tracknumber, tracknumber]);
const client = dgram_1.default.createSocket('udp4');
client.connect(33003, 'localhost', (err) => {
    console.log("Connected ! (err = " + err + ")");
    client.send(msg, (err) => {
        console.log("Message sent ! (err = " + err + ")");
        client.close();
    });
});
//# sourceMappingURL=tmp.js.map