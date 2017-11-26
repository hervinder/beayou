import { Routes, RouterModule } from '@angular/router';
import { AppSignupComponent } from './signup/app-signup.component';
import { SignupTalentComponent } from './signup/signup-talent/signup-talent.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';


const App_Routes: Routes=[
  
    {path:'', component:HomeComponent},
    {path:'signup', component:AppSignupComponent},
     {path:'signup/talent', component:SignupTalentComponent},
     {path:'signin', component:SigninComponent}
    
];

export const APP_ROUTES_PROVIDERS = RouterModule.forRoot(App_Routes);