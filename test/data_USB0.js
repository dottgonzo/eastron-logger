"use strict";
var index_1 = require('../index');
var chai = require("chai");
var expect = chai.expect;
var Logger;
var sensors = [
    { baud: 2400, id: 1, dev: "/dev/ttyUSB0", model: 'SDM120CT', className: 'consumption', uid: 'sdrgrgrh' },
    { baud: 2400, id: 1, dev: "/dev/ttyUSB0", model: 'SDM120CT', className: 'production', uid: 'sdrgw3452rgrh' }
];
before(function () {
    Logger = new index_1.default(sensors);
});
describe("main test", function () {
    this.timeout(90000);
    it("should return data", function (done) {
        Logger.data().then(function (answer) {
            var a = answer[0];
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
            done();
        }).catch(function (err) {
            done(Error(err));
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZGF0YV9VU0IwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxzQkFBbUIsVUFFbkIsQ0FBQyxDQUY0QjtBQUU3QixJQUFZLElBQUksV0FBTSxNQUFNLENBQUMsQ0FBQTtBQUU3QixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBRTNCLElBQUksTUFBYyxDQUFDO0FBRW5CLElBQU0sT0FBTyxHQUFDO0lBQ1YsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUMsR0FBRyxFQUFDLFVBQVUsRUFBRTtJQUN0RyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBQyxHQUFHLEVBQUMsZUFBZSxFQUFFO0NBQzdHLENBQUE7QUFHRCxNQUFNLENBQUM7SUFDSCxNQUFNLEdBQUcsSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDaEMsQ0FBQyxDQUFDLENBQUE7QUFJRixRQUFRLENBQUMsV0FBVyxFQUFFO0lBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFcEIsRUFBRSxDQUFDLG9CQUFvQixFQUFFLFVBQVUsSUFBSTtRQUVuQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBVztZQUUzQixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFbEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUUvQixNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMzRCxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBR2hDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBR3pDLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkMsTUFBTSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUs1QyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRVosTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUUvQixNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMzRCxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBR2hDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBR3pDLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkMsTUFBTSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUcxQyxJQUFJLEVBQUUsQ0FBQTtRQUNWLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUc7WUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDcEIsQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QvZGF0YV9VU0IwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4uL2luZGV4J1xuXG5pbXBvcnQgKiBhcyBjaGFpIGZyb20gXCJjaGFpXCI7XG5cbmNvbnN0IGV4cGVjdCA9IGNoYWkuZXhwZWN0O1xuXG5sZXQgTG9nZ2VyOiBsb2dnZXI7XG5cbmNvbnN0IHNlbnNvcnM9W1xuICAgIHsgYmF1ZDogMjQwMCwgaWQ6IDEsIGRldjogXCIvZGV2L3R0eVVTQjBcIiwgbW9kZWw6ICdTRE0xMjBDVCcsIGNsYXNzTmFtZTogJ2NvbnN1bXB0aW9uJyx1aWQ6J3NkcmdyZ3JoJyB9LCBcbiAgICB7IGJhdWQ6IDI0MDAsIGlkOiAxLCBkZXY6IFwiL2Rldi90dHlVU0IwXCIsIG1vZGVsOiAnU0RNMTIwQ1QnLCBjbGFzc05hbWU6ICdwcm9kdWN0aW9uJyx1aWQ6J3Nkcmd3MzQ1MnJncmgnIH1cbl1cblxuXG5iZWZvcmUoKCkgPT4ge1xuICAgIExvZ2dlciA9IG5ldyBsb2dnZXIoc2Vuc29ycylcbn0pXG5cblxuXG5kZXNjcmliZShcIm1haW4gdGVzdFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy50aW1lb3V0KDkwMDAwKTtcblxuICAgIGl0KFwic2hvdWxkIHJldHVybiBkYXRhXCIsIGZ1bmN0aW9uIChkb25lKSB7XG5cbiAgICAgICAgTG9nZ2VyLmRhdGEoKS50aGVuKChhbnN3ZXI6IGFueSkgPT4ge1xuXG4gICAgICAgICAgICBsZXQgYSA9IGFuc3dlclswXTtcblxuICAgICAgICAgICAgZXhwZWN0KGEpLnRvLmJlLmFuKCdPYmplY3QnKTtcbiAgICAgICAgICAgIGV4cGVjdChhLmFjdGl2ZSkudG8uYmUuYW4oJ09iamVjdCcpO1xuICAgICAgICAgICAgZXhwZWN0KGEucmVhY3RpdmUpLnRvLmJlLmFuKCdPYmplY3QnKTtcbiAgICAgICAgICAgIGV4cGVjdChhLnZvbHRhZ2UpLnRvLmJlLmEoJ251bWJlcicpO1xuICAgICAgICAgICAgZXhwZWN0KGEuY3VycmVudCkudG8uYmUuYSgnbnVtYmVyJyk7XG4gICAgICAgICAgICBleHBlY3QoYS5wb3dlcikudG8uYmUuYSgnbnVtYmVyJyk7XG4gICAgICAgICAgICBleHBlY3QoYS5mYWN0b3IpLnRvLmJlLmEoJ251bWJlcicpO1xuICAgICAgICAgICAgZXhwZWN0KGEucGhhc2VBbmdsZSkudG8uYmUuYSgnbnVtYmVyJyk7XG4gICAgICAgICAgICBleHBlY3QoYS5oeikudG8uYmUuYSgnbnVtYmVyJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGV4cGVjdChhLl9pZCkudG8uYmUuYSgnc3RyaW5nJyk7XG4gICAgICAgICAgICBleHBlY3QoYS5faWQuc3BsaXQoJ18nKVswXSkudG8uYmUuZXEoc2Vuc29yc1swXS5jbGFzc05hbWUpO1xuICAgICAgICAgICAgZXhwZWN0KGEudWlkKS50by5iZS5hKCdzdHJpbmcnKTtcblxuXG4gICAgICAgICAgICBleHBlY3QoYS5hY3RpdmUuaW1wb3J0KS50by5iZS5hKCdudW1iZXInKTtcbiAgICAgICAgICAgIGV4cGVjdChhLmFjdGl2ZS5leHBvcnQpLnRvLmJlLmEoJ251bWJlcicpO1xuICAgICAgICAgICAgZXhwZWN0KGEuYWN0aXZlLnRvdGFsKS50by5iZS5hKCdudW1iZXInKTtcbiAgICAgICAgICAgIGV4cGVjdChhLmFjdGl2ZS5pbXBvcnQpLnRvLmJlLmEoJ251bWJlcicpO1xuICAgICAgICAgICAgZXhwZWN0KGEuYWN0aXZlLmV4cG9ydCkudG8uYmUuYSgnbnVtYmVyJyk7XG4gICAgICAgICAgICBleHBlY3QoYS5hY3RpdmUudG90YWwpLnRvLmJlLmEoJ251bWJlcicpO1xuXG5cbiAgICAgICAgICAgIGV4cGVjdChhLmFwaVZlcnNpb24pLnRvLmJlLmEoJ3N0cmluZycpO1xuICAgICAgICAgICAgZXhwZWN0KGEudW5peFRpbWVzdGFtcCkudG8uYmUuYSgnbnVtYmVyJyk7XG5cblxuXG5cbiAgICAgICAgICBhID0gYW5zd2VyWzFdO1xuXG4gICAgICAgICAgICBleHBlY3QoYSkudG8uYmUuYW4oJ09iamVjdCcpO1xuICAgICAgICAgICAgZXhwZWN0KGEuYWN0aXZlKS50by5iZS5hbignT2JqZWN0Jyk7XG4gICAgICAgICAgICBleHBlY3QoYS5yZWFjdGl2ZSkudG8uYmUuYW4oJ09iamVjdCcpO1xuICAgICAgICAgICAgZXhwZWN0KGEudm9sdGFnZSkudG8uYmUuYSgnbnVtYmVyJyk7XG4gICAgICAgICAgICBleHBlY3QoYS5jdXJyZW50KS50by5iZS5hKCdudW1iZXInKTtcbiAgICAgICAgICAgIGV4cGVjdChhLnBvd2VyKS50by5iZS5hKCdudW1iZXInKTtcbiAgICAgICAgICAgIGV4cGVjdChhLmZhY3RvcikudG8uYmUuYSgnbnVtYmVyJyk7XG4gICAgICAgICAgICBleHBlY3QoYS5waGFzZUFuZ2xlKS50by5iZS5hKCdudW1iZXInKTtcbiAgICAgICAgICAgIGV4cGVjdChhLmh6KS50by5iZS5hKCdudW1iZXInKTtcblxuICAgICAgICAgICAgZXhwZWN0KGEuX2lkKS50by5iZS5hKCdzdHJpbmcnKTtcbiAgICAgICAgICAgIGV4cGVjdChhLl9pZC5zcGxpdCgnXycpWzBdKS50by5iZS5lcShzZW5zb3JzWzFdLmNsYXNzTmFtZSk7XG4gICAgICAgICAgICBleHBlY3QoYS51aWQpLnRvLmJlLmEoJ3N0cmluZycpO1xuXG5cbiAgICAgICAgICAgIGV4cGVjdChhLmFjdGl2ZS5pbXBvcnQpLnRvLmJlLmEoJ251bWJlcicpO1xuICAgICAgICAgICAgZXhwZWN0KGEuYWN0aXZlLmV4cG9ydCkudG8uYmUuYSgnbnVtYmVyJyk7XG4gICAgICAgICAgICBleHBlY3QoYS5hY3RpdmUudG90YWwpLnRvLmJlLmEoJ251bWJlcicpO1xuICAgICAgICAgICAgZXhwZWN0KGEuYWN0aXZlLmltcG9ydCkudG8uYmUuYSgnbnVtYmVyJyk7XG4gICAgICAgICAgICBleHBlY3QoYS5hY3RpdmUuZXhwb3J0KS50by5iZS5hKCdudW1iZXInKTtcbiAgICAgICAgICAgIGV4cGVjdChhLmFjdGl2ZS50b3RhbCkudG8uYmUuYSgnbnVtYmVyJyk7XG5cblxuICAgICAgICAgICAgZXhwZWN0KGEuYXBpVmVyc2lvbikudG8uYmUuYSgnc3RyaW5nJyk7XG4gICAgICAgICAgICBleHBlY3QoYS51bml4VGltZXN0YW1wKS50by5iZS5hKCdudW1iZXInKTtcblxuXG4gICAgICAgICAgICBkb25lKClcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgZG9uZShFcnJvcihlcnIpKVxuICAgICAgICB9KVxuXG4gICAgfSk7XG5cbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
