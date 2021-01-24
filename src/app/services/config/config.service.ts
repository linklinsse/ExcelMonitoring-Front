import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

    getConfig() {
    }

    postConfig() {
    }

}

//   example() {
//     const body =  new HttpParams()
//     .set('ae', 'ytes');
//     return new Promise((resolve, reject) => {
//       this.http.get(`${environment.apiUrl}:${environment.apiPort}/monitoring/tick`)
//         .subscribe(
//           (response) => {
//             resolve(response)
//           },
//           (error) => {
//             reject(error.error)
//           }
//         )
//       });
//   }
