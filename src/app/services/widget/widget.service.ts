import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  constructor(private http: HttpClient) { }

    widgetConfig() {
    }

}