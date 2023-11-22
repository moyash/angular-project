import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo.interface';
import { TodoService } from '../todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todoList: Todo[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ todo }) => {
      this.todoList = todo;
    });
  }
}
