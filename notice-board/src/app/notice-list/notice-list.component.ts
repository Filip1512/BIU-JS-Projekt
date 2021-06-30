import { Component, OnInit } from '@angular/core';
import { NoticeboardService } from '../noticeboard.service';

@Component({
  selector: 'app-notice-list',
  templateUrl: './notice-list.component.html',
  styleUrls: ['./notice-list.component.css']
})
export class NoticeListComponent implements OnInit {

  constructor(private notice: NoticeboardService) { }
  collection: any = [];
  ngOnInit(): void {
    this.notice.getList().subscribe((result) => {
      console.warn(result);
      this.collection = result;
    });
  }
  deleteNotice(item)
  {
    this.collection = this.collection.filter(e => e.id !== item);
    this.notice.deleteNotice(item).subscribe((result) => {
      console.warn('result', result);
    });
  }

}
