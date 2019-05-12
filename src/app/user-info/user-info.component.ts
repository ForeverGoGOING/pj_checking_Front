import {Component, OnInit} from '@angular/core';
import {LineChart} from '../../data/chart';

export interface PeriodicElement {
  name: string;
  position: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: '工厂模式', symbol: '未开始'},
  {position: 2, name: '策略模式', symbol: '进行中'},
  {position: 3, name: '装饰器模式', symbol: '已完成'},

];

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  displayedColumns: string[] =['position', 'name', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() {

  }

  ngOnInit() {
    this.getLineChart();
  }

  studentLineChart: LineChart;

  getLineChart() {
    //传入的参数可以是固定的数据，可以是从http请求来的数据
    let colorDomain = new Array('#FFA1B5', '#86C7F3', '#5aa454');
    //在类里写一个属性叫studentLineChart来存放这个图表
    this.studentLineChart = new LineChart();
    this.studentLineChart.xAxis = true;
    this.studentLineChart.yAxis = true;
    this.studentLineChart.legend = true;
    this.studentLineChart.showXAxisLabel = true;
    this.studentLineChart.showYAxisLabel = true;
    this.studentLineChart.yAxisLabel = '时间/min';
    this.studentLineChart.view = [800, 400];
    this.studentLineChart.results = new Array();
    this.studentLineChart.scheme.domain = colorDomain;
    this.studentLineChart.generateStudentStatisticLineChartResult();
  }


}
