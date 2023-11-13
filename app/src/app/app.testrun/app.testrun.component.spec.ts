import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTestrunComponent } from './app.testrun.component';

describe('AppTestrunComponent', () => {
  let component: AppTestrunComponent;
  let fixture: ComponentFixture<AppTestrunComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppTestrunComponent]
    });
    fixture = TestBed.createComponent(AppTestrunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
