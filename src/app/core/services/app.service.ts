import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  apiUrl: any = environment.apiUrl;
  constructor(private http: HttpClient) { }

  create() {
    return this.http.post(`${this.apiUrl}/user/login`, {
      username: 'anil', password: 'anil'
    })
  }
  read(id: any) {
    return this.http.get(`${this.apiUrl}/user/userDetails?id=` + { id })
  }
  update(id: any) {
    return this.http.put(`${this.apiUrl}/user/updated?id=` + { id }, {
      username: 'anil', password: 'anil'
    })
  }
  delete(id: any) {
    return this.http.delete(`${this.apiUrl}/user/userDelete?id=` + { id })
  }

}
