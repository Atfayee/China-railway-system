import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalysismapComponent } from './analysismap.component';

const routes: Routes = [
  { path: '', component: AnalysismapComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalysismapRoutingModule { }