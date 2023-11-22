import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { todoListResolver } from './todo.resolver';
import { authGuard } from '../auth/auth.guard';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';

const todoRoutes: Routes = [
  {
    path: '',
    component: TodoDashboardComponent /*canActivate: [authGuard]*/,
    resolve: { todo: todoListResolver },
    children: [
      {
        path: ':id',
        component: TodoDetailComponent,
        children: [
          {
            path: 'edit',
            component: TodoEditComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(todoRoutes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
