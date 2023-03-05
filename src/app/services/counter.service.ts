import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as dayjs from 'dayjs';
import * as isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
dayjs.extend(isSameOrBefore);

@Injectable({
  providedIn: 'root'
})

export class CounterService {
  private readonly localStorage__counter: string = 'counter';
  private readonly ageMin__toReset: number = 18;
  private readonly nbActions__toUpdateX: number = 30;

  private counterSubject: BehaviorSubject<number> = new BehaviorSubject<number>(parseInt(localStorage.getItem(this.localStorage__counter) || '0'));
  private x = 1;
  private nbActions = 0;

  public counter$ = this.counterSubject.asObservable();

  increment() {
    this.actionUpOrDownTriggered();
    this.setCurrentValue(this.counterSubject.getValue() + this.x);
  }

  decrement() {
    this.actionUpOrDownTriggered();
    this.setCurrentValue(this.counterSubject.getValue() - this.x);
  }

  resetCounter() {
    this.setCurrentValue(0);
  }

  validateBirthDate(date: string) {
    const now = dayjs();
    const birthdate = dayjs(date);
    return (now.diff(birthdate, 'years') >= this.ageMin__toReset);
  }

  private actionUpOrDownTriggered() {
    this.nbActions++;
    if (this.nbActions === this.nbActions__toUpdateX) {
      this.nbActions = 0;
      this.x = this.x * 2;
    }
  }

  private setCurrentValue(currentCounter : number) {
    localStorage.setItem(this.localStorage__counter, JSON.stringify(currentCounter))
    this.counterSubject.next(currentCounter)
  }
}
