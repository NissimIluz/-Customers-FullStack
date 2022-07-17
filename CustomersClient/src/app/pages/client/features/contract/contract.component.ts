import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Contract } from 'src/app/models/contract';
import { Package } from 'src/app/models/Package';
@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {
  private dataSource: MatTableDataSource<Package>;
  @Input() contract: Contract;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort  = new MatSort();;

  displayedColumns = ['packageType', 'packageName', 'packageQuantity', 'packageBalance']
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    if (this.contract) {
      this.dataSource = new MatTableDataSource<Package>(this.contract.packagesList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
     this.translatePaginator();
  }
  private translatePaginator() {
    const paginatorIntl = this.paginator._intl

    paginatorIntl.itemsPerPageLabel = 'מספר פרטים בעמוד';
    paginatorIntl.firstPageLabel = 'העמוד הראשון';
    paginatorIntl.previousPageLabel = 'הבא';
    paginatorIntl.nextPageLabel = 'הקודם';
    paginatorIntl.lastPageLabel = 'העמוד האחרון';

    paginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number) => {
      if (length == 0 || pageSize == 0) { return `0 van ${length}`; }

      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;

      return `${startIndex + 1} - ${endIndex} מתוך ${length}`;
    };
  }
}
