import * as fromLists from './lists.reducer';
import { selectListsState } from './lists.selectors';

describe('Lists Selectors', () => {
  it('should select the feature state', () => {
    const result = selectListsState({
      [fromLists.listsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
