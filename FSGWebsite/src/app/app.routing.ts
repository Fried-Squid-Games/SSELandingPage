import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { GamesComponent } from './games';
import { ResourcesComponent } from './resources';
import { NewsComponent } from './news';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'games', component: GamesComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'news', component: NewsComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

export const appRoutingModule = RouterModule.forRoot(routes);
