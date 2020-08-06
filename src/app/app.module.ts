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
import { FieldErrorDisplayComponent } from './components/field-error-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './http-interceptors/index';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponentComponent } from './pages/dashboard/dashboard-component/dashboard-component.component';
import { OverviewComponent as DashboardOverviewComponent } from './pages/dashboard/dashboardComponent/overview/overview.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { OverviewComponent as CalendarOverviewComponent } from './pages/calendar/components/overview/overview.component';
import { MailComponent } from './pages/mail/mail.component';
import { OutboxComponent as MailOutboxComponent } from './pages/mail/component/outbox/outbox.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CreateAccountComponent,
    ForgotPasswordComponent,
    LoginComponentComponent,
    SetPasswordComponent,
    FieldErrorDisplayComponent,
    DashboardComponentComponent,
    DashboardOverviewComponent,
    CalendarComponent,
    CalendarOverviewComponent,
    MailComponent,
    MailOutboxComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 5000,
      progressBar: true,
      preventDuplicates: true,
    }), // ToastrModule added
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'app/dashboard', pathMatch: 'full' },
      {
        path: 'app',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: 'dashboard',
            component: DashboardComponentComponent,
            children: [
              {
                path: '',
                component: DashboardOverviewComponent,
              },
            ],
          },
          {
            path: 'calendar',
            component: CalendarComponent,
            children: [
              {
                path: '',
                component: CalendarOverviewComponent,
              },
            ],
          },

          {
            path: 'mail',
            component: MailComponent,
            children: [
              {
                path: '',
                component: MailOutboxComponent,
              },
            ],
          },
        ],
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
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
