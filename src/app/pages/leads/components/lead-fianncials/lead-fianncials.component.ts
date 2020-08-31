import { Component, OnInit } from '@angular/core';
import { LeadsService } from 'src/app/services/leads.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-lead-fianncials',
  templateUrl: './lead-fianncials.component.html',
  styleUrls: ['./lead-fianncials.component.scss'],
})
export class LeadFianncialsComponent implements OnInit {
  showExpanse = false;
  closeResult = '';

  ledgerForm = new FormGroup({
    date: new FormControl('', [Validators.required]),
    kind: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    who_meme: new FormControl('', [Validators.required]),
    applies_to: new FormControl('', [Validators.required]),
    credit: new FormControl('', [Validators.required]),
    cost: new FormControl('', [Validators.required]),
    revenue: new FormControl('', [Validators.required]),
  });

  accountPayableForm = new FormGroup({
    date: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    payee_name: new FormControl('', [Validators.required]),
    applies_to: new FormControl('', [Validators.required]),
    credit: new FormControl('', [Validators.required]),
  });

  constructor(
    public leadServices: LeadsService,
    private modalService: NgbModal
  ) {}

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

  ngOnInit(): void {}

  onLedgerSubmit() {
    this.leadServices
      .addLedger(this.leadServices.currentId, this.ledgerForm.value)
      .subscribe(() => {
        this.modalService.dismissAll();
        this.ledgerForm.reset({});
      });
  }

  onAccountPayableSubmit() {
    this.leadServices
      .addAccountPayable(
        this.leadServices.currentId,
        this.accountPayableForm.value
      )
      .subscribe(() => {
        this.modalService.dismissAll();
        this.ledgerForm.reset({});
      });
  }
}
