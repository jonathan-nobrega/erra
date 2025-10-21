import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ChoreCardComponent } from './chore-card.component';



@NgModule({
  declarations: [ChoreCardComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ChoreCardComponent]
})
export class ChoreCardModule { }
