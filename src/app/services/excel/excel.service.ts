import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from './../../../environments/environment';
import { FilterInterface, GlobalFiltersInterface } from './filters.interface';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor(private http: HttpClient) { }

  getExcel() {
    return new Promise((resolve, reject) => {
      this.http.get(`${environment.apiUrl}:${environment.apiPort}/excel`)
      .subscribe(
        (response) => {
          resolve(response)
        },
        (error) => {
          reject(error.error)
        }
      )
    });
  }

  getAllHeader() {
    return new Promise((resolve, reject) => {
      this.http.get(`${environment.apiUrl}:${environment.apiPort}/excel/header`)
      .subscribe(
        (response) => {
          resolve(response)
        },
        (error) => {
          reject(error.error)
        }
      )
    });
  }

  getFilters() {
    return new Promise((resolve, reject) => {
      this.http.get(`${environment.apiUrl}:${environment.apiPort}/excel/filters`)
      .subscribe(
        (response) => {
          resolve(response)
        },
        (error) => {
          reject(error.error)
        }
      )
    });
  }

  postFilters(newFilter: FilterInterface[]) {
    return new Promise((resolve, reject) => {
      this.http.post(`${environment.apiUrl}:${environment.apiPort}/excel/filters`, newFilter)
      .subscribe(
        (response) => {
          resolve(response)
        },
        (error) => {
          reject(error.error)
        }
      )
    });
  }

  getCellAutocomplete(header: string, word: string) {
    let body = {
      'header': header,
      'word': word
    }

    return new Promise((resolve, reject) => {
      this.http.post(`${environment.apiUrl}:${environment.apiPort}/excel/cell/autocomplete`, body)
      .subscribe(
        (response) => {
          resolve(response)
        },
        (error) => {
          reject(error.error)
        }
      )
    });
  }
}