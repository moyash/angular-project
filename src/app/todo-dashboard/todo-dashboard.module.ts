import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { TodoComponent } from './todo/todo.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodoDashboardComponent,
    TodoListComponent,
    TodoComponent,
    TodoDetailComponent,
    TodoEditComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TodoRoutingModule,
  ],
})
export class TodoDashboardModule {}
