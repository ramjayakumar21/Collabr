import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageElementComponent } from './message-element.component';

describe('MessageElementComponent', () => {
  let component: MessageElementComponent;
  let fixture: ComponentFixture<MessageElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageElementComponent]
    });
    fixture = TestBed.createComponent(MessageElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
