import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoComponentComponent } from './proceso-component.component';

describe('ProcesoComponentComponent', () => {
  let component: ProcesoComponentComponent;
  let fixture: ComponentFixture<ProcesoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcesoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcesoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
