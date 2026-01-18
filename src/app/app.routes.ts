import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Herbarium } from './pages/herbarium/herbarium';
import { SuggestPlant } from './pages/suggest-plant/suggest-plant';
import { About } from './pages/about/about';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'herbarium', component: Herbarium },
  { path: 'suggest', component: SuggestPlant },
  { path: 'about', component: About },
];
