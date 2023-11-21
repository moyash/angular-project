import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { authGuard } from '../auth/auth.guard';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

const todoRoutes: Routes = [
  {
    path: '',
    component: TodoDashboardComponent /*canActivate: [authGuard]*/,
    children: [{ path: ':id', component: TodoDetailComponent }],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(todoRoutes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
