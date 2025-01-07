import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  standalone: false
})
export class ModalComponent {
  @ViewChild('modal') modal!: ElementRef;

  open(): void {
    this.modal.nativeElement.style.display = 'block';
  }

  close(): void {
    this.modal.nativeElement.style.display = 'none';
  }
}