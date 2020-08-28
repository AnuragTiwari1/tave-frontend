import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LeadsService {
  currentId: string;
  currentLead: any;

  constructor(private http: HttpClient) {}

  createLeads(formObj: any) {
    const formData = new FormData();
    // formData.append('name', );
    // formData.append('brand_id', );
    // formData.append('job_type_id',);
    // formData.append('date', );
    // formData.append('lead_note', );
    // formData.append('rating', );
    // formData.append('booking_confidence',);
    // formData.append('will_decide_by', );
    // formData.append('max_budget', );
    // formData.append('lead_source_id',);
    // formData.append('stage', );
    // formData.append('lead_inquired_on', );
    // formData.append('job_was_booked_on', );

    // formData.append('', 'Anurag');
    // formData.append('', '1');
    // formData.append('', '1');
    // formData.append('', 'Anurag');
    // formData.append('', 'Anurag');
    // formData.append('', '1');
    // formData.append('', 1);
    // formData.append('', new Date().toString());
    // formData.append('', '10000');
    // formData.append('', '1');
    // formData.append('', '1');
    // formData.append('', new Date().toString());
    // formData.append('', new Date().toString());
    formData.append(
      'data',
      JSON.stringify({
        // name: formObj.name,
        // brand_id: 1,
        // job_type_id: 1,
        // date: formObj.jobDate,
        // lead_note: formObj.leadNote,
        // rating: formObj.rating,
        // booking_confidence: formObj.confidence,
        // will_decide_by: formObj.decideBy,
        // max_budget: formObj.maIxBudget,
        // lead_source_id: 1,
        // stage: formObj.stage,
        // lead_inquired_on: formObj.leadInquiredOn,
        // job_was_booked_on: formObj.bookedOn

        name: 'Andndk',
        brand_id: 1,
        job_type_id: 1,
        date: new Date(),
        lead_note: 'kjdkdkdk',
        rating: 1,
        booking_confidence: 1,
        will_decide_by: new Date(),
        max_budget: 10000,
        lead_source_id: 1,
        stage: 'kdkdkdk',
        lead_inquired_on: 1,
        job_was_booked_on: new Date(),
      })
    );
    formData.append('contact_card_count', '1');
    formData.append(
      'contacts',
      JSON.stringify({
        name: 'Anurag Tiwari',
        default_job_role_id: 10,
        is_company: 1,
        is_client: 1,
        email: 'anuragweb@gmail.com',
        mobile: '9607155846',
        address: 'Pune, India',
      })
    );
    formData.append('event_card_count', '1');
    formData.append(
      'event',
      JSON.stringify({
        event_type_id: 3,
        location: 2323,
        from_date: new Date(),
        to_date: new Date(),
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
}
