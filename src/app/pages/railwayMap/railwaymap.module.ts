import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RailwaymapRoutingModule } from './railwaymap-routing.module';
import { RailwaymapComponent } from './railwaymap.component';
import { DemoNgZorroAntdModule } from '../../ng-zooro-antd/ng-zorro-antd.module';
@NgModule({
  declarations: [
    RailwaymapComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RailwaymapRoutingModule,
    DemoNgZorroAntdModule
  ],
  bootstrap: [RailwaymapComponent]
})
export class RailwaymapModule { }
