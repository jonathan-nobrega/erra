import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DoughnutModule } from 'src/app/components/doughnut-chart/doughnut/doughnut.module';
import { ChoreCardModule } from 'src/app/home/chores/chore-card/chore-card.module';
import { AvatarComponent } from "../../../components/avatar/avatar.component";
import { ListDetailsModalModule } from './list-details-modal/list-details-modal.module';
import { ListDetailsComponent } from './list-details.component';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ChoreCardModule,
    DoughnutModule,
    AvatarComponent,
    ListDetailsModalModule
],
  declarations: [ListDetailsComponent],
  exports: [ListDetailsComponent]
})
export class ListDetailsModule { }
