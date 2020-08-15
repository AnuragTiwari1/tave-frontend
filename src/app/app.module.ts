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
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventComponent as CalendarEventComponent } from './pages/calendar/components/event/event.component';
import { ComposeComponent as MailComposeComponent } from './pages/mail/components/compose/compose.component';
import { AddEventComponent as AddCalendarEventComponent } from './pages/calendar/components/add-event/add-event.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { IntegrationSuccessComponent } from './integration-success/integration-success.component';
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
    CalendarEventComponent,
    MailComposeComponent,
    AddCalendarEventComponent,
    IntegrationSuccessComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 5000,
      progressBar: true,
      preventDuplicates: true,
    }), // ToastrModule added
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    HttpClientModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'app/dashboard', pathMatch: 'full' },
      { path: 'integration_success', component: IntegrationSuccessComponent },
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
              {
                path: 'add_event',
                component: AddCalendarEventComponent,
              },
              {
                path: 'events',
                component: CalendarEventComponent,
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
              {
                path: 'compose',
                component: MailComposeComponent,
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
    NgbModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
