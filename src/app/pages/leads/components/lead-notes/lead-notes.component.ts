import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LeadsService } from 'src/app/services/leads.service';

@Component({
  selector: 'app-lead-notes',
  templateUrl: './lead-notes.component.html',
  styleUrls: ['./lead-notes.component.scss'],
})
export class LeadNotesComponent implements OnInit {
  editNoteId: any;
  closeResult = '';
  noteFormSubmitAttempt: boolean;

  notesForm = new FormGroup({
    note: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
  });

  constructor(
    public leadServices: LeadsService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}

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
        });
      } else {
        this.leadServices
          .addNote(this.leadServices.currentId, val)
          .subscribe(() => {
            this.modalService.dismissAll();
            this.noteFormSubmitAttempt = false;
            this.editNoteId = null;
          });
      }
    }
  }

  handleNoteEditClick(note, content) {
    this.editNoteId = note.id;
    this.notesForm.reset({
      note: note.notes,
      type: note.note_type || 'Primary',
    });
    this.open(content);
  }
}
