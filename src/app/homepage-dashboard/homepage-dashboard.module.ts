import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomepageRougtingModule } from "./homepage-routing.module";
import { HomepageDashboardComponent } from "./homepage-dashboard/homepage-dashboard.component";
import { Homepage1Component } from './homepage1/homepage1.component';
import { Homepage2Component } from './homepage2/homepage2.component';

@NgModule({
  declarations: [HomepageDashboardComponent, Homepage1Component, Homepage2Component],
  imports: [CommonModule, HomepageRougtingModule],
})
export class HomepageDashboardModule {}
