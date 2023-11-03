import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: ` <h3>Hola Counter desde COUNTER_ COMPONENT__</h3>

  <h4> Counter: {{counter}} </h4>

  <button (click)="increaseBy(1) " >+1</button>
  <button (click)=" resetValue(10) " >RESET</button>
  <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number): void{
    this.counter += value;
  }

  resetValue(resetValue: number){
    this.counter = resetValue;
  }
}
