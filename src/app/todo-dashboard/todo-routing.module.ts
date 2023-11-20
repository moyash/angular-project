import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';

const todoRoutes: Routes = [{ path: '', component: TodoDashboardComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(todoRoutes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
