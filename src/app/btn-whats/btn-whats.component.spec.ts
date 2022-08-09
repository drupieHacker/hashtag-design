import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnWhatsComponent } from './btn-whats.component';

describe('BtnWhatsComponent', () => {
  let component: BtnWhatsComponent;
  let fixture: ComponentFixture<BtnWhatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnWhatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnWhatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
