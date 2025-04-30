import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ChoreCardModule } from 'src/app/chores/chore-card/chore-card.module';
import { DoughnutModule } from 'src/app/components/doughnut-chart/doughnut/doughnut.module';
import { AvatarComponent } from "../../components/avatar/avatar.component";
import { ListDetailsModalModule } from './list-details-modal/list-details-modal.module';
import { ListDetailsComponent } from './list-details.component';
import { ListDetailsModalComponent } from './list-details-modal/list-details-modal.component';



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
