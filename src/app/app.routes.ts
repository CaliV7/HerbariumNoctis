import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Herbarium } from './pages/herbarium/herbarium';
import { SuggestPlant } from './pages/suggest-plant/suggest-plant';
import { About } from './pages/about/about';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'herbarium', component: Herbarium },
  { path: 'suggest-plant', loadComponent: () => import('./pages/suggest-plant/suggest-plant').then(m => m.SuggestPlant), data: { title: 'Suggérer une plante' } },
  { path: 'about', component: About },
];
