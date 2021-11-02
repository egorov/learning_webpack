import React from "react";
import { Provider, useDispatch } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../stateContainer/reducers';
import { render, screen } from '@testing-library/react';

import TelegramUser from "./TelegramUser";

describe('TelegramUser', () => {

  let store = null;

  beforeEach(() => {
    store = createStore(reducers);
  });

  test('renders', () => {

    render(
      <Provider store={store}>
        <TelegramUser />
      </Provider>
    );

    store.dispatch({
      type: 'user',
      payload: {
        id: '1989812387981723',
        first_name: 'Joe',
        last_name: 'Doe',
        username: 'jd',
        photo_url: 'http://localhost/userpic',
        auth_date: '093209098234',
        hash: '298398987987239874987234'
      }
    });

    screen.debug();
  });
});
