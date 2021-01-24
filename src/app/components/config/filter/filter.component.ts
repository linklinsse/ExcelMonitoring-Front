import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/app/services/excel/excel.service';
import { FilterInterface, GlobalFiltersInterface } from 'src/app/services/excel/filters.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  filters: FilterInterface[] = [];
  headers: string[] = []

  constructor(private excelService: ExcelService) { }

  ngOnInit(): void {
    this.loadFilters()
  }

  loadFilters() {
    this.excelService.getFilters()
    .then((data: GlobalFiltersInterface) => {
      this.filters = data.filters
    })
    .catch((error: string) => {
    })
  }

  saveFilter() {
    this.excelService.postFilters(this.filters)
    .then((data) => {
    })
    .catch((error) => {
    })
  }

  loadHeader() {
    this.excelService.getAllHeader()
    .then((data: { headers: string[] }) => {
      this.headers = data.headers
    })
    .catch((error: string) => {
    })
  }

  lineAutocomplete(header: string, name: string) {
    this.excelService.getCellAutocomplete(header, name)
  }

  addFilter() {
    this.filters.push({ label: "", type: 1, filter: [] })
  }

  removeFilter(delFilter: FilterInterface) {
    const index: number = this.filters.indexOf(delFilter);
    this.filters.splice(index, 1);
  }

}
