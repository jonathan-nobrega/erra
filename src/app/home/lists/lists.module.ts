import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AvatarComponent } from "../../components/avatar/avatar.component";
import { ListCardModule } from './list-card/list-card.module';
import { ListDetailsModule } from './list-details/list-details.module';
import { ListsPageRoutingModule } from './lists-routing.module';
import { ListsPage } from './lists.page';
import { ListsEffects } from './state/lists.effects';
import { reducer } from './state/lists.reducer';

@NgModule({
  imports: [
    IonicModule, CommonModule,
    FormsModule,
    ListsPageRoutingModule,
    ListCardModule,
    ListDetailsModule,
    StoreModule.forFeature('lists', reducer),
    EffectsModule.forFeature([ListsEffects]),
    AvatarComponent
],
  declarations: [ListsPage]
})
export class ListsPageModule { }
