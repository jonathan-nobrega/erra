import { Component } from '@angular/core';
import listsData from '../../stubdata/lists.json';
import { List } from './list.interface';

@Component({
  selector: 'app-lists',
  templateUrl: 'lists.page.html',
  styleUrls: ['lists.page.scss'],
  standalone: false,
})
export class ListsPage {
  
  lists: List[] = listsData  

  constructor() {}

}
