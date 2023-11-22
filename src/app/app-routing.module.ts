import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { authGuard } from './auth/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard/todo-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent /*, canActivate: [authGuard]*/,
  },
  // {
  //   path: 'main',
  //   loadChildren: () =>
  //     import('./main-dashboard/main-dashboard.module').then(
  //       (m) => m.MainDashboardModule
  //     ),
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  // },
  {
    path: 'todo',
    loadChildren: () =>
      import('./todo-dashboard/todo-dashboard.module').then(
        (m) => m.TodoDashboardModule
      ),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
