import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { DemoNgZorroAntdModule } from '../../../src/app/ng-zooro-antd/ng-zorro-antd.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DemoNgZorroAntdModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }