import { Component, OnInit, OnDestroy } from '@angular/core';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  counter: number = 0;
  subscibe: any;

  constructor(
    private counterService: CounterService) {
  }


  ngOnInit(): void {
    this.subscibe = this.counterService.counter$.subscribe(v => {
   //   setTimeout(() => {
        this.counter = v;;
   //   }, 0);
    })
  }

  ngOnDestroy(): void {
    this.subscibe.unsubscribe();
  }
}
