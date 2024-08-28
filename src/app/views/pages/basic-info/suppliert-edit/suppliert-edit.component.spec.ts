import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliertEditComponent } from './suppliert-edit.component';

describe('SuppliertEditComponent', () => {
  let component: SuppliertEditComponent;
  let fixture: ComponentFixture<SuppliertEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuppliertEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuppliertEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
