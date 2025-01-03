import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private persons: Person[] = [
    { id: 1, name: 'John Doe', gender: 'Male', age: 30 },
    { id: 2, name: 'Jane Smith', gender: 'Female', age: 25, skills: [{ name: 'JavaScript', hasSkill: true }, { name: 'Angular', hasSkill: true }] },
    { id: 3, name: 'Alice Johnson', gender: 'Female', age: 28, skills: [{ name: 'JavaScript', hasSkill: false }, { name: 'Angular', hasSkill: true }] }
  ];
  private nextId: number = 4;

  createPerson(person: Person): Observable<Person> {
    person.id = this.nextId++;
    this.persons.push(person);
    return of(person);
  }

  getPersonById(id: number): Observable<Person | undefined> {
    return of(this.persons.find(person => person.id === id));
  }

  updatePerson(updatedPerson: Person): Observable<Person | undefined> {
    const index = this.persons.findIndex(person => person.id === updatedPerson.id);
    if (index !== -1) {
      this.persons[index] = updatedPerson;
      return of(updatedPerson);
    }
    return of(undefined);
  }

  delete(id: number): boolean {
    const index = this.persons.findIndex(person => person.id === id);
    if (index !== -1) {
      this.persons.splice(index, 1);
      return true;
    }
    return false;
  }

  list(): Observable<Person[]> {
    return of(this.persons);
  }
//   list(): Person[] {
//     return this.persons;
//   }
}