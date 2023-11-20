import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../Todo.interface';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css'],
})
export class TodoDashboardComponent implements OnInit {
  todoList: Todo[] = [];
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoList = this.todoService.fetchData();
    console.log(this.todoList);
  }
}
