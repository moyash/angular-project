import { Injectable } from "@angular/core";
import { Todo } from "./Todo.interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Subject, map, tap } from "rxjs";
import { TodoStatus } from "../constants/enums/todo-status.enum";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  URL: string = "http://localhost:3000";

  todoListSub = new BehaviorSubject<Todo[]>([]);

  isEditSubject = new Subject<boolean>();
  isEditShow$ = this.isEditSubject.asObservable();

  currentTodo: Todo = {
    id: "",
    title: "",
    author: "",
    content: "",
    status: TodoStatus.NotStarted,
  };

  constructor(private http: HttpClient) {}

  changeEditStatus(state: boolean) {
    this.isEditSubject.next(state);
  }

  setTodoList(todoList: Todo[]) {
    this.todoListSub.next(todoList);
  }

  fetchData() {
    return this.http.get<Todo[]>(this.URL).pipe(
      map((items) => {
        return items;
      }),
      tap((items) => {
        this.setTodoList(items);
      })
    );
  }

  getTodo(id: string) {
    var tmp: Todo[] = [];
    this.todoListSub.subscribe((items) => (tmp = items));
    return tmp.find((e) => e.id === id);
  }

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  editTodo(id: string, target: Todo) {
    console.log(id, target, `${this.URL}/${id}`);
    return this.http.put(`${this.URL}/${id}`, target, this.httpOptions).pipe(
      tap((items) => {
        console.log("edit item :", items);
      })
    );
  }
}
