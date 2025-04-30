import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { EMPTY, Observable, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { ListsActions } from './lists.actions';
import { List } from '../list.interface';
import { ListsService } from '../lists.service';

@Injectable()
export class ListsEffects {

  loadListss$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(ListsActions.loadLists),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => this.listsService.getLists().pipe(
        map((lists:List[]) => ListsActions.loadListsSuccess({ lists })),
        catchError((error) => of(ListsActions.loadListsFailure({ error })))
      )
    ))
  });

  constructor(private actions$: Actions, private listsService: ListsService) {}
}
