import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/layout/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule),
  },
  {
    path: 'other',
    loadChildren: () => import('./pages/other/other.module').then(m => m.OtherModule),
  },
  {
    path: 'characters',
    loadChildren: () => import('./pages/characters/characters.module').then(m => m.CharactersModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
