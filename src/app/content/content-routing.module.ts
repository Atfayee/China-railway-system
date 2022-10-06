import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      // {
      //   path: '',
      //   loadChildren: () =>
      //   import('../pages/Gene/Geo/Global/gene-global.module').then((m) => m.GeneGlobalModule),
      // },
      {
        path: 'Railwaymap',
        loadChildren: () =>
          import('../pages/railwayMap/railwaymap.module').then((m) => m.RailwaymapModule),
      },
      {
        path: 'Analysischart',
        loadChildren: () =>
          import('../pages/analysisCharts/analysischarts.module').then(
            (m) => m.AnalysischartsModule
          ),
      },
      {
        path: 'Analysismap',
        loadChildren: () => import('../pages/analysisMap/analysismap.module').then(m => m.BedsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
