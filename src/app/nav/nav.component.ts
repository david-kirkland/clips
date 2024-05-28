import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  constructor(public modal: ModalService) {}

  openModal($event: Event) {
    $event.preventDefault();
    this.modal.toggleModal('authentication');
  }
}
