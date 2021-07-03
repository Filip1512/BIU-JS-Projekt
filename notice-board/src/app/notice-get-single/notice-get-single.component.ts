import { Component, OnInit } from '@angular/core';
import {NoticeboardService} from '../noticeboard.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notice-get-single',
  templateUrl: './notice-get-single.component.html',
  styleUrls: ['./notice-get-single.component.css']
})
export class NoticeGetSingleComponent implements OnInit {

  constructor(private router: ActivatedRoute, private notice: NoticeboardService) { }
  singleNotice = {};
  ngOnInit(): void {
    this.notice.getCurrentNotice(this.router.snapshot.params.id).subscribe((result) => {
      console.warn(result);
      this.singleNotice = result;
    });
  }

}
