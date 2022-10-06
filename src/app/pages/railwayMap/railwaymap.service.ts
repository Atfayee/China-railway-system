import { ElementRef, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as turf from '@turf/turf';

@Injectable({
  providedIn: 'root',
})
export class RailwaymapService {
  public HttpClient: HttpClient
  private _railwayData: Object;
  private mapElement: ElementRef;

  get railwayData(){
    return this._railwayData;
  }
  // set railwayData(){

  // }
  constructor(private http: HttpClient) {
   
  }

  // 获取本地数据
	getLocalhostData() {
		this.HttpClient.get("../../../../../assets/railway.geojson").subscribe((data: any) => {
			if (data.IsSucceed) {
				this._railwayData = data;
			}
		})
	}
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
}
