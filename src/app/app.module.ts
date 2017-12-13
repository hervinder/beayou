import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
@NgModule({
  declarations: [
    AppComponent,
    YooHeaderComponent,
    AppSignupComponent,
    HomeComponent,
    SigninComponent,
    SignupTalentComponent,
    MemberComponent,
    TrainingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTES_PROVIDERS
  ],
  providers: [RootService],
  bootstrap: [AppComponent]
})
export class AppModule { }
