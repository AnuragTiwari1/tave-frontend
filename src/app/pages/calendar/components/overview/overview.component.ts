import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarDateFormatter,
  CalendarView,
} from 'angular-calendar';
import { Subject } from 'rxjs';
import { CustomDateFormatter } from './custom-date-formatter';
import { isSameMonth } from 'date-fns';
import { CalendarService } from '../../../../services/calendar.service';
import * as moment from 'moment';

const colors: any = {
  session: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  call: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  meetting: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter,
    },
  ],
})
export class OverviewComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [];

  activeDayIsOpen: boolean = false;

  constructor(private modal: NgbModal, private calSer: CalendarService) {}

  ngOnInit() {
    this.calSer.getEvents().subscribe((data) => {
      this.events = data.data.map((e) => ({
        start: moment(e.start_date).toDate(),
        title: e.title,
        color: colors[e.type],
        end: moment(e.end_date).toDate(),
      }));
    });
  }

  dayClicked({ date }: { date: Date }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
    }
  }

  setView(view: CalendarView, date?: Date) {
    this.view = view;

    if (date) {
      this.dayClicked({ date });
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
  }
}
