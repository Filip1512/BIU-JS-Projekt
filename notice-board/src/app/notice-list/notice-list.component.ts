import { Component, OnInit } from '@angular/core';
import { NoticeboardService } from '../noticeboard.service';

@Component({
  selector: 'app-notice-list',
  templateUrl: './notice-list.component.html',
  styleUrls: ['./notice-list.component.css']
})
export class NoticeListComponent implements OnInit {

  constructor(private notice: NoticeboardService) { }
  collection = {};
  ngOnInit(): void {
    this.notice.getList().subscribe((result) => {
      console.warn(result);
      this.collection = result;
    });
  }

}
