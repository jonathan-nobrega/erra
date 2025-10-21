import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AvatarComponent } from 'src/app/components/avatar/avatar.component';
import { ListDetailsModalComponent } from './list-details-modal.component';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    AvatarComponent
  ],
  declarations: [ListDetailsModalComponent],
  exports: [ListDetailsModalComponent],
})
export class ListDetailsModalModule { }
