import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCardPageComponent } from './type-card-page.component';

describe('TypeCardPageComponent', () => {
  let component: TypeCardPageComponent;
  let fixture: ComponentFixture<TypeCardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeCardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
