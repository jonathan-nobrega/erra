import { createReducer, on } from '@ngrx/store';
import { List } from '../list.interface';
import { ListsActions } from './lists.actions';

export const listsFeatureKey = 'lists';

export interface ListsState {
  lists: List[],
  selectedListId: string | null,
  loading: boolean,
  error: any
}

export const initialState: ListsState = {
  lists: [],
  selectedListId: null,
  loading: false,
  error: null
}

export const reducer = createReducer(
  initialState,
  on(ListsActions.loadLists, state => ({ ...state, loading: true })),
  on(ListsActions.loadListsSuccess, (state, { lists }) => ({ ...state, lists, loading: false })),
  on(ListsActions.loadListsFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(ListsActions.selectList, (state, { listId }) => ({ ...state, selectedListId: listId })),
);

// export const listsFeature = createFeature({
//   name: listsFeatureKey,
//   reducer,
// });

