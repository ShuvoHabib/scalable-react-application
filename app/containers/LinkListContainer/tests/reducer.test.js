import expect from 'expect';
import linkListContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('linkListContainerReducer', () => {
  it('returns the initial state', () => {
    expect(linkListContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
