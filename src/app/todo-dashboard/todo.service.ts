import { Injectable } from '@angular/core';
import { Todo } from './Todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoList: Todo[] = [
    { id: '1', title: 'title1', author: 'test1', content: 'content1' },
  ];

  fetchData() {
    return this.todoList;
  }
}
