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
import { LeadsComponent } from './pages/leads/leads.component';
import { LeadMainComponent } from './pages/leads/components/lead-main/lead-main.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { LeadOverviewComponent } from './pages/leads/components/lead-overview/lead-overview.component';
import { LeadScheduleComponent } from './pages/leads/components/lead-schedule/lead-schedule.component';
import { LeadQuotesAndOrdersComponent } from './pages/leads/components/lead-quotes-and-orders/lead-quotes-and-orders.component';
import { LeadFianncialsComponent } from './pages/leads/components/lead-fianncials/lead-fianncials.component';
import { LeadMailComponent } from './pages/leads/components/lead-mail/lead-mail.component';
import { LeadContractsComponent } from './pages/leads/components/lead-contracts/lead-contracts.component';
import { LeadQuestionnairesComponent } from './pages/leads/components/lead-questionnaires/lead-questionnaires.component';
import { LeadTasksComponent } from './pages/leads/components/lead-tasks/lead-tasks.component';
import { LeadNotesComponent } from './pages/leads/components/lead-notes/lead-notes.component';
import { LeadFilesComponent } from './pages/leads/components/lead-files/lead-files.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

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
    LeadsComponent,
    LeadMainComponent,
    LeadOverviewComponent,
    LeadScheduleComponent,
    LeadQuotesAndOrdersComponent,
    LeadFianncialsComponent,
    LeadMailComponent,
    LeadContractsComponent,
    LeadQuestionnairesComponent,
    LeadTasksComponent,
    LeadNotesComponent,
    LeadFilesComponent,
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
            path: 'leads',
            component: LeadsComponent,
            children: [
              {
                path: '',
                component: LeadMainComponent,
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
    MatTabsModule,
    MatTableModule,
    CdkTableModule,
    MatCheckboxModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
