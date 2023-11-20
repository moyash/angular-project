import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [TodoDashboardComponent, TodoComponent],
  imports: [CommonModule, TodoRoutingModule],
})
export class TodoDashboardModule {}
