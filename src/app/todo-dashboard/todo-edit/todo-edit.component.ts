import { Component, Input } from '@angular/core';
import { Todo } from '../Todo.interface';
import { TodoStatus } from 'src/app/constants/enums/todo-status.enum';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css'],
})
export class TodoEditComponent {
  @Input() editTodo?: Todo = {
    id: '',
    title: '',
    author: '',
    content: '',
    status: TodoStatus.NotStarted,
  };

  editForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    content: new FormControl(''),
    status: new FormControl(''),
  });

  constructor(private todoService: TodoService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  onEditDone() {
    const id = this.editTodo?.id ? this.editTodo.id : '1';
    const title = this.editForm.value.title ? this.editForm.value.title : '';
    const author = this.editForm.value.author ? this.editForm.value.author : '';
    const content = this.editForm.value.content
      ? this.editForm.value.content
      : '';
    const status = this.editForm.value.status
      ? +this.editForm.value.status
      : TodoStatus.NotStarted;

    const target: Todo = {
      id: id,
      title: title,
      author: author,
      content: content,
      status: status,
    };
    console.log('status', this.editForm.value.status);
    console.log('target', target);
    this.todoService.editTodo(id, target).subscribe((res) => {});
    this.todoService.changeEditStatus(false);
    this.router.navigate(['/todo', id]);
  }

  onEditCancel() {
    this.todoService.changeEditStatus(false);
  }

  onSubmit() {}
}
