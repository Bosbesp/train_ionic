import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutMePage } from './about-me/about-me.page';
import { HomePage } from './home/home.page';
import { Page1Component } from './page1/page1.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
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
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'page1',
    loadChildren: () => import('./page1/page1.module').then((m) => m.Page1Module),
  },

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
