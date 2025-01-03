import { Component } from '@angular/core';
import { Person } from '../../../models/person';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../../services/person-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-person-edit',
  standalone: false,
  
  templateUrl: './person-edit.component.html',
  styleUrl: './person-edit.component.css'
})
export class PersonEdit {
  person: Person;
  private subscription: Subscription = new Subscription();

  constructor(private personService: PersonService, private route: ActivatedRoute, private router: Router) {
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
      this.personService.updatePerson(this.person).subscribe(() => {
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
}
