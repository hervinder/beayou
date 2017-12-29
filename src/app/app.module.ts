import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { YooHeaderComponent } from './yoo-header/yoo-header.component';
import { AppSignupComponent } from './signup/app-signup.component';
import { APP_ROUTES_PROVIDERS } from './app.route';
import { RootService } from './app.service';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupTalentComponent } from './signup/signup-talent/signup-talent.component';
import { MemberComponent } from './shared/member/member.component';
import { TrainingComponent } from './signup/training/training.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { DropdownDirective } from './dropdown.directive';
import { MainPageComponent } from './shared/main-page/main-page.component';
import { ProfileComponent } from './dashboard/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    YooHeaderComponent,
    AppSignupComponent,
    HomeComponent,
    SigninComponent,
    SignupTalentComponent,
    MemberComponent,
    TrainingComponent,
    DashboardComponent,
    HeaderComponent,
    DropdownDirective,
    MainPageComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTES_PROVIDERS,
    AngularFontAwesomeModule
  ],
  providers: [RootService],
  bootstrap: [AppComponent]
})
export class AppModule { }
