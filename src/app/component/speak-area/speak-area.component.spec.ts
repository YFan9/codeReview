import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakAreaComponent } from './speak-area.component';

describe('SpeakAreaComponent', () => {
  let component: SpeakAreaComponent;
  let fixture: ComponentFixture<SpeakAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
