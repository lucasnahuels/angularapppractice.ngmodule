import { Component } from '@angular/core';
import { Person } from '../../../models/person';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../../services/person-service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { addNotification } from '../../../notifications/actions';

@Component({
  selector: 'app-person-edit',
  standalone: false,
  
  templateUrl: './person-edit.component.html',
  styleUrl: './person-edit.component.css'
})
export class PersonEdit {
  person: Person;
  private subscription: Subscription = new Subscription();
  newSkill: string = '';

  constructor(private personService: PersonService, private route: ActivatedRoute, private router: Router, private store: Store) {  
      this.person = { id: 0, name: '', gender: '', age: 0 }; // Initialize with default values
  }

  ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id');
      if (id !== null && id !== undefined) {
          this.subscription = this.personService.getPersonById(+id).subscribe(person => {
              this.person = person || { id: 0, name: '', gender: '', age: 0 };
          });
      }
  }

  onSubmit() {
    //   this.personService.updatePerson(this.person);
    //   this.router.navigate(['/list']);
      this.personService.updatePerson(this.person).subscribe(response => {
          this.store.dispatch(addNotification({ message: 'Person updated: ' + response?.name.toString() }));  
          this.router.navigate(['/list']);
      });
  }

  /*cleans up the subscription when the component is 
  destroyed, preventing potential memory leaks.*/
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  addSkill(personId: number): void {
  }

  deleteSkill(personId: number, skillId: number): void {
  }
}
