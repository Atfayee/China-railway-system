import { Component } from '@angular/core';
import { EChartOption } from 'echarts';
import * as echarts from 'echarts';
import { AnalysischartsService } from "./analysischarts.service";

@Component({
  selector: 'analysischarts',
  templateUrl: './analysischarts.component.html',
  styleUrls: ['./analysischarts.component.css'],
})
export class AnalysischartsComponent {

  chinaoption: EChartOption = {
    backgroundColor: '#fff',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985',
        }
      }
    },//tooltip
    title: {
      text: '里程与年客运量',
    },
    legend: {
      show: true,
      data: this.service.years
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },// toolbox
    grid: {
      left: '3%',
      right: '4%',
      bottom: '20%',
      containLabel: true
    }, // grid
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: this.service.years,
      },
    ],// xAxis
    yAxis: [
      {
        type: 'value'
      }
    ], // yAxis
    series: [
      {
        name: 'miles',
        type: 'line',
        // stack:'total',
        areaStyle: {},
        data: this.service.miles,
      },

    ]
  };

  regionOption: EChartOption = {
    title:{
      text:'各地区GDP变化',
      left:"30px",
      top:"47px"
    },
    color: ['#80ffa5', '#00ddff', '#37a2ff', '#ff0087', '#ffbf00', '#ff04231'],
    // title: {
    //   text: 'Gradient Stacked Area Chart',
    // },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985',
        },
      },
    },//tooltip
    legend: {
      data: ['北京', '郑州', '沈阳', '武汉', '上海'],
      top: "10%",
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      },
    },//toolbox
    grid: {
      left: '3%',
      right: '4%',
      bottom: '5%',
      containLabel: true,
    },//grid
    xAxis: [{
      // show: false,
      type: 'category',
      boundaryGap: false,
      data: this.service.years,
    }],//xAxis
    yAxis: [
      {
        show: false,
        type: 'value',
        boundaryGap: false,
      }
    ],//yaXis
    series: [
      {
        name: '北京市',
        type: 'line',
        stack: 'total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0.8,
              color: 'rgb(128,255,165)'
            },
            {
              offset: 1,
              color: 'rgb(1,191,236)',
            }
          ])
        },//areaStyle
        emphasis: {
          // focus:'series',
        },
        data: [
          21331, 22968.6, 24899.3, 28000, 30320, 35371.3, 36102.16, 40269.6
        ]
      },


      {
        name: '郑州市',
        type: 'line',
        stack: 'total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0.8,
              color: 'rgb(0,221,255)'
            },
            {
              offset: 1,
              color: 'rgb(77,19,255)',
            }
          ])
        },//areaStyle
        emphasis: {
          // focus:'series',
        },
        data: [6776.99, 7315.2, 7994.2, 9130.17, 10143.32, 11589.7, 12003, 12691.02]
      },
      {
        name: '沈阳市',
        type: 'line',
        stack: 'total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0.8,
              color: 'rgb(55,162,255)'
            },
            {
              offset: 1,
              color: 'rgb(116,21,219)',
            }
          ])
        },//areaStyle
        emphasis: {
          // focus:'series',
        },
        data: [7098.71, 7280.5, 5460, 5865, 6292.4, 6470.3, 6571.6, 7249.7],
      },
      {
        name: '武汉市',
        type: 'line',
        stack: 'total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0.8,
              color: 'rgb(255,0,135)'
            },
            {
              offset: 1,
              color: 'rgb(135,0,157)',
            }
          ])
        },//areaStyle
        emphasis: {
          // focus:'series',
        },
        data: [10069.5, 10905, 11912.61, 13410.34, 14847.29, 16223.21, 15616.1, 17716.76],
      },
      {
        name: '上海市',
        type: 'line',
        stack: 'total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0.8,
              color: 'rgb(255,191,0)'
            },
            {
              offset: 1,
              color: 'rgb(224,62,76)',
            }
          ])
        },//areaStyle
        emphasis: {
          // focus:'series',
        },
        data: [23560.94, 25300, 27466.15, 30133.86, 32679.87, 38155.32, 38700.58, 43214.85],
      },
    ]

  };



  constructor(private service: AnalysischartsService) {
  }

  ngOnInit(): void {
    this.service.scatterData();
    this.initCharts();
  }

  initCharts(): void {
    const charts = echarts.init(document.getElementById('temperaturecharts') as HTMLDivElement);
    charts.setOption(this.chinaoption, true);

    const charts2 = echarts.init(document.getElementById('regionCharts') as HTMLDivElement);
    charts2.setOption(this.regionOption, true);

    window.addEventListener('resize', () => {
      charts.resize();
    });
  }
  changeData(): void {
    if (this.service.yType == 'miles') {
      document.getElementById('bt').innerText = '年客运量变化'
      this.service.yType = 'PT';
      this.service.yData = this.service.passengerTraffic;
    } else {
      document.getElementById('bt').innerText = '里程年变化量'
      this.service.yType = 'miles';
      this.service.yData = this.service.miles;
    }
    this.chinaoption.series[0].data = this.service.yData;
    this.initCharts();
  }
}
