import { Component, OnInit } from '@angular/core';
import listData from '../../../stubdata/lists.json';
import { Chore } from './chore.interface';

@Component({
  selector: 'app-chores',
  templateUrl: 'chores.page.html',
  styleUrls: ['chores.page.scss'],
  standalone: false,
})
export class ChoresPage implements OnInit {

  allChores: Chore[]

  constructor() {}

  ngOnInit(): void {
    this.allChores = listData.reduce((chores: Chore[], list) => {
      const choresWithListName =  list.chores.map(chore => ({...chore, listName: list.title}))

      return chores.concat(choresWithListName)
    }, [])

    console.log(this.allChores)
  }

}
