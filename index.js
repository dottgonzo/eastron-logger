"use strict";
var async = require("async");
var Promise = require("bluebird");
var modbus_eastron_1 = require('modbus-eastron');
var rpj = require("request-promise-json");
var default_1 = (function () {
    function default_1(disps) {
        this.devices = disps;
        this.validTime = false;
    }
    default_1.prototype.loopStop = function () {
        if (this.loopVar) {
            clearInterval(this.loopVar);
        }
        else {
            console.error("not exists");
        }
    };
    default_1.prototype.loopStart = function (options) {
        var _this = this;
        if (!_this.loopVar) {
            console.log("starting");
            if (!options.interval)
                options.interval = 300000;
            function loopBoot() {
                _this.loopVar = setInterval(function () {
                    _this.data().then(function (answers) {
                        if (options.done) {
                            options.done(answers);
                        }
                    }).catch(function (err) {
                        console.warn(err);
                    });
                }, options.interval);
            }
            if (_this.checkTime && options.checkDate && _this.validTime) {
                loopBoot();
            }
            else {
                if (!_this.checkTime) {
                    _this.checkTime = true;
                    _this.checkDate();
                    console.warn("checkTime");
                    setTimeout(function () {
                        _this.loopStart(options);
                    }, 5000);
                }
                else {
                    console.warn("waiting for correct time");
                    setTimeout(function () {
                        _this.loopStart(options);
                    }, 3000);
                }
            }
        }
        else {
            console.error("exists");
        }
    };
    default_1.prototype.data = function () {
        console.log('data');
        var disps = this.devices;
        return new Promise(function (resolve, reject) {
            var answers = [];
            async.eachSeries(disps, function (iterator, cb) {
                setTimeout(function () {
                    modbus_eastron_1.default(iterator).then(function (a) {
                        a.working = true;
                        answers.push(a);
                        cb();
                    }).catch(function (err) {
                        answers.push({
                            working: false,
                            _id: iterator.uid,
                            uid: iterator.uid,
                            unixTime: 0
                        });
                        console.error('err', err);
                        cb();
                    });
                }, 2000);
            }, function (err) {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                else {
                    resolve(answers);
                }
            });
        });
    };
    default_1.prototype.checkDate = function () {
        var that = this;
        function checkRemote() {
            rpj.get("https://io.kernel.online/date").then(function (date) {
                console.log(date);
                if (new Date().getTime() > (date.unixtime - 90000)) {
                    console.log("time is valid from now");
                    that.validTime = true;
                }
                else {
                    checkRemote();
                }
            }).catch(function (err) {
                console.log(err);
                checkRemote();
            });
        }
        checkRemote();
    };
    return default_1;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;

//# sourceMappingURL=data:application/json;base64,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QUE7Z0JBQ3BCLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELDZCQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEI7WUFDSSxHQUFHLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtnQkFFeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFbEIsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLFdBQVcsRUFBRSxDQUFDO2dCQUNsQixDQUFDO1lBRUwsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRztnQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsV0FBVyxFQUFFLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQsV0FBVyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FwSUEsQUFvSUMsSUFBQTtBQXBJRDsyQkFvSUMsQ0FBQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFzeW5jIGZyb20gXCJhc3luY1wiO1xuaW1wb3J0ICogYXMgUHJvbWlzZSBmcm9tIFwiYmx1ZWJpcmRcIjtcblxuaW1wb3J0IEVhc3Ryb24gZnJvbSAnbW9kYnVzLWVhc3Ryb24nO1xuXG5sZXQgcnBqID0gcmVxdWlyZShcInJlcXVlc3QtcHJvbWlzZS1qc29uXCIpO1xuXG5cblxuaW50ZXJmYWNlIEVhc3Ryb25EZXZpY2Uge1xuICAgIGRldj86IHN0cmluZztcbiAgICBodWI/OiBzdHJpbmc7XG4gICAgYmF1ZDogbnVtYmVyO1xuICAgIGlkOiBudW1iZXI7XG4gICAgdWlkPzogc3RyaW5nO1xuICAgIG1vZGVsOiBzdHJpbmc7XG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBkZXZpY2VzOiBFYXN0cm9uRGV2aWNlW107XG4gICAgdmFsaWRUaW1lOiBib29sZWFuO1xuICAgIGNoZWNrVGltZTogYm9vbGVhbjtcbiAgICBsb29wVGltZTogbnVtYmVyO1xuICAgIGxvb3BWYXI6IGFueTtcbiAgICBsYXN0OiBhbnlcblxuICAgIGNvbnN0cnVjdG9yKGRpc3BzOiBFYXN0cm9uRGV2aWNlW10pIHtcbiAgICAgICAgdGhpcy5kZXZpY2VzID0gZGlzcHM7XG4gICAgICAgIHRoaXMudmFsaWRUaW1lID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbG9vcFN0b3AoKSB7XG4gICAgICAgIGlmICh0aGlzLmxvb3BWYXIpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5sb29wVmFyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIm5vdCBleGlzdHNcIilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvb3BTdGFydChvcHRpb25zOiB7IGludGVydmFsPzogbnVtYmVyOyBjaGVja0RhdGU/OiBib29sZWFuLCBkb25lPzogRnVuY3Rpb24gfSkge1xuXG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpc1xuXG4gICAgICAgIGlmICghX3RoaXMubG9vcFZhcikge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0aW5nXCIpXG5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5pbnRlcnZhbCkgb3B0aW9ucy5pbnRlcnZhbCA9IDMwMDAwMDtcblxuICAgICAgICAgICAgZnVuY3Rpb24gbG9vcEJvb3QoKSB7XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5sb29wVmFyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5kYXRhKCkudGhlbihmdW5jdGlvbiAoYW5zd2VyczogYW55W10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmRvbmUoYW5zd2VycylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGVycilcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LCBvcHRpb25zLmludGVydmFsKTtcblxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGlmIChfdGhpcy5jaGVja1RpbWUgJiYgb3B0aW9ucy5jaGVja0RhdGUgJiYgX3RoaXMudmFsaWRUaW1lKSB7XG5cbiAgICAgICAgICAgICAgICBsb29wQm9vdCgpXG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIV90aGlzLmNoZWNrVGltZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jaGVja1RpbWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jaGVja0RhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiY2hlY2tUaW1lXCIpXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubG9vcFN0YXJ0KG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMDApXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwid2FpdGluZyBmb3IgY29ycmVjdCB0aW1lXCIpXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubG9vcFN0YXJ0KG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMDApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImV4aXN0c1wiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGEnKVxuICAgICAgICBsZXQgZGlzcHMgPSB0aGlzLmRldmljZXNcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblxuXG4gICAgICAgICAgICBjb25zdCBhbnN3ZXJzID0gW107XG5cbiAgICAgICAgICAgIGFzeW5jLmVhY2hTZXJpZXMoZGlzcHMsIGZ1bmN0aW9uIChpdGVyYXRvciwgY2IpIHtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBFYXN0cm9uKGl0ZXJhdG9yKS50aGVuKChhOiBhbnkpID0+IHsgLy8gYWN0aXZlIGZsYWcgaXMgbmVlZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBhLndvcmtpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2Vycy5wdXNoKGEpXG4gICAgICAgICAgICAgICAgICAgICAgICBjYigpXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2luZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lkOiBpdGVyYXRvci51aWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWlkOiBpdGVyYXRvci51aWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5peFRpbWU6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdlcnInLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2IoKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sIDIwMDApXG5cblxuXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShhbnN3ZXJzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNoZWNrRGF0ZSgpIHtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBmdW5jdGlvbiBjaGVja1JlbW90ZSgpIHtcbiAgICAgICAgICAgIHJwai5nZXQoXCJodHRwczovL2lvLmtlcm5lbC5vbmxpbmUvZGF0ZVwiKS50aGVuKGZ1bmN0aW9uIChkYXRlKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRlKTtcblxuICAgICAgICAgICAgICAgIGlmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSA+IChkYXRlLnVuaXh0aW1lIC0gOTAwMDApKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGltZSBpcyB2YWxpZCBmcm9tIG5vd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC52YWxpZFRpbWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrUmVtb3RlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICBjaGVja1JlbW90ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGVja1JlbW90ZSgpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
