import * as dgram from "dgram";
import { AsterixDataBlock } from "./src/model/AsterixDataBlock";
import { SicSac } from "./src/model/records/SicSac";
import { TrackNumber } from "./src/model/records/TrackNumber";

let asterixMessage = new AsterixDataBlock();
asterixMessage.sicSac = new SicSac(1, 2);
asterixMessage.trackNumber = new TrackNumber(123);

console.log(asterixMessage.toBuffer());
const client = dgram.createSocket('udp4');
client.connect(33003, 'localhost', () => {
    console.log("Connected !");
    client.send(asterixMessage.toBuffer(), (err:any) => {
        console.log("Message sent ! (err = " + err + ")");
        client.close();
    });
});