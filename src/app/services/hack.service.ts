import { Injectable } from '@angular/core';

@Injectable()
export class HackService {
  constructor() {}
  isLoaded( data, interval ) {
    console.log('waiting for data: ', data);
    if (data === null) {
      clearInterval(interval);
    } else if (data.length) {
      clearInterval(interval);
    }
  }
}
