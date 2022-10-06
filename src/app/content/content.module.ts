import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { DemoNgZorroAntdModule } from '../ng-zooro-antd/ng-zorro-antd.module';
import {NzDemoMenuInlineComponent} from "../ng-zooro-antd/ng-zorro-antd.component"
@NgModule({
  declarations: [
    ContentComponent,
    NzDemoMenuInlineComponent,
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    DemoNgZorroAntdModule,
  ],
  bootstrap: [ContentComponent]
})
export class ContentModule { }