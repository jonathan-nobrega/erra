import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { List } from './list.interface';
import { ListsActions } from './state/lists.actions';
import { selectAllLists } from './state/lists.selectors';

@Component({
  selector: 'app-lists',
  templateUrl: 'lists.page.html',
  styleUrls: ['lists.page.scss'],
  standalone: false,
})
export class ListsPage implements OnInit {

  lists$: Observable<List[]> = this.store.select(selectAllLists);
  AvatarType: any;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(ListsActions.loadLists());
  }

  listClicked(listId: string) {
    this.store.dispatch(ListsActions.selectList({ listId }));
  }
}
