import { EventEmitter } from "@angular/core";
import * as echarts from 'echarts';
import axios from 'axios';

export class AnalysischartsService {
    years = ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
    miles = [11.18, 12.1, 12.4, 12.7, 13.17, 13.99, 14.63, 15]
    passengerTraffic = [233400, 253500, 278400, 308379, 342800, 366002, 199068, 261169]

    cityNames = ['北京', '郑州', '沈阳', '武汉', '上海', '广州', '长沙', '兰州', '重庆', '贵阳']
    datasetWithFilters = [];
    seriesList = [];

    rawdata = [
        [
            { name: '北京', gdp: 21331 },
            { name: '郑州', gdp: 6776.99 },
            { name: '沈阳', gdp: 7098.71 },
            { name: '武汉', gdp: 10068.5 },
            { name: '上海', gdp: 23560.94 },
            { name: '广州', gdp: 16706.87 },
            { name: '长沙', gdp: 7824.81 },
            { name: '兰州', gdp: 1913.5 },
            { name: '重庆', gdp: 14265.4 },
            { name: '贵阳', gdp: 2497.27 },
        ],
        [
            { name: '北京', gdp: 22968.6 },
            { name: '郑州', gdp: 7315.2 },
            { name: '沈阳', gdp: 7280.5 },
            { name: '武汉', gdp: 10905 },
            { name: '上海', gdp: 25300 },
            { name: '广州', gdp: 18100.41 },
            { name: '长沙', gdp: 8510.13 },
            { name: '兰州', gdp: 2095.99 },
            { name: '重庆', gdp: 15719.72 },
            { name: '贵阳', gdp: 2891.16 },
        ],
        [
            { name: '北京', gdp: 24899.3 },
            { name: '郑州', gdp: 7994.2 },
            { name: '沈阳', gdp: 5460 },
            { name: '武汉', gdp: 11912.61 },
            { name: '上海', gdp: 27466.15 },
            { name: '广州', gdp: 19610.94 },
            { name: '长沙', gdp: 9323.7 },
            { name: '兰州', gdp: 2264.23 },
            { name: '重庆', gdp: 17558.76 },
            { name: '贵阳', gdp: 3157.7 },
        ],
        [
            { name: '北京', gdp: 21331 },
            { name: '郑州', gdp: 6776.99 },
            { name: '沈阳', gdp: 7098.71 },
            { name: '武汉', gdp: 10068.5 },
            { name: '上海', gdp: 23560.94 },
            { name: '广州', gdp: 16706.87 },
            { name: '长沙', gdp: 7824.81 },
            { name: '兰州', gdp: 1913.5 },
            { name: '重庆', gdp: 14265.4 },
            { name: '贵阳', gdp: 2497.27 },
        ],
        [
            { name: '北京', gdp: 28000 },
            { name: '郑州', gdp: 9130.17 },
            { name: '沈阳', gdp: 5865 },
            { name: '武汉', gdp: 13410.34 },
            { name: '上海', gdp: 30133.86 },
            { name: '广州', gdp: 21503.15 },
            { name: '长沙', gdp: 10535.51 },
            { name: '兰州', gdp: 2523.54 },
            { name: '重庆', gdp: 19500.27 },
            { name: '贵阳', gdp: 3537.96 },
        ],
        [
            { name: '北京', gdp: 30320 },
            { name: '郑州', gdp: 10143.32 },
            { name: '沈阳', gdp: 6292.4 },
            { name: '武汉', gdp: 14847.29 },
            { name: '上海', gdp: 32679.87 },
            { name: '广州', gdp: 22859.35 },
            { name: '长沙', gdp: 10535.51 },
            { name: '兰州', gdp: 2732.94 },
            { name: '重庆', gdp: 20363.19 },
            { name: '贵阳', gdp: 3798.45 },
        ],
        [
            { name: '北京', gdp: 35371.3 },
            { name: '郑州', gdp: 11589.7 },
            { name: '沈阳', gdp: 6470.3 },
            { name: '武汉', gdp: 16223.21 },
            { name: '上海', gdp: 38155.32 },
            { name: '广州', gdp: 23628.6 },
            { name: '长沙', gdp: 11574.22 },
            { name: '兰州', gdp: 2837.36 },
            { name: '重庆', gdp: 23605.77 },
            { name: '贵阳', gdp: 4039.6 },
        ],
        [
            { name: '北京', gdp: 36102.6 },
            { name: '郑州', gdp: 12003 },
            { name: '沈阳', gdp: 6571.6 },
            { name: '武汉', gdp: 15616.1 },
            { name: '上海', gdp: 38700.58 },
            { name: '广州', gdp: 25019.11 },
            { name: '长沙', gdp: 12142.52 },
            { name: '兰州', gdp: 2886.74 },
            { name: '重庆', gdp: 25002.79 },
            { name: '贵阳', gdp: 4311.65 },
        ],
        [
            { name: '北京', gdp: 40269.6 },
            { name: '郑州', gdp: 12691.02 },
            { name: '沈阳', gdp: 7249.7 },
            { name: '武汉', gdp: 17716.76 },
            { name: '上海', gdp: 43214.85 },
            { name: '广州', gdp: 28231.97 },
            { name: '长沙', gdp: 13270.7 },
            { name: '兰州', gdp: 10243.3 },
            { name: '重庆', gdp: 27894.02 },
            { name: '贵阳', gdp: 4711.04 },
        ],

    ]

    constructor() { }


    private _yType = 'miles';
    private _yData = this.miles;
    get yData() {
        return this._yData;
    }
    set yData(yData) {
        this._yData = yData;
    }
    get yType() {
        return this._yType;
    }
    set yType(yType) {
        this._yType = yType;
    }
    scatterdataList=[[],[],[],[],[],[],[],[],[],[]];
    scatterData(){
        for(let i=0;i<this.rawdata.length;i++)
        {
            for(let j=0;j<10;j++)
            {
                if(this.rawdata[i][j]["name"]=="北京"){
                    this.scatterdataList[0].push([i+2014,this.rawdata[i][j]["gdp"]]);
                }
                if(this.rawdata[i][j]["name"]=="郑州"){
                    this.scatterdataList[1].push([i+2014,this.rawdata[i][j]["gdp"]]);
                }
                if(this.rawdata[i][j]["name"]=="沈阳"){
                    this.scatterdataList[2].push([i+2014,this.rawdata[i][j]["gdp"]]);
                }
                if(this.rawdata[i][j]["name"]=="武汉"){
                    this.scatterdataList[3].push([i+2014,this.rawdata[i][j]["gdp"]]);
                }
                if(this.rawdata[i][j]["name"]=="上海"){
                    this.scatterdataList[4].push([i+2014,this.rawdata[i][j]["gdp"]]);
                }
                if(this.rawdata[i][j]["name"]=="广州"){
                    this.scatterdataList[5].push([i+2014,this.rawdata[i][j]["gdp"]]);
                }
                if(this.rawdata[i][j]["name"]=="长沙"){
                    this.scatterdataList[6].push([i+2014,this.rawdata[i][j]["gdp"]]);
                }
                if(this.rawdata[i][j]["name"]=="兰州"){
                    this.scatterdataList[7].push([i+2014,this.rawdata[i][j]["gdp"]]);
                }
                if(this.rawdata[i][j]["name"]=="重庆"){
                    this.scatterdataList[8].push([i+2014,this.rawdata[i][j]["gdp"]]);
                }
                if(this.rawdata[i][j]["name"]=="贵阳"){
                    this.scatterdataList[9].push([i+2014,this.rawdata[i][j]["gdp"]]);
                }
            }
        }
    }


}