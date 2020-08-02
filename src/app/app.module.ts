import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './auth-guard.guard';
import { CreateAccountComponent } from './pages/login/create-account/create-account.component';
import { ForgotPasswordComponent } from './pages/login/forgot-password/forgot-password.component';
import { LoginComponentComponent } from './pages/login/login-component/login-component.component';
import { SetPasswordComponent } from './pages/login/set-password/set-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CreateAccountComponent,
    ForgotPasswordComponent,
    LoginComponentComponent,
    SetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'login',
        component: LoginComponent,
        children: [
          {
            path: '',
            component: LoginComponentComponent,
          },
          {
            path: 'createAccount',
            component: CreateAccountComponent,
          },
          {
            path: 'forgotPassword',
            component: ForgotPasswordComponent,
          },
          {
            path: 'setPassword',
            component: SetPasswordComponent,
          },
        ],
      },
    ]),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
