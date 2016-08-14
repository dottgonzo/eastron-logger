
import logger from '../index'

import * as chai from "chai";

const expect = chai.expect;

let Logger: logger;

const sensors=[
    { baud: 2400, id: 1, dev: "/dev/ttyUSB0", model: 'SDM120CT', className: 'consumption',uid:'sdrgrgrh' }, 
    { baud: 2400, id: 1, dev: "/dev/ttyUSB0", model: 'SDM120CT', className: 'production',uid:'sdrgw3452rgrh' }
]


before(() => {
    Logger = new logger(sensors)
})



describe("main test", function () {
    this.timeout(90000);

    it("should return data", function (done) {

        Logger.data().then((answer: any) => {

            let a = answer[0];

            expect(a).to.be.an('Object');
            expect(a.active).to.be.an('Object');
            expect(a.reactive).to.be.an('Object');
            expect(a.voltage).to.be.a('number');
            expect(a.current).to.be.a('number');
            expect(a.power).to.be.a('number');
            expect(a.factor).to.be.a('number');
            expect(a.phaseAngle).to.be.a('number');
            expect(a.hz).to.be.a('number');
            
            expect(a._id).to.be.a('string');
            expect(a._id.split('_')[0]).to.be.eq(sensors[0].className);
            expect(a.uid).to.be.a('string');


            expect(a.active.import).to.be.a('number');
            expect(a.active.export).to.be.a('number');
            expect(a.active.total).to.be.a('number');
            expect(a.active.import).to.be.a('number');
            expect(a.active.export).to.be.a('number');
            expect(a.active.total).to.be.a('number');


            expect(a.apiVersion).to.be.a('string');
            expect(a.unixTimestamp).to.be.a('number');




          a = answer[1];

            expect(a).to.be.an('Object');
            expect(a.active).to.be.an('Object');
            expect(a.reactive).to.be.an('Object');
            expect(a.voltage).to.be.a('number');
            expect(a.current).to.be.a('number');
            expect(a.power).to.be.a('number');
            expect(a.factor).to.be.a('number');
            expect(a.phaseAngle).to.be.a('number');
            expect(a.hz).to.be.a('number');

            expect(a._id).to.be.a('string');
            expect(a._id.split('_')[0]).to.be.eq(sensors[1].className);
            expect(a.uid).to.be.a('string');


            expect(a.active.import).to.be.a('number');
            expect(a.active.export).to.be.a('number');
            expect(a.active.total).to.be.a('number');
            expect(a.active.import).to.be.a('number');
            expect(a.active.export).to.be.a('number');
            expect(a.active.total).to.be.a('number');


            expect(a.apiVersion).to.be.a('string');
            expect(a.unixTimestamp).to.be.a('number');


            done()
        }).catch((err) => {
            done(Error(err))
        })

    });

});