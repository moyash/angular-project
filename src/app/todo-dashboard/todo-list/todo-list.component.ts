import { Component, OnDestroy, OnInit } from "@angular/core";
import { Todo } from "../Todo.interface";
import { TodoService } from "../todo.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription, catchError, take, tap } from "rxjs";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
})
export class TodoListComponent implements OnInit, OnDestroy {
  todoList: Todo[] = [];
  subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {
    this.subscription = Subscription.EMPTY;
  }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.data.subscribe(({ todo }) => {
      this.todoList = todo;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
