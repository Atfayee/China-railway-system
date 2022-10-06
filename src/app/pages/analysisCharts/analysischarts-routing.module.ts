import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalysischartsComponent } from './analysischarts.component';

const routes: Routes = [
  { path: '', component: AnalysischartsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalysischartsRoutingModule { }