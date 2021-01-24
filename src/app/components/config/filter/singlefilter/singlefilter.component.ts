import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, startWith, switchMap, tap } from 'rxjs/operators';

import { ExcelService } from 'src/app/services/excel/excel.service';
import { FilterInterface, FilterType } from 'src/app/services/excel/filters.interface';

@Component({
  selector: 'app-singlefilter',
  templateUrl: './singlefilter.component.html',
  styleUrls: ['./singlefilter.component.scss']
})
export class SinglefilterComponent implements OnInit {

  @Input() filter: FilterInterface;

  filterType = FilterType;
  newFilterValue: string;
  filterAllTypes = []
  allHeader: string[] = [];
  headerAutocomplete: Observable<string[]>;
  headerController = new FormControl();
  filterAutocomplete: string[];
  filterController = new FormControl();
  filterAutoIsLoading: boolean = false;

  constructor(private excelService: ExcelService) {
  }

  ngOnInit(): void {
    this.loadAllHeader();
    this.loadAllTypes();
    this.loadHeaderAutocomplete();
    this.loadFilterAutocomplete();
  }

  private loadAllHeader(): void {
    this.excelService.getAllHeader()
    .then((data: { headers: string[] }) => {
      this.allHeader = data.headers;
    })
    .catch((error) => {
    })
  }

  private loadAllTypes() {
    this.filterAllTypes = Object.values(this.filterType).filter(function(k) {
      return !isNaN(Number(k));
    });
  }

  private loadHeaderAutocomplete(): void {
    this.headerAutocomplete = this.headerController.valueChanges.pipe(
      startWith(''),
      map(value => this.allHeader.filter(
          option => option.toLowerCase()
                .indexOf(value.toLowerCase()) === 0)
      )
    );
  }

  private loadFilterAutocomplete(): void {
    this.filterController.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter((query: string) =>  query?.length > 3),
      tap(() => {
        this.filterAutocomplete = [];
        this.filterAutoIsLoading = true;
      }),
      switchMap(value => {
        this.getAutoCompleteProp(value || '')
        return value
      })
    ).subscribe((value) =>  this.filterAutocomplete = this.filterAutocomplete )
  }

  removeFilter(filter: string): void {
    const index: number = this.filter.filter.indexOf(filter);
    if (index !== -1) {
        this.filter.filter.splice(index, 1);
    }
  }

  addFilter(): void {
    if (this.newFilterValue) {
      this.filter.filter.push(this.newFilterValue);
      this.newFilterValue = "";
      this.filterAutocomplete = []
    }
  }

  private getAutoCompleteProp(word: string): void {
    this.excelService.getCellAutocomplete(this.filter.label, word)
    .then((data: { propositions: string[] }) => {
      this.filterAutoIsLoading = false;
      this.filterAutocomplete = data.propositions;
    })
    .catch((error) => {
      this.filterAutoIsLoading = false;
    })
  }

}
