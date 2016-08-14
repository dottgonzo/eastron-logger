import * as async from "async";
import * as Promise from "bluebird";

import Eastron from 'modbus-eastron';

let rpj = require("request-promise-json");



interface EastronDevice {
    dev?: string;
    hub?: string;
    baud: number;
    id: number;
    uid?: string;
    model: string;
}




export default class {
    devices: EastronDevice[];
    validTime: boolean;
    checkTime: boolean;
    loopTime: number;
    loopVar: any;
    last: any

    constructor(disps: EastronDevice[]) {
        this.devices = disps;
        this.validTime = false;
    }

    loopStop() {
        if (this.loopVar) {
            clearInterval(this.loopVar)
        } else {
            console.error("not exists")
        }
    }

    loopStart(options: { interval?: number; checkDate?: boolean, done?: Function }) {

        const _this = this

        if (!_this.loopVar) {

            console.log("starting")

            if (!options.interval) options.interval = 300000;

            function loopBoot() {

                _this.loopVar = setInterval(function () {
                    _this.data().then(function (answers: any[]) {
                        if (options.done) {
                            options.done(answers)
                        }
                    }).catch(function (err) {
                        console.warn(err)
                    })
                }, options.interval);

            }


            if (_this.checkTime && options.checkDate && _this.validTime) {

                loopBoot()

            } else {

                if (!_this.checkTime) {
                    _this.checkTime = true;
                    _this.checkDate();
                    console.warn("checkTime")
                    setTimeout(() => {
                        _this.loopStart(options)
                    }, 5000)
                } else {
                    console.warn("waiting for correct time")
                    setTimeout(() => {
                        _this.loopStart(options)
                    }, 3000)
                }
            }
        } else {
            console.error("exists")
        }
    }

    data() {
        let disps = this.devices
        return new Promise(function (resolve, reject) {


            const answers = [];

            async.eachSeries(disps, function (iterator, cb) {

                    Eastron(iterator).then((a: any) => { // active flag is needed
                        a.working = true;
                        answers.push(a)
                        cb()
                    }).catch((err) => {
                        answers.push({
                            working: false,
                            _id: iterator.uid,
                            uid: iterator.uid,
                            unixTime: 0
                        })
                        console.error('err', err);
                        cb()
                    })

            }, function (err) {
                if (err) {
                    console.log(err)
                    reject(err)
                } else {
                    resolve(answers)
                }
            })
        })
    }
    checkDate() {
        let that = this;
        function checkRemote() {
            rpj.get("https://io.kernel.online/date").then(function (date) {

                console.log(date);

                if (new Date().getTime() > (date.unixtime - 90000)) {
                    console.log("time is valid from now");
                    that.validTime = true;
                } else {
                    checkRemote();
                }

            }).catch(function (err) {
                console.log(err);
                checkRemote();
            });
        }

        checkRemote();
    }
}