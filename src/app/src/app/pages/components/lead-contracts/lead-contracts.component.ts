import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface IContract {
  name: string;
  recipients: string;
  isSigned: boolean;
}

const ELEMENT_DATA: IContract[] = [
  {
    name: 'Licence for right',
    recipients: 'Jhon Smit',
    isSigned: true,
  },
  {
    name: 'Licence for right',
    recipients: 'Jhon Smit',
    isSigned: true,
  },
  {
    name: 'Licence for right',
    recipients: 'Jhon Smit',
    isSigned: true,
  },
  {
    name: 'Licence for right',
    recipients: 'Jhon Smit',
    isSigned: true,
  },
  {
    name: 'Licence for right',
    recipients: 'Jhon Smit',
    isSigned: true,
  },
];

@Component({
  selector: 'app-lead-contracts',
  templateUrl: './lead-contracts.component.html',
  styleUrls: ['./lead-contracts.component.scss'],
})
export class LeadContractsComponent implements OnInit {
  displayedColumns: string[] = [
    'select',
    'position',
    'name',
    'weight',
    'symbol',
  ];
  dataSource = new MatTableDataSource<IContract>(ELEMENT_DATA);
  selection = new SelectionModel<IContract>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
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

  constructor() {}

  ngOnInit(): void {}
}
