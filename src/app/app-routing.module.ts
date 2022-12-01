import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./page/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'albums',
    loadChildren: () => import('./page/albums/albums.module').then( m => m.AlbumsPageModule)
  },
  {
    path: 'photogallery',
    loadChildren: () => import('./page/photogallery/photogallery.module').then( m => m.PhotogalleryPageModule)
  },
  {
    path: 'documentary',
    loadChildren: () => import('./page/documentary/documentary.module').then( m => m.DocumentaryPageModule)
  },
  {
    path: 'awards',
    loadChildren: () => import('./page/awards/awards.module').then( m => m.AwardsPageModule)
  },
  {
    path: 'biography',
    loadChildren: () => import('./page/biography/biography.module').then( m => m.BiographyPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
