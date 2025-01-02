import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDelete } from './person-delete.component';

describe('PersonDeleteComponent', () => {
  let component: PersonDelete;
  let fixture: ComponentFixture<PersonDelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonDelete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonDelete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
