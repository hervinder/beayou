import { Routes, RouterModule } from '@angular/router';
import { AppSignupComponent } from './signup/app-signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';

const App_Routes: Routes=[
  
    {path:'', component:HomeComponent},
    {path:'signup', component:AppSignupComponent},
     {path:'signin', component:SigninComponent}
    
];

export const APP_ROUTES_PROVIDERS = RouterModule.forRoot(App_Routes);