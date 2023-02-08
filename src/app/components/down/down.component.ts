import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-down',
  templateUrl: './down.component.html',
  styleUrls: ['./down.component.scss']
})

export class DownComponent {
  constructor(
    private counterService: CounterService,
  ) { }

  decrement() {
    this.counterService.decrement();
  }
}
