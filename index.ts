import * as dgram from "dgram";
import { Asterix062Record } from "./src/model/Asterix062Record";
import { PositionWGS84 } from "./src/model/records/PositionWGS84";
import { SicSac } from "./src/model/records/SicSac";
import { Timestamp } from "./src/model/records/Timestamp";
import { TrackNumber } from "./src/model/records/TrackNumber";
import { CNF, FX, MON, MRH, SPI, SRC, TrackStatus } from "./src/model/records/TrackStatus";

let asterixMessage = new Asterix062Record();
asterixMessage.sicSac = new SicSac(241, 6);
asterixMessage.trackNumber = new TrackNumber(123);
asterixMessage.trackStatus = new TrackStatus(MON.MONO_SENSOR,
                                            SPI.SPI_PRESENT,
                                            MRH.GEOMETRIC_ALTITUDE,
                                            SRC.DEFAULT_HEIGHT,
                                            CNF.CONFIRMED_TRACK,
                                            FX.END_OF_DATA_ITEM);

asterixMessage.timestamp = new Timestamp(new Date());
asterixMessage.positionWGS84 = new PositionWGS84(50.917419, 4.115159);


console.log(asterixMessage.getRecords().map(r => r.getFSpec()).map(fspec => fspec.getFRN()));
const client = dgram.createSocket('udp4');
client.connect(33003, 'localhost', () => {
    console.log("Connected !");
    client.send(asterixMessage.toBuffer(), (err:any) => {
        console.log("Message sent ! (err = " + err + ")");
        client.close();
    });
});