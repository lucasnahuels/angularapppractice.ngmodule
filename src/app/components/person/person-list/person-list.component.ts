import { Component } from '@angular/core';
import { Person } from '../../../models/person';
import { PersonService } from '../../../services/person-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  standalone: false,
  
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css'
})
export class PersonList {
  persons: Person[] = [];
  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit() {
      this.getPersons();
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
      // this.personService.deletePerson(id).subscribe(() => {
      //     this.persons = this.persons.filter(person => person.id !== id);
      // });
      this.persons = this.persons.filter(person => person.id !== id);
  }
}
