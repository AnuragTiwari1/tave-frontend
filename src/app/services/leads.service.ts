import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LeadsService {
  currentId: string;
  currentLead: any;
  activeTabIndex: number;

  constructor(private http: HttpClient) {
    this.activeTabIndex = 0;
  }

  createLeads(formObj: any) {
    const formData = new FormData();

    formData.append(
      'data',
      JSON.stringify({
        name: formObj.name,
        brand_id: 1,
        job_type_id: 1,
        date: formObj.jobDate,
        lead_note: formObj.leadNote,
        rating: formObj.rating,
        booking_confidence: formObj.confidence,
        will_decide_by: formObj.decideBy,
        max_budget: formObj.maxBudget,
        lead_source_id: 1,
        stage: formObj.stage,
        lead_inquired_on: formObj.leadInquiredOn,
        job_was_booked_on: formObj.bookedOn,
        // name: 'Andndk',
        // brand_id: 1,
        // job_type_id: 1,
        // date: new Date(),
        // lead_note: 'kjdkdkdk',
        // rating: 1,
        // booking_confidence: 1,
        // will_decide_by: new Date(),
        // max_budget: 10000,
        // lead_source_id: 1,
        // stage: 'kdkdkdk',
        // lead_inquired_on: 1,
        // job_was_booked_on: new Date(),
      })
    );
    formData.append('contact_card_count', '1');
    formData.append(
      'contacts',
      JSON.stringify({
        name: formObj.contact_name,
        default_job_role_id: formObj.contact_job_type,
        is_company: 1,
        is_client: 1,
        email: formObj.contact_email,
        mobile: formObj.contact_phone,
        address: formObj.contact_address,
      })
    );
    formData.append('event_card_count', '1');
    formData.append(
      'event',
      JSON.stringify({
        event_type_id: formObj.event_type_id,
        location: formObj.event_location,
        from_date: formObj.event_from_date,
        to_date: formObj.event_to_date,
        is_all_day_event: 1,
        is_confirmed: 1,
        is_primary: 1,
      })
    );

    // form.append('data', JSON.stringify(formData));

    return this.http.post('/Lead/createJobSubmit', formData);
  }

  getAllLeads() {
    return this.http.get<{ data: any[] }>('/Lead/getAllLead');
  }

  getLeadByID(id: any) {
    this.currentId = id;
    return this.http
      .get<{ data: any }>(`/Lead/viewLeadDetail/${id}`)
      .pipe(tap(this.setLead));
  }

  setLead(data) {
    console.log('setting the current lead to>>>>>>>', data);
    this.currentLead = data;
  }

  setActiveTab(index: number) {
    this.activeTabIndex = index;
  }

  addNote(leadId, formObj) {
    const formData = new FormData();
    return this.http.post('/Lead/addNote', formData);
  }

  addContact(leadId, formObj) {
    const formData = new FormData();
    return this.http.post('/Lead/addContact', formData);
  }

  addQuotes(leadId, formObj) {
    const formData = new FormData();
    return this.http.post('/Lead/addQuotes', formData);
  }

  addOrders(leadId, formObj) {
    const formData = new FormData();
    return this.http.post('/Lead/addOrders', formData);
  }
}
