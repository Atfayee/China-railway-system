import { Component } from "@angular/core";
import { EChartOption } from 'echarts';
import * as echarts from 'echarts';
import mapboxgl from 'mapbox-gl'
import '../../../../node_modules/echarts/extension/bmap/bmap.js';

@Component({
    selector: 'beds',
    templateUrl: './analysismap.component.html',
    styleUrls: ['./analysismap.component.css']
})

export class AnalysismapComponent {

    charts: any;
    Options: any;
    map: mapboxgl.Map;

    constructor() { }

    data: any = [
        { name: "北京市", value: 127033 },
        { name: "天津市", value: 68275 },
        { name: "河北省", value: 441962 },
        { name: "山西省", value: 223650 },
        { name: "内蒙古自治区", value: 162072 },
        { name: "辽宁省", value: 314488 },
        { name: "吉林省", value: 173123 },
        { name: "黑龙江省", value: 253345 },
        { name: "上海市", value: 152191 },
        { name: "江苏省", value: 535006 },
        { name: "浙江省", value: 361317 },
        { name: "安徽省", value: 407813 },
        { name: "福建省", value: 216753 },
        { name: "江西省", value: 285847 },
        { name: "山东省", value: 646863 },
        { name: "河南省", value: 667156 },
        { name: "湖北省", value: 411351 },
        { name: "湖南省", value: 519902 },
        { name: "广东省", value: 564773 },
        { name: "广西壮族自治区", value: 295562 },
        { name: "海南省", value: 58474 },
        { name: "重庆市", value: 235520 },
        { name: "四川省", value: 649756 },
        { name: "贵州省", value: 276379 },
        { name: "云南省", value: 325212 },
        { name: "西藏自治区", value: 18586 },
        { name: "陕西省", value: 272424 },
        { name: "甘肃省", value: 171866 },
        { name: "青海省", value: 41285 },
        { name: "宁夏回族自治区", value: 41261 },
        { name: "新疆维吾尔自治区", value: 181455 },

    ];

    geoCoordMap: any = {
        "北京市": [116.42, 40.188],
        "天津市": [117.348, 39.284],
        "河北省": [116.137, 39.542],
        "山西省": [112.295, 37.572],
        "内蒙古自治区": [113.926, 44.09],
        "辽宁省": [122.601, 41.279],
        "吉林省": [126.195, 43.67],
        "黑龙江省": [127.774, 47.864],
        "上海市": [121.487, 31.209],
        "江苏省": [119.494, 32.965],
        "浙江省": [120.137, 29.181],
        "安徽省": [117.231, 31.824],
        "福建省": [118.007, 26.052],
        "江西省": [115.727, 27.611],
        "山东省": [118.181, 36.361],
        "河南省": [113.619, 33.882],
        "湖北省": [112.276, 30.974],
        "湖南省": [111.714, 27.607],
        "广东省": [113.418, 23.307],
        "广西壮族自治区": [108.793, 23.818],
        "海南省": [110.205, 18.064],
        "重庆市": [107.88, 30.055],
        "四川省": [102.695, 30.627],
        "贵州省": [106.878, 26.813],
        "云南省": [101.488, 24.973],
        "西藏自治区": [88.444, 31.489],
        "陕西省": [108.875, 35.191],
        "甘肃省": [100.609, 37.88],
        "青海省": [96.041, 35.67],
        "宁夏回族自治区": [106.168, 37.271],
        "新疆维吾尔自治区": [85.193, 41.117]
    };

    passengerTraffic = [
        { name: '广东省', value: 4832 },
        { name: '江苏省', value: 4023 },
        { name: '浙江省', value: 3634 },
        { name: '湖南省', value: 2808 },
        { name: '四川省', value: 2783 },
        { name: '山东省', value: 2212 },
        { name: '安徽省', value: 1823 },
        { name: '江西省', value: 1523 },
        { name: '湖北省', value: 1223 },
        { name: '广西省', value: 998 },
    ]
    freightTraffic = [
        { name: '山西省', value: 4832 },
        { name: '内蒙古省', value: 4023 },
        { name: '陕西省', value: 3634 },
        { name: '山东省', value: 2808 },
        { name: '河北省', value: 2783 },
        { name: '辽宁省', value: 2212 },
        { name: '新建省', value: 1823 },
        { name: '黑龙江省', value: 1523 },
        { name: '河南省', value: 1223 },
        { name: '天津省', value: 998 },
    ]
    touristTrafficTrans = [
        { name: '广东省', value: 4832 },
        { name: '河南省', value: 4023 },
        { name: '湖南省', value: 3634 },
        { name: '安徽省', value: 2808 },
        { name: '江苏省', value: 2783 },
        { name: '河北省', value: 2212 },
        { name: '浙江省', value: 1823 },
        { name: '江西省', value: 1523 },
        { name: '山东省', value: 1223 },
        { name: '湖北省', value: 998 },
    ]
    freightTrafficTrans = [
        { name: '河北省', value: 4832 },
        { name: '山西省', value: 4023 },
        { name: '内蒙古省', value: 3634 },
        { name: '河南省', value: 2808 },
        { name: '陕西省', value: 2783 },
        { name: '山东省', value: 2212 },
        { name: '甘肃省', value: 1823 },
        { name: '辽宁省', value: 1523 },
        { name: '新建省', value: 1223 },
        { name: '四川省', value: 998 },
    ]
    convertData(data: any) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = this.geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    }

    ngOnInit(): void {
        this.charts = echarts.init(document.getElementById('bedscharts') as HTMLDivElement);

        this.Options =
        {
            title: {
                text: '客运与货运量',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            bmap: {
                center: [104.114129, 37.550339],
                zoom: 5,
                roam: true,
                mapStyle: {
                    styleId:'b4fdcdba7430352184265866f62d0eef',
                    
                }
            },
            series: [
                {
                    name: '数量',
                    type: 'scatter',
                    coordinateSystem: 'bmap',
                    data: this.convertData(this.passengerTraffic),
                    symbolSize: function (val) {
                        return val[2] / 90;
                    },
                    encode: {
                        value: 2
                    },
                    label: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        label: {
                            show: true
                        }
                    }
                },
                {
                    name: 'Top 5',
                    type: 'effectScatter',
                    coordinateSystem: 'bmap',
                    data: this.convertData(this.passengerTraffic.sort(function (a, b) {
                        return b.value - a.value;
                    }).slice(0, 5)),
                    symbolSize: function (val) {
                        return val[2] / 90;
                    },
                    encode: {
                        value: 2
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    },
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    },
                    zlevel: 1
                }
            ]
        };


        this.charts.setOption(this.Options, true);
        window.addEventListener('resize', () => {
            this.charts.resize();
        });
    }

    ngOnDestroy(): void {
        echarts.dispose(this.charts);
    }

    passengerTraf() {
        this.Options.series[0].data = this.convertData(this.passengerTraffic);
        this.Options.series[1].data = this.convertData(this.passengerTraffic.sort(function (a, b) {
            return b.value - a.value;
        }).slice(0, 5));
        this.charts.setOption(this.Options);
    }

    freightTraf() {
        this.Options.series[0].data = this.convertData(this.freightTraffic);
        this.Options.series[1].data = this.convertData(this.freightTraffic.sort(function (a, b) {
            return b.value - a.value;
        }).slice(0, 5));
        this.charts.setOption(this.Options);
    }

    freightrTrafTrans() {
        this.Options.series[0].data = this.convertData(this.freightTrafficTrans);
        this.Options.series[1].data = this.convertData(this.freightTrafficTrans.sort(function (a, b) {
            return b.value - a.value;
        }).slice(0, 5));
        this.charts.setOption(this.Options);
    }

    touristTrafTrans() {
        this.Options.series[0].data = this.convertData(this.touristTrafficTrans);
        this.Options.series[1].data = this.convertData(this.touristTrafficTrans.sort(function (a, b) {
            return b.value - a.value;
        }).slice(0, 5));
        this.charts.setOption(this.Options);
    }
}