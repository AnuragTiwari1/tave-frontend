import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LeadsService {
  constructor(private http: HttpClient) {}

  createLeads(formObj: any) {
    const form = new FormData();
    // formData.append('name', formObj.name);
    // formData.append('brand_id', '1');
    // formData.append('job_type_id', '1');
    // formData.append('date', formObj.jobDate);
    // formData.append('lead_note', formObj.leadNote);
    // formData.append('rating', formObj.rating);
    // formData.append('booking_confidence', formObj.confidence);
    // formData.append('will_decide_by', formObj.decideBy);
    // formData.append('max_budget', formObj.maxBudget);
    // formData.append('lead_source_id', '1');
    // formData.append('stage', '1');
    // formData.append('lead_inquired_on', formObj.leadInquiredOn);
    // formData.append('job_was_booked_on', formObj.bookedO

    const formData = {};
    formData['brand_id'] = 1;
    formData['job_type_id'] = 1;
    formData['date'] = formObj.jobDate;
    formData['lead_note'] = formObj.leadNote;
    formData['rating'] = formObj.rating;
    formData['booking_confidence'] = formObj.confidence;
    formData['will_decide_by'] = formObj.decideBy;
    formData['max_budget'] = formObj.maxBudget;
    formData['lead_source_id'] = '1';
    formData['stage'] = '1';
    formData['lead_inquired_on'] = formObj.leadInquiredOn;
    formData['job_was_booked_on'] = formObj.booked;

    form.append('data', JSON.stringify(formData));

    return this.http.post('/Lead/createJobSubmit', formData);
  }
}
