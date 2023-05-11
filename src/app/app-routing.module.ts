import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutMePage } from './about-me/about-me.page';
import { CalculateBMRComponent } from './calculate-bmr/calculate-bmr.component';
import { HomePage } from './home/home.page';
import { Page1Component } from './page1/page1.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'calculate-bmr',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomePage,
  },
  {
    path:'page1',
    component: Page1Component
  },
  {
    path:'aboutme',
    component: AboutMePage
  },
  {
    path:'calculate-bmr',
    component: CalculateBMRComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'page1',
    loadChildren: () => import('./page1/page1.module').then((m) => m.Page1Module),
  },
  {
    path: 'calculate-bmr',
    loadChildren: () => import('./calculate-bmr/calculate-bmr.module').then((m) => m.CalculateBMRModule), 
  },

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
