import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})

export class ResetComponent {
  birthdate: string = '';

  constructor(
    private counterService: CounterService,
  ) { }

  validate() {
    if (this.counterService.validateBirthDate(this.birthdate)) {
      this.counterService.resetCounter();
    }
  }
}
