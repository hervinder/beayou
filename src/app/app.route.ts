import { Routes, RouterModule } from '@angular/router';
import { AppSignupComponent } from './signup/app-signup.component';
import { SignupTalentComponent } from './signup/signup-talent/signup-talent.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { MemberComponent  } from './shared/member/member.component';
import {TrainingComponent} from './signup/training/training.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfileComponent} from './dashboard/profile/profile.component';
import {ListTrainingComponent} from './dashboard/list-training/list-training.component';
import { Dashbaord_ROUTE } from './dashboard/dashboard.route';

const App_Routes: Routes=[
  
    {path:'', component:HomeComponent},
    {path:'signup', component:MemberComponent},
    {path:'signup/company', component:AppSignupComponent},
    {path:'signup/talent', component:SignupTalentComponent},
    {path:'signup/training', component:TrainingComponent},
    {path:'signin', component:SigninComponent},
    {path: 'dashboardHome', redirectTo: '/dashboard', pathMatch: 'full' },
    {path:'dashboard',component: DashboardComponent,children:Dashbaord_ROUTE},
    // {path:'dashboard/profile', component:ProfileComponent},
    // {path:'dashboard/listTraining', component:ListTrainingComponent},
    // {path:'dashboard/profile/listTraining', component:ListTrainingComponent}
    
];

export const APP_ROUTES_PROVIDERS = RouterModule.forRoot(App_Routes);