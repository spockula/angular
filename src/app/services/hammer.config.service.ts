import { Injectable } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';


@Injectable()
export class MyHammerGestureConfig extends HammerGestureConfig  {
  overrides = <any> {
      'tap': { threshold: 100, posTreshold: 10, time: 2000 }, // default 2, 10
      'pan': { threshold: 60, posTreshold: 2 } // default 2, 10
  };
};

