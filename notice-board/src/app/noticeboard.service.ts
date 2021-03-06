import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {NoticeGetSingleComponent} from './notice-get-single/notice-get-single.component';

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
  getCurrentNotice(id: any)
  {
    return this.http.get(`${this.url}/${id}`);
  }
  updateNotice(id, data)
  {
    return this.http.put(`${this.url}/${id}`, data);
  }
  getSingleNotice(id: any)
  {
  }
}
