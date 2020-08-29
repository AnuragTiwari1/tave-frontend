import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LeadsService } from 'src/app/services/leads.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface IContract {
  name: string;
  recipients: string;
  isSigned: boolean;
}

@Component({
  selector: 'app-lead-contracts',
  templateUrl: './lead-contracts.component.html',
  styleUrls: ['./lead-contracts.component.scss'],
})
export class LeadContractsComponent implements OnInit {
  closeResult = '';
  contractFormSubmitAttempt: boolean;

  contractForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    recipient: new FormControl('', [Validators.required]),
    is_signed: new FormControl('', [Validators.required]),
  });

  displayedColumns: string[] = [
    'select',
    'position',
    'name',
    'weight',
    'symbol',
  ];
  dataSource = new MatTableDataSource<IContract>();
  selection = new SelectionModel<IContract>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource?.data?.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: IContract): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.name
    }`;
  }

  constructor(
    public leadServices: LeadsService,
    private modalService: NgbModal
  ) {
    this.dataSource = this.leadServices?.currentLead?.contracts || [];
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

  ngOnInit(): void {}

  onContractSubmit() {
    const val = this.contractForm.value;

    this.leadServices.addContract(this.leadServices.currentId, val).subscribe();
  }
}
