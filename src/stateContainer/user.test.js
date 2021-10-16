import reduce from './user';

it('should return payload', () => {

  const state = {id:99};

  expect(reduce(state, {type:'user', payload: {id:1}})).toEqual({id:1});
  expect(reduce(void 0, {type:'user', payload: {id:1}})).toEqual({id:1});
});

it('should return null', () => {
  expect(reduce(void 0, {type:'another',payload: []})).toBeNull();
});

it('should return state', () => {

  const state = {id:1};

  expect(reduce(state, {type: 'another', payload: []})).toEqual(state);
});