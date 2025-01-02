import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../../../services/person-service';
import { Person } from '../../../models/person';

@Component({
  selector: 'app-person-create',
  standalone: false,
  
  templateUrl: './person-create.component.html',
  styleUrl: './person-create.component.css'
})
export class PersonCreate {
  person: Person = { id: 0, name: '', gender: '', age: 0 };
  constructor(private personService: PersonService, private router: Router) {}

  onSubmit() {
      this.personService.createPerson(this.person).subscribe(response => {
          console.log('Person created:', response);
          this.router.navigate(['/list']);
      });
  }
}
