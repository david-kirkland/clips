import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { provideEnvironmentNgxMask, NgxMaskDirective } from 'ngx-mask';

import { ModalService } from '../services/modal.service';

import { AlertComponent } from './alert/alert.component';
import { InputComponent } from './input/input.component';
import { ModalComponent } from './modal/modal.component';
import { TabComponent } from './tab/tab.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';

@NgModule({
  declarations: [
    AlertComponent,
    InputComponent,
    ModalComponent,
    TabComponent,
    TabsContainerComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective],
  exports: [
    AlertComponent,
    InputComponent,
    ModalComponent,
    TabComponent,
    TabsContainerComponent,
  ],
  providers: [ModalService, provideEnvironmentNgxMask()],
})
export class SharedModule {}
