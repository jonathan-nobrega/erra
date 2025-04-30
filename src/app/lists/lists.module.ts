import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ListCardModule } from './list-card/list-card.module';
import { ListDetailsModule } from './list-details/list-details.module';
import { ListsPageRoutingModule } from './lists-routing.module';
import { ListsPage } from './lists.page';
import { ListsEffects } from './state/lists.effects';
import * as fromLists from './state/lists.reducer';

@NgModule({
  imports: [
    IonicModule, CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ListsPageRoutingModule,
    ListCardModule,
    ListDetailsModule,
    StoreModule.forFeature(fromLists.listsFeatureKey, fromLists.reducer),
    EffectsModule.forFeature([ListsEffects]),
  ],
  declarations: [ListsPage]
})
export class ListsPageModule { }
