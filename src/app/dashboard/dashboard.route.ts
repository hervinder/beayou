import { Routes } from "@angular/router";
import { ProfileComponent } from './profile/profile.component';
import { ListTrainingComponent } from './list-training/list-training.component';
import { DashboardComponent } from "./dashboard.component";
import { MainPageComponent } from "../shared/main-page/main-page.component";
import{ListTraining_ROUTE} from "./list-training/listTraining.route"

export const Dashbaord_ROUTE: Routes = [

     { path: '', component: MainPageComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'listTraining', component: ListTrainingComponent ,children:ListTraining_ROUTE}


]