import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AnalysischartsRoutingModule } from './analysischarts-routing.module';
import { AnalysischartsComponent } from './analysischarts.component';
import { AnalysischartsService } from './analysischarts.service';
import { DemoNgZorroAntdModule } from '../../ng-zooro-antd/ng-zorro-antd.module';
@NgModule({
  declarations: [
    AnalysischartsComponent
  ],
  imports: [
    CommonModule,
    AnalysischartsRoutingModule,
    DemoNgZorroAntdModule
  ],
  bootstrap: [AnalysischartsComponent],
  providers:[AnalysischartsService],
})
export class AnalysischartsModule { }