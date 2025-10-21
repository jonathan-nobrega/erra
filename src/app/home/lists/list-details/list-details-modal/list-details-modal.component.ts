import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { List } from '../../list.interface';
import { selectSelectedList } from '../../state/lists.selectors';

@Component({
  selector: 'app-list-details-modal',
  templateUrl: './list-details-modal.component.html',
  styleUrls: ['./list-details-modal.component.scss'],
  standalone: false,
})
export class ListDetailsModalComponent  implements OnInit {
  @Input() isOpen: boolean = true;
  
  list$: Observable<List | undefined> = this.store.select(selectSelectedList)

  constructor(private store: Store) { }

  ngOnInit() {
  }

}
