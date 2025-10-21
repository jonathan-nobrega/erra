import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLists from './lists.reducer';

export const selectListsState = createFeatureSelector<fromLists.ListsState>(
  fromLists.listsFeatureKey
);

export const selectAllLists = createSelector(
  selectListsState,
  (state: fromLists.ListsState) => state.lists
);

export const selectList = createSelector(
  selectListsState,
  (state: fromLists.ListsState) => state.selectedListId
);

export const selectSelectedList = createSelector(
  selectAllLists,
  selectList,
  (lists, selectedListId) => lists.find(list => list.id === selectedListId)
);
