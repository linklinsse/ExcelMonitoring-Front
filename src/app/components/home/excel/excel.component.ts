import { Component, OnInit } from '@angular/core';

import { ExcelService } from 'src/app/services/excel/excel.service';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.scss']
})
export class ExcelComponent implements OnInit {

  tabHeader: string[] = [];
  tabData = [];
  loading: boolean = true;
  error: string = undefined;

  constructor(private excelService: ExcelService) { }

  ngOnInit(): void {
    this.loadExcel()
  }

  loadExcel(): void {
    this.loading = true;
    this.error = undefined;

    this.excelService.getExcel()
    .then((data: { header: string[], data: [] }) => {
      this.tabHeader = data.header;
      this.tabData = data.data;
      this.loading = false;
    })
    .catch((error: { message: string }) => {
      this.error = error.message;
      this.loading = false;
    })
  }

}
