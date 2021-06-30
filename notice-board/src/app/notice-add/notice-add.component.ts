import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NoticeboardService } from '../noticeboard.service';

@Component({
  selector: 'app-notice-add',
  templateUrl: './notice-add.component.html',
  styleUrls: ['./notice-add.component.css']
})
export class NoticeAddComponent implements OnInit {
  addNotice = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    owner: new FormControl('')
  });
  constructor(private notice: NoticeboardService) { }

  ngOnInit(): void {
  }
  collectNotice()
  {
    this.notice.saveNotice(this.addNotice.value).subscribe((result) =>
    {
       console.warn('result is here', result);
    });
  }

}
