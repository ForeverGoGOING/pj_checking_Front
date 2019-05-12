import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-factory-pattern-introduction',
  templateUrl: './factory-pattern-introduction.component.html',
  styleUrls: ['./factory-pattern-introduction.component.css']
})
export class FactoryPatternIntroductionComponent implements OnInit {

  @Output() next = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  goPrev(): void {
    this.next.emit('设计模式');
  }

  goNext(): void {
    this.next.emit('抽象工厂模式');
  }
}
