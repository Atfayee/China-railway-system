import { Component, OnInit } from '@angular/core';
import { RailwaymapService } from './railwaymap.service';
import { EChartOption } from 'echarts';
import * as echarts from 'echarts';
import mapboxgl from 'mapbox-gl'
import * as turf from '@turf/turf'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';



@Component({
  selector: 'geo-global',
  templateUrl: './railwaymap.component.html',
  styleUrls: ['./railwaymap.component.css'],
})
export class RailwaymapComponent implements OnInit {
  constructor(private service: RailwaymapService
  ) { }
  values: string;
  selectedFile;
  jsonObj: {};// json object
  geojsonObj;//geojson
  map: mapboxgl.Map;


  ngOnInit(): void {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXRmYXllIiwiYSI6ImNsMnI1ZzZmYjA4NjMzaXJ0ejllZ2J0dDQifQ.7cqm4N3m-G4riNLzLMc6sQ';
    // 地图样式设定
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [118.78, 32.07],
      zoom: 3,
      drag: true,
    });

    // geocoder
    const geocoder = new MapboxGeocoder({
      accessToken: 'pk.eyJ1IjoiYXRmYXllIiwiYSI6ImNsMnI1ZzZmYjA4NjMzaXJ0ejllZ2J0dDQifQ.7cqm4N3m-G4riNLzLMc6sQ',
      // comment below line will enlarge the range of search result
      bbox: [-77.210763, 38.803367, -76.853675, 39.052643],
      marker: false,
    });
    this.map.addControl(
      geocoder
    )




  }
  ngAfterViewInit() {

  }
  filterYears(e): void {
    var index = parseInt(e.target.value, 10);
    this.filterBy(index);
  }
  filterBy(index) {
    var years = [
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
    ];
    var filters = ['<=', ['string', ['get', 'year']], years[index]];
    this.map.setFilter('railwayLayer', filters);
    // Set the label to the month
    document.getElementById('year').textContent = years[index] + ' 年';
  }
  uploadFile(event) {
    this.selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(this.selectedFile, "UTF-8");
    fileReader.onload = () => {
      //console.log(fileReader.result.toString());
      this.geojsonObj = fileReader.result.toString();
      this.jsonObj = (JSON.parse(fileReader.result.toString()));
      // console.log(this.jsonObj["name"])
    }
  }

  renderLayer(): void {
    if (this.map.getSource('railwaySource')) {
      // layer用着的时候不能remove source
      if (this.map.getLayer('railwayLayer'))
        this.map.removeLayer('railwayLayer')
      this.map.removeSource('railwaySource')
    }

    this.map.addSource('railwaySource', {
      'type': 'geojson',
      data: this.jsonObj,
    });
    this.map.addLayer({
      'id': 'railwayLayer',
      'type': 'line',
      "maxzoom": 16,
      'source': 'railwaySource',
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-color": "#2E8B57",
        "line-width": 1
      }
    });
  }


  //清空图层
  removeLayer() {
    this.map.removeLayer('railwayLayer')
  }



  // 缓冲区
  startBuffer: boolean = false;
  renderBuffer() {
    this.startBuffer = true;
    this.t();
  }
  stoprBuffer() {
    this.startBuffer = false;
  }
  t() {

    // 查找属性
    this.map.on('click', (event) => {
      if (this.map.getLayer('bufferLayer')) {
        this.map.removeLayer('bufferLayer')
      }
      if (this.map.getSource('bufferSource')) {
        this.map.removeSource('bufferSource')
      }
      if (this.map.getLayer('bufferPointLayer')) {
        this.map.removeLayer('bufferPointLayer')
      }
      if (this.map.getSource('bufferPointSource')) {
        this.map.removeSource('bufferPointSource')
      }

      if (this.startBuffer) {
        const point = [event.lngLat.lng, event.lngLat.lat];
        var locationA = turf.point(point);
        var radius = Number(this.values);
        var buffered = turf.buffer(locationA, radius, { units: 'miles' });
        // 缓冲区 数据源
        this.map.addSource('bufferSource', {
          'type': 'geojson',
          'data': buffered
        })
        // 缓冲区 图层
        this.map.addLayer({
          'id': 'bufferLayer',
          'type': 'fill',
          'source': 'bufferSource',
          'layout': {},
          'paint': {
            'fill-color': '#088',
            'fill-opacity': 0.8
          }
        });

        this.map.addSource('bufferPointSource', {
          'type': 'geojson',
          'data': locationA
        });
        this.map.addLayer({
          'id': 'bufferPointLayer',
          'type': 'circle',
          'source': 'bufferPointSource',
          'paint': {
            'circle-radius': 6,
            'circle-color': '#B42222'
          }
        });
        // //飞行至四至范围内
        // 获取缓冲区四至
        // 左下角坐标，min_lng，min_lat
        var es = [180, 90]
        // 右上角坐标，max_lng，max_lat
        var wn = [0, 0]
        var coordinates = buffered.geometry.coordinates[0];
        for (var i = 0; i < coordinates.length; i++) {
          console.log(coordinates[i]);
          if (coordinates[i][0] < es[0])
            es[0] = coordinates[i][0];
          if (coordinates[i][1] < es[1])
            es[1] = coordinates[i][1];
          if (coordinates[i][0] > wn[0])
            wn[0] = coordinates[i][0];
          if (coordinates[i][1] > wn[1])
            wn[1] = coordinates[i][1]
        }
        console.log([es, wn]);
        this.map.fitBounds([es, wn], {
          padding: 200
        });
      }
    });

  }
}



