import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})

export class CounterService {
  private currentCounter: number = parseInt(localStorage.getItem('counter') || '0');
  private counterSubject = new BehaviorSubject<number>(this.currentCounter);
  private x: number = 1;
  private nbActions = 0;

  public counter$ = this.counterSubject.asObservable();

  constructor() {
  }

  increment() {
    this.actionUpOrDownTriggered();
    this.setCurrentValue(this.currentCounter + this.x);
  }

  decrement() {
    this.actionUpOrDownTriggered();
    this.setCurrentValue(this.currentCounter - this.x);
  }

  resetCounter() {
    this.setCurrentValue(0);
  }

  validateBirthDate(date: string) {
    const now = moment();
    const birthdate = moment(date);
    return (now.diff(birthdate, 'years') >= 18);
  }

  private actionUpOrDownTriggered() {
    this.nbActions++;
    if (this.nbActions === 30) {
      this.nbActions = 0;
      this.x = this.x * 2;
    }
  }

  private setCurrentValue(currentCounter : number){
    this.currentCounter = currentCounter;
    localStorage.setItem('counter', JSON.stringify(this.currentCounter))
    this.counterSubject.next(this.currentCounter)
  }
}
