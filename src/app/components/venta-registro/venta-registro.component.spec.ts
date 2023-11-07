import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaRegistroComponent } from './venta-registro.component';

describe('VentaRegistroComponent', () => {
  let component: VentaRegistroComponent;
  let fixture: ComponentFixture<VentaRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentaRegistroComponent]
    });
    fixture = TestBed.createComponent(VentaRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
