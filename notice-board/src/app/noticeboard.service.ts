import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticeboardService {
  url = 'http://localhost:3000/advertisements';

  constructor(private http: HttpClient) {
  }

  getList() {
    return this.http.get(this.url);
  }

  saveNotice(data) {
    return this.http.post(this.url, data);
  }

  deleteNotice(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
