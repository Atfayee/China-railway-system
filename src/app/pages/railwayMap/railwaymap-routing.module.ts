import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RailwaymapComponent } from './railwaymap.component';
const routes: Routes = [
  { path: '', component: RailwaymapComponent },
  // {
  //   path: 'China',
  //   loadChildren: () =>
  //     import('../China/geo-china.module').then((m) => m.GeoChinaModule),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RailwaymapRoutingModule {}
