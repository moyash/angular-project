import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-todo-dashboard",
  templateUrl: "./todo-dashboard.component.html",
  styleUrls: ["./todo-dashboard.component.css"],
})
export class TodoDashboardComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  onCreate() {
    this.router.navigate(["create"], { relativeTo: this.route });
  }
}
