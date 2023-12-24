import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { authGuard } from "../auth/auth.guard";

const mainRoutes: Routes = [
  { path: "", component: MainComponent, canActivate: [authGuard] },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(mainRoutes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
