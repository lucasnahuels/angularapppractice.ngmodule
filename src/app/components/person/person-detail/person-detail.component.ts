import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Person } from '../../../models/person';
import { PersonService } from '../../../services/person-service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css'],
  standalone: false
})
export class PersonDetail implements OnChanges {
  @Input() personId!: number;
  person: Person | undefined;

  constructor(private personService: PersonService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['personId'] && changes['personId'].currentValue) {
      this.loadPerson(changes['personId'].currentValue);
    }
  }

  loadPerson(id: number): void {
    this.personService.getPersonById(id).subscribe(person => this.person = person || undefined);
  }
}