import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonList } from './person-list.component';

describe('PersonListComponent', () => {
  let component: PersonList;
  let fixture: ComponentFixture<PersonList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
