import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../stateContainer/reducers';
import { render } from '@testing-library/react';

import TelegramUserReader from './TelegramUserReader';

describe('TelegramUser', () => {

  let store = null;

  beforeEach(() => {
    store = createStore(reducers);
  });

  test('should set user state', () => {

    const location = 
      'https://egorov.space?id=329&first_name=Joe&last_name=Doe&username=jd&photo_url=userpic&auth_date=1&hash=abc891';

    render(
      <Provider store={store}>
        <TelegramUserReader location={location} />
      </Provider>
    );

    const state = store.getState();

    expect(state.user).toEqual({
        id: '329',
        first_name: 'Joe',
        last_name: 'Doe',
        username: 'jd',
        photo_url: 'userpic',
        auth_date: '1',
        hash: 'abc891'
    });
  });

  test('should not set user state', () => {

    const location = 'https://egorov.space';

    render(
      <Provider store={store}>
        <TelegramUserReader location={location} />
      </Provider>
    );

    const state = store.getState();

    expect(state.user).toBeNull();
  });
});
