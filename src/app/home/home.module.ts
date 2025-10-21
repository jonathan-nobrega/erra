import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RouterModule, Routes } from '@angular/router';
import { AvatarComponent } from '../components/avatar/avatar.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'lists',
        loadChildren: () => import('./lists/lists.module').then(m => m.ListsPageModule)
      },
      {
        path: 'chores',
        loadChildren: () => import('./chores/chores.module').then(m => m.ChoresPageModule)
      },
      {
        path: 'people',
        loadChildren: () => import('./people/people.module').then(m => m.PeoplePageModule)
      },
      {
        path: '',
        redirectTo: '/home/lists',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/lists',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    AvatarComponent
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
