import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioCreacionComponent } from './inventario-creacion.component';

describe('InventarioCreacionComponent', () => {
  let component: InventarioCreacionComponent;
  let fixture: ComponentFixture<InventarioCreacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventarioCreacionComponent]
    });
    fixture = TestBed.createComponent(InventarioCreacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
