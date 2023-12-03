import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { TodoEditComponent } from "../todo-edit/todo-edit.component";

export const editCanDeactivateGuard: CanDeactivateFn<TodoEditComponent> = (
  component: TodoEditComponent,
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> | boolean => {
  return component.canDeactivate();
};
