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
      .pipe(tap((data) => this.setLead(data)));
  }

  getCleanApiData(data) {
    const leadData = data.data.result;

    const notes = data.data.notes;
    const quotes = data.data.quotes;
    const orders = data.data.orders;
    const ledger = data.data.ledger;
    const acc_payable = data.data.acc_payable;

    const { events, ...leadProperties } = leadData;

    const currentLead = leadProperties;
    currentLead.events = events[0];
    currentLead.notes = notes;
    currentLead.quotes = quotes;
    currentLead.orders = orders;
    currentLead.ledger = ledger;
    currentLead.acc_payable = acc_payable;

    currentLead.profit_total = data.data.profit_total;
    currentLead.invoiced_total = data.data.invoiced_total;
    currentLead.credit_total = data.data.credit_total;
    currentLead.cost_total = data.data.cost_total;

    currentLead.contracts = data.data.contracts;

    return currentLead;
  }

  setLead(data) {
    this.currentLead = this.getCleanApiData(data);

    return this.currentLead;
  }

  setActiveTab(index: number) {
    this.activeTabIndex = index;
  }

  addNote(leadId, formObj) {
    const formData = new FormData();
    formData.append('note_type', formObj.type);
    formData.append('notes', formObj.note);
    return this.http.post(`/Lead/createNote/${leadId}`, formData).pipe(
      tap(() => {
        window.location.reload();
      })
    );
  }

  addQuotes(leadId, formObj) {
    const formData = new FormData();

    formData.append('name', formObj.name);
    formData.append('quote_type', formObj.type);
    formData.append('nettotal', formObj.price);
    formData.append('expiration', formObj.expiration);

    return this.http.post(`/Lead/createQuote/${leadId}`, formData).pipe(
      tap(() => {
        window.location.reload();
      })
    );
  }

  addOrders(leadId, formObj) {
    const formData = new FormData();
    formData.append('status', 'Paid');
    formData.append('name', formObj.name);
    formData.append('sold_to', formObj.soldTo);
    formData.append('sold_on', formObj.soldOn);
    formData.append('next_invoice', formObj.nextInvoice);
    formData.append('due_by', formObj.dueBy);
    formData.append('balance', formObj.balance);
    formData.append('order_total', formObj.orderTotal);

    return this.http.post(`/Lead/createOrder/${leadId}`, formData).pipe(
      tap(() => {
        window.location.reload();
      })
    );
  }

  addContract(leadId, formObj) {
    const formData = new FormData();

    formData.append('name', formObj.name);
    formData.append('client_signature', formObj.is_signed);
    formData.append('recepients', formObj.recipient);

    return this.http.post(`/Lead/createContract/${leadId}`, formData).pipe(
      tap(() => {
        window.location.reload();
      })
    );
  }

  addLedger(leadId, formObj) {
    const formData = new FormData();

    formData.append('date', formObj.date);
    formData.append('kind', formObj.kind);
    formData.append('status', formObj.status);
    formData.append('who_meme', formObj.who_meme);
    formData.append('applies_to', formObj.applies_to);
    formData.append('credit', formObj.credit);
    formData.append('cost', formObj.cost);
    formData.append('revenue', formObj.revenue);

    return this.http
      .post(`/Lead/createFinanceNewCreditLedger/${leadId}`, formData)
      .pipe(
        tap(() => {
          window.location.reload();
        })
      );
  }

  addAccountPayable(leadId, formObj) {
    const formData = new FormData();

    formData.append('date', formObj.date);
    formData.append('category', formObj.category);
    formData.append('status', formObj.status);
    formData.append('payee_name', formObj.payee_name);
    formData.append('applies_to', formObj.applies_to);
    formData.append('credit', formObj.credit);

    return this.http
      .post(`/Lead/createFinanceNewCreditAccPayable/${leadId}`, formData)
      .pipe(
        tap(() => {
          window.location.reload();
        })
      );
  }

  setLeadId(leadId) {
    this.currentId = leadId;
  }
}
