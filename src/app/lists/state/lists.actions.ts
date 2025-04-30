import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const ListsActions = createActionGroup({
  source: 'Lists',
  events: {
    'Load Lists': emptyProps(),
    'Load Lists Success': props<{ lists: any[] }>(),
    'Load Lists Failure': props<{ error: any }>(),
    'Select List': props<{ listId: string }>(),    
  }
});
