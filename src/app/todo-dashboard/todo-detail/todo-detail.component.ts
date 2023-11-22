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
  isShowEditPanel = false;
  routerSubscription: Subscription;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private todoService: TodoService) {
    this.subscription = this.todoService.isEditShow$.subscribe((state) => {
      this.isShowEditPanel = state;
    });
  }
  ngOnInit(): void {
    this.routerSubscription = this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.todo = this.todoService.getTodo(id);
    });
  }

  getColor(id: number = 0) {
    var color = '';
    if (id === TodoStatus.NotStarted) color = '#ef7f74';
    if (id === TodoStatus.InProgress) color = '#4187c7';
    if (id === TodoStatus.Completed) color = '#b0bf2e';
    if (id === TodoStatus.OnHold) color = '#808db7';
    if (id === TodoStatus.Cancelled) color = '#f62755';
    return color;
  }

  onEdit() {
    this.isShowEditPanel = !this.isShowEditPanel;
    this.todoService.changeEditStatus(this.isShowEditPanel);
    console.log(this.isShowEditPanel);
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}
