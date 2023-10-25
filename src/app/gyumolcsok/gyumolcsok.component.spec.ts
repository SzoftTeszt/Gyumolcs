import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GyumolcsokComponent } from './gyumolcsok.component';

describe('GyumolcsokComponent', () => {
  let component: GyumolcsokComponent;
  let fixture: ComponentFixture<GyumolcsokComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GyumolcsokComponent]
    });
    fixture = TestBed.createComponent(GyumolcsokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
