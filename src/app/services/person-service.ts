import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private persons: Person[] = [
    { id: 1, name: 'John Doe', gender: 'Male', age: 30 },
    { id: 2, name: 'Jane Smith', gender: 'Female', age: 25, skills: [{ name: 'JavaScript' }, { name: 'Angular' }] },
    { id: 3, name: 'Alice Johnson', gender: 'Female', age: 28, skills: [{ name: 'JavaScript' }, { name: 'Angular' }] },
    { id: 4, name: 'Sherlock Holmes', gender: 'Male', age: 29, skills: [{ name: 'C#' }, { name: 'Node.js' }, { name: 'React' }] }
  ];
  private nextId: number = 4;

  constructor(private authService: AuthService) {}

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

  deletePerson(id: number): Observable<boolean> {
    if (this.authService.hasRole('delete')) {
      const index = this.persons.findIndex(person => person.id === id);
      if (index !== -1) {
        this.persons.splice(index, 1);
        return of(true);
      }
    } else {
      alert('User not authorized');
    }
    return of(false);
  }

  list(): Observable<Person[]> {
    return of(this.persons);
  }

  // //this would be the approach not using observables
  // list(): Person[] {
  //   return this.persons;
  // }

  addSkill(personId: number, skill: string): Observable<Person | undefined> {
    const person = this.persons.find(p => p.id === personId);
    if (person) {
      if (!person.skills) {
        person.skills = [];
      }
      person.skills.push({ name: skill });
      return of(person);
    }
    return of(undefined);
  }
  
  deleteSkill(personId: number, skillName: string): Observable<void> {
    const person = this.persons.find(p => p.id === personId);
    if (person && person.skills) {
      const skillIndex = person.skills.findIndex(s => s.name === skillName);
      if (skillIndex !== -1) {
        person.skills.splice(skillIndex, 1);
      }
    }
    return of(undefined);
  }
}