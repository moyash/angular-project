import { Injectable } from '@angular/core';
import { Todo } from './Todo.interface';
import { TodoStatus } from '../constants/enums/todo-status.enum';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoList: Todo[] = [
    {
      id: '1',
      title: 'title1',
      author: 'test1',
      content: 'content1',
      status: 0,
    },
    {
      id: '2',
      title: 'title2',
      author: 'test2',
      content: 'content2',
      status: 1,
    },
    {
      id: '3',
      title: 'title3',
      author: 'test3',
      content: 'content3',
      status: 2,
    },
    {
      id: '4',
      title: 'title4',
      author: 'test4',
      content: 'content4',
      status: 3,
    },
    {
      id: '5',
      title: 'title5',
      author: 'test5',
      content: 'content5',
      status: 4,
    },
    {
      id: '6',
      title: 'title6',
      author: 'test6',
      content: 'content6',
      status: 2,
    },
    {
      id: '7',
      title: 'title7',
      author: 'test7',
      content: 'content7',
      status: 3,
    },
    {
      id: '8',
      title: 'title8',
      author: 'test8',
      content: 'content8',
      status: 0,
    },
    {
      id: '9',
      title: 'title9',
      author: 'test9',
      content: 'content9',
      status: 1,
    },
    {
      id: '10',
      title: 'title10',
      author: 'test10',
      content: 'content10',
      status: 2,
    },
  ];

  fetchData() {
    return this.todoList;
  }

  getTodo(id: string) {
    return this.todoList.find((e) => e.id === id);
  }
}
