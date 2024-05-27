import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerdashboardComponent } from './buyerdashboard.component';

describe('BuyerdashboardComponent', () => {
  let component: BuyerdashboardComponent;
  let fixture: ComponentFixture<BuyerdashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyerdashboardComponent]
    });
    fixture = TestBed.createComponent(BuyerdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
