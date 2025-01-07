import { Component, OnChanges, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { Person } from '../../../models/person';
import { PersonService } from '../../../services/person-service';
import { Router } from '@angular/router';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-person-list',
  standalone: false,
  
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css'
})
export class PersonList implements OnChanges{
  persons: Person[] = [];
  sortCriteria: string = 'name'; // Default sort criteria
  selectedPersonId: number = 0;
  
  @ViewChild(ModalComponent) modal!: ModalComponent;
  
  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit() {
      this.getPersons();
      this.onSortCriteriaChange();
  }

  selectPerson(id: number): void {
    this.selectedPersonId = id;
  }

  getPersons(): void {
      this.personService.list().subscribe(persons => this.persons = persons);
  }

  createPerson(): void {
    this.router.navigate(['/create']);
  }

  editPerson(id: number): void {
      this.router.navigate(['/update', id]);
  }

  deletePerson(id: number): void {
      this.personService.deletePerson(id);
  }

  // This would be the right approach, but I implemented the ngOnChanges method instead just to learn how to use ngOnChanges
  // onSortCriteriaChange(): void {
  //   this.sortPersons(); 
  // }

  onSortCriteriaChange(): void {
    const changes: SimpleChanges = {
      sortCriteria: new SimpleChange(null, this.sortCriteria, false)
    };
    this.ngOnChanges(changes);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['sortCriteria']) {
      this.sortPersons();
    }
  }

  sortPersons(): void {
    switch (this.sortCriteria) {
      case 'name':
        this.persons.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'age':
        this.persons.sort((a, b) => b.age - a.age);
        break;
      case 'gender':
        this.persons.sort((a, b) => a.gender.localeCompare(b.gender));
        break;
    }
  }

  openModal(): void {
    this.modal.open();
  }

  closeModal(): void {
    this.modal.close();
  }
}
