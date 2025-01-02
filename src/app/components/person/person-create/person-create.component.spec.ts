import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCreate } from './person-create.component';

describe('PersonCreateComponent', () => {
  let component: PersonCreate;
  let fixture: ComponentFixture<PersonCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
