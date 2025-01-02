import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonEdit } from './person-edit.component';

describe('PersonEditComponent', () => {
  let component: PersonEdit;
  let fixture: ComponentFixture<PersonEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
