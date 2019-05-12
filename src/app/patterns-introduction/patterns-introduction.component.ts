import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ELEMENT_DATA} from '../../data/introductionData';

@Component({
  selector: 'app-patterns-introduction',
  templateUrl: './patterns-introduction.component.html',
  styleUrls: ['./patterns-introduction.component.css']
})
export class PatternsIntroductionComponent implements OnInit {
  displayedColumns: string[] = ['No.', '模式 & 描述', '包括'];
  dataSource = ELEMENT_DATA;

  @Output() next = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  goNext(): void {
    this.next.emit('工厂模式');
  }
}
