import { Component, OnInit } from '@angular/core';
import { CounterService } from './services/counter.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  counter$: Observable<number> = new Observable();

  constructor(
    private counterService: CounterService) {
  }

  ngOnInit(): void {
    this.counter$ = this.counterService.counter$;
  }
}
