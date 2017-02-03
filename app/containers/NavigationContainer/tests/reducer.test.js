import expect from 'expect';
import navigationContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('navigationContainerReducer', () => {
  it('returns the initial state', () => {
    expect(navigationContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
