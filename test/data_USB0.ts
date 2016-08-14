
import logger from '../index'

import * as chai from "chai";

const expect = chai.expect;

let Logger: logger;

before(() => {
    Logger = new logger([{ baud: 2400, id: 1, dev: "/dev/ttyUSB0", model: 'SDM120CT' },{ baud: 2400, id: 1, dev: "/dev/ttyUSB0", model: 'SDM120CT' }])
})



describe("main test", function () {
    this.timeout(50000);

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