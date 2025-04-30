import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ListsEffects } from './lists.effects';

describe('ListsEffects', () => {
  let actions$: Observable<any> = new Observable();
  let effects: ListsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ListsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ListsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
