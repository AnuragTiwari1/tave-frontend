import { Component, OnInit } from '@angular/core';
import { LeadsService } from 'src/app/services/leads.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface IContactOverView {
  name: string;
  companyName: string;
  phone: string;
  leadSource: string;
  jobDate: Date;
  jobType: string;
  leadStatus: string;
  notes: string;
}
@Component({
  selector: 'app-lead-overview',
  templateUrl: './lead-overview.component.html',
  styleUrls: ['./lead-overview.component.scss'],
})
export class LeadOverviewComponent implements OnInit {
  closeResult = '';
  noteFormSubmitAttempt: boolean;
  contactSubmitAttempt: boolean;
  editNoteId: any;

  notesForm = new FormGroup({
    note: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
  });

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  });

  leadDetails: any;

  constructor(
    public leadServices: LeadsService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.leadServices
      .getLeadByID(this.leadServices.currentId)
      .subscribe((data) => {
        this.leadDetails = this.leadServices.currentLead;
      });
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

  onNoteSubmit() {
    this.noteFormSubmitAttempt = true;

    const val = this.notesForm.value;

    if (this.notesForm.valid) {
      if (this.editNoteId) {
        this.leadServices.editNote(this.editNoteId, val).subscribe(() => {
          this.modalService.dismissAll();
          this.noteFormSubmitAttempt = false;
          this.editNoteId = null;
          this.notesForm.reset({});
        });
      } else {
        this.leadServices
          .addNote(this.leadServices.currentId, val)
          .subscribe(() => {
            this.modalService.dismissAll();
            this.noteFormSubmitAttempt = false;
            this.editNoteId = null;
            this.notesForm.reset({});
          });
      }
    }
  }

  onContactSubmit() {
    this.contactSubmitAttempt = true;

    const val = this.contactForm.value;
    if (this.contactForm.valid) {
      this.leadServices
        .addContract(this.leadServices.currentId, val)
        .subscribe(() => {
          this.modalService.dismissAll();
          this.contactSubmitAttempt = false;
          this.contactForm.reset({});
        });
    }
  }

  log(p) {
    console.log(p);
  }

  handleNoteEditClick(note, content) {
    this.editNoteId = note.id;
    this.notesForm.reset({ note: note.notes, type: note.note_type });
    this.open(content);
  }
}
