import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeGetSingleComponent } from './notice-get-single.component';

describe('NoticeGetsingleComponent', () => {
  let component: NoticeGetSingleComponent;
  let fixture: ComponentFixture<NoticeGetSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeGetSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeGetSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
