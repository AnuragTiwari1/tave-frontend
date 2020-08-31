import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LeadsService } from 'src/app/services/leads.service';
@Component({
  selector: 'app-lead-quotes-and-orders',
  templateUrl: './lead-quotes-and-orders.component.html',
  styleUrls: ['./lead-quotes-and-orders.component.scss'],
})
export class LeadQuotesAndOrdersComponent implements OnInit {
  quotesFormSubmitAttempt: boolean;
  orderFormSubmitAttempt: boolean;
  editQuoteId: any;

  quotes = [];
  closeResult = '';
  orders = [];

  quotesForm = new FormGroup({
    type: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    lastViewed: new FormControl(''),
    views: new FormControl(''),
    expiration: new FormControl('', [Validators.required]),
  });

  orderForm = new FormGroup({
    status: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    soldTo: new FormControl('', [Validators.required]),
    soldOn: new FormControl('', [Validators.required]),
    nextInvoice: new FormControl('', [Validators.required]),
    dueBy: new FormControl('', [Validators.required]),
    balance: new FormControl('', [Validators.required]),
    orderTotal: new FormControl('', [Validators.required]),
  });

  constructor(
    public leadServices: LeadsService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.quotes = this.leadServices.currentLead.quotes;
    this.orders = this.leadServices.currentLead.orders;
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onQuotesSubmit() {
    this.quotesFormSubmitAttempt = true;
    const val = this.quotesForm.value;

    if (this.quotesForm.valid) {
      if (this.editQuoteId) {
        this.leadServices.editQuotes(this.editQuoteId, val).subscribe(() => {
          this.modalService.dismissAll();
          this.quotesFormSubmitAttempt = false;
          this.editQuoteId
        });
      } else {
        this.leadServices
          .addQuotes(this.leadServices.currentId, val)
          .subscribe(() => {
            this.modalService.dismissAll();
            this.quotesFormSubmitAttempt = false;
          });
      }
    }
  }

  onOrderSubmit() {
    this.orderFormSubmitAttempt = true;
    const val = this.orderForm.value;

    this.leadServices
      .addOrders(this.leadServices.currentId, val)
      .subscribe(() => {
        this.modalService.dismissAll();
        this.orderFormSubmitAttempt = false;
      });
  }

  handleQuoteEditClick(quote, content) {
    this.editQuoteId = quote.id;
    this.quotesForm.reset({
      type: quote.quote_type,
      name: quote.name,
      price: quote.nettotal,
      lastViewed: '',
      views: 0,
      expiration: quote.expiration,
    });
    this.open(content);
  }
}
