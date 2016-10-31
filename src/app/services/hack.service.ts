import { Injectable } from '@angular/core';

@Injectable()
export class HackService {
  isWaiting: boolean = null;
  startTime: number;
  endTime: number;
  constructor() {}
  isLoaded( data, interval ) {
    this.startClock();
    if (data === null) {
      this.endClock();
      clearInterval(interval);
    } else if (data.length) {
      this.endClock();
      clearInterval(interval);
    }
  }
  startClock() {
    if (this.isWaiting === null) {
      this.startTime = Date.now();
      this.isWaiting = true;
    }
  }
  endClock() {
    this.endTime = Date.now();
    this.isWaiting = null;
    let totalTime = (this.endTime - this.startTime)/1000;
    console.log(`The data loaded in about ${totalTime} seconds.`);
  }
}
