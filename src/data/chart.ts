import {TemplateRef} from '@angular/core';

export class SingleChartData {
  constructor(public name?: string, public value?: number) {
  }
}

export class MultiChartData {
  constructor(public name?: string, public series?: Array<SingleChartData>) {
    if (series) {
      this.series = series;
    }
    else {
      this.series = new Array<SingleChartData>();
    }
  }
}

//用来存放颜色
export class ColorScheme {
  constructor(public domain?: Array<string>) {
    this.domain = new Array<string>();
  }
}

export class BaseChart {
  constructor(
    public view?: Array<number>,
    public scheme?: ColorScheme,
    public customColors?: Array<string>,
    public animations?: boolean,
    public gradient?: boolean,
    public tooltipDisabled?: boolean,
    public tooltipTemplate?: TemplateRef<string>,
    public activeEntries?: Array<object>
  ) {
    this.view = [700, 400];
    this.gradient = false;
    this.scheme = new ColorScheme();
    this.customColors = new Array<string>();
    this.activeEntries = new Array<object>();
  }
}

export class LineChart extends BaseChart {
  constructor(
    public schemeType?: string,
    public legend?: boolean,
    public legendTitle?: string,
    public xAxis?: boolean,
    public yAxis?: boolean,
    public showGridLines?: boolean,
    public roundDomains?: boolean,
    public showXAxisLabel?: boolean,
    public showYAxisLabel?: boolean,
    public xAxisLabel?: string,
    public yAxisLabel?: string,
    public xAxisTickFormatting?: Function,
    public yAxisTickFormatting?: Function,
    public seriesTooltipTemplate?: TemplateRef<any>,
    public xScaleMin?: any,
    public xScaleMax?: any,
    public yScaleMin?: number,
    public yScaleMax?: number,
    public rangeFillOpacity?: number,
    public timeline?: boolean,
    public autoScale?: boolean,
    public curve?: Function,
    public results?: Array<MultiChartData>,
    public referenceLines?: Array<object>,
    public showRefLines?: boolean,
    public showRefLabels?: boolean,
  ) {
    super();
    this.results = new Array();
  }

  generateStudentStatisticLineChartResult() {
    let res = [
      {
        'name': 'Student 安晨鑫',
        'series': [
          {
            'name': '2019-5-4',
            'value': 10
          },
          {
            'name': '2019-5-5',
            'value': 20
          }, {
            'name': '2019-5-6',
            'value': 15
          }, {
            'name': '2019-5-7',
            'value': 19
          }, {
            'name': '2019-5-8',
            'value': 0
          }, {
            'name': '2019-5-9',
            'value': 10
          }
        ]
      }];
    this.results = res;
  }
}


