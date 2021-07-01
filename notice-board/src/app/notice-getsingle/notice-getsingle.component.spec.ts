import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeGetsingleComponent } from './notice-getsingle.component';

describe('NoticeGetsingleComponent', () => {
  let component: NoticeGetsingleComponent;
  let fixture: ComponentFixture<NoticeGetsingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeGetsingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeGetsingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
