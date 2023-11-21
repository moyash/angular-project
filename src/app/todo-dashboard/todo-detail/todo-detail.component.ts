import { Component, OnDestroy, OnInit } from '@angular/core';
import { Todo } from '../Todo.interface';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { TodoService } from '../todo.service';
import { TodoStatus } from 'src/app/constants/enums/todo-status.enum';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent implements OnInit, OnDestroy {
  todo: Todo | undefined = {
    id: '',
    title: '',
    author: '',
    content: '',
    status: TodoStatus.NotStarted,
  };
  routerSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {}
  ngOnInit(): void {
    this.routerSubscription = this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.todo = this.todoService.getTodo(id);
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}
