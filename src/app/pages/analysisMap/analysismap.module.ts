import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AnalysismapRoutingModule } from './analysismap-routing.module';
import { AnalysismapComponent } from './analysismap.component';
import { DemoNgZorroAntdModule } from '../../ng-zooro-antd/ng-zorro-antd.module';

@NgModule({
  declarations: [
    AnalysismapComponent
  ],
  imports: [
    CommonModule,
    AnalysismapRoutingModule,
    DemoNgZorroAntdModule
  ],
  bootstrap: [AnalysismapComponent]
})
export class BedsModule { }