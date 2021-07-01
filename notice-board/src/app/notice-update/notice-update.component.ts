import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NoticeboardService } from '../noticeboard.service';

@Component({
  selector: 'app-notice-update',
  templateUrl: './notice-update.component.html',
  styleUrls: ['./notice-update.component.css']
})
export class NoticeUpdateComponent implements OnInit {
  alert = false;
  editNotice = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    owner: new FormControl('')
  });
  constructor(private router: ActivatedRoute, private notice: NoticeboardService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id);
    this.notice.getCurrentNotice(this.router.snapshot.params.id).subscribe((result: any) =>
      this.editNotice = new FormGroup({
        title: new FormControl(result.title),
        description: new FormControl(result.description)
      }));
  }
  collection()
  {
    console.warn(this.editNotice.value);
    this.notice.updateNotice(this.router.snapshot.params.id, this.editNotice.value).subscribe((result) =>
      this.alert = true
    );
  }

  closeAlert()
  {
    this.alert = false;
  }

}
