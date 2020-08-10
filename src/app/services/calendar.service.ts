import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICalendarEvents } from '../interfaces/calendarEvents';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  allEvents: ICalendarEvents[];
  constructor(private http: HttpClient) {}

  add(location, color, client_name, startDate, endDate, title) {
    const formData = new FormData();
    formData.append('location', location);
    formData.append('color', color);
    formData.append('client_name', client_name);
    formData.append('title', title);
    formData.append('startDate', startDate);
    formData.append('endDate', endDate);

    return this.http.post<{ message: string }>('/calendar/add_event', formData);
  }

  getEvents() {
    return this.http.get<{ data: ICalendarEvents[] }>('/calendar/list_event');
  }
}
