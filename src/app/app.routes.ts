import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArtisanListComponent } from './components/artisan-list/artisan-list.component';
import { ArtisanDetailComponent } from './components/artisan-detail/artisan-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'building', component: ArtisanListComponent },
  { path: 'services', component: ArtisanListComponent },
  { path: 'manufacturing', component: ArtisanListComponent },
  { path: 'food', component: ArtisanListComponent },
  { path: 'artisan/:id', component: ArtisanDetailComponent },
  { path: '**', component: NotFoundComponent }
];