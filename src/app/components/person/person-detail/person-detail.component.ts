import { Component, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Person } from '../../../models/person';
import { PersonService } from '../../../services/person-service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css'],
  standalone: false
})
export class PersonDetail {
  person: Person | undefined;

  constructor(
    private personService: PersonService,
    public dialogRef: MatDialogRef<PersonDetail>,
    @Inject(MAT_DIALOG_DATA) public data: { personId: number }
  ) {
    if (data && data.personId) {
      this.loadPerson(data.personId);
    }
  }

  loadPerson(id: number): void {
    this.personService.getPersonById(id).subscribe(person => this.person = person || undefined);
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}