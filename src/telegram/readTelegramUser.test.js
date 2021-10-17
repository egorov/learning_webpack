import readTelegramUser from './readTelegramUser';

it('should return user', () => {

  const href = 
    'https://egorov.space?id=329&first_name=Joe&last_name=Doe&username=jd&photo_url=userpic&auth_date=1&hash=abc891';
  const user = readTelegramUser(href);

  expect(user).toEqual({
    id: '329',
    first_name: 'Joe',
    last_name: 'Doe',
    username: 'jd',
    photo_url: 'userpic',
    auth_date: '1',
    hash: 'abc891'
  });
});

it('should return null', () => {

  const href = 
    'https://egorov.space?user_id=329&first_name=Joe&last_name=Doe&username=jd&photo_url=userpic&auth_date=1&hash=abc891';

  expect(readTelegramUser(href)).toBeNull();
});