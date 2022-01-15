console.log("Hello World");
class StopWatch {
    constructor() {
        this.startTime = 0;
        this.endTime = 0;
    }
    start() {
        this.startTime = new Date().getTime();
    }
    stop() {
        this.endTime = new Date().getTime();
    }
    getElapsedTime() {
        return this.endTime - this.startTime;
    }
}
const stopWatch = new StopWatch();