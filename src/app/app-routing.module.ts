import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishSearchComponent } from './components/dish-search/dish-search.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuardGuard } from './guards/login-guard.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate:[LoginGuardGuard]},
  { path: 'search-dish', component: DishSearchComponent, canActivate:[LoginGuardGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
