import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../../../services/person-service';
import { Person } from '../../../models/person';
import { Store } from '@ngrx/store';
import { addNotification } from '../../../notifications/actions';

@Component({
  selector: 'app-person-create',
  standalone: false,
  
  templateUrl: './person-create.component.html',
  styleUrl: './person-create.component.css'
})
export class PersonCreate {
  person: Person = { id: 0, name: '', gender: '', age: 0 };
  constructor(private personService: PersonService, private router: Router, private store: Store) {}

  onSubmit() {
      this.personService.createPerson(this.person).subscribe(response => {
          console.log('Person created:', response);
          this.store.dispatch(addNotification({ message: 'Person created: ' + response.name.toString() }));  
          this.router.navigate(['/list']);
      });
  }
}
