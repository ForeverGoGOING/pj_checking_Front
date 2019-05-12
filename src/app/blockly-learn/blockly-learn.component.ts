import {Component, OnInit} from '@angular/core';
import {patterns} from '../../data/introductionData';

@Component({
  selector: 'app-blockly-learn',
  templateUrl: './blockly-learn.component.html',
  styleUrls: ['./blockly-learn.component.css']
})
export class BlocklyLearnComponent implements OnInit {
  designPatterns = patterns;
  selected: string;

  constructor() {
  }

  ngOnInit() {
    this.selected = '设计模式';
  }

  onSelect(designPattern: string): void {
    this.selected = designPattern;
  }

  dealNext(designPattern: string): void {
    this.selected = designPattern;
    window.scrollTo(0, 0);
  }
}
