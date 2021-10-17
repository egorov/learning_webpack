const requiredKeys = [
  'id', 'first_name', 'last_name', 'username', 'photo_url', 'auth_date', 'hash'
];

function readTelegramUser(href) {

  const url = new URL(href);

  if(!containsRequiredSearchParams(url)) return null;

  const user = {};

  for(const requiredKey of requiredKeys) {
    user[requiredKey] = url.searchParams.get(requiredKey);
  }

  return user;
}

function containsRequiredSearchParams(url) {

  const actualKeys = Array.from(url.searchParams.keys());

  for(const requiredKey of requiredKeys) {

    if(actualKeys.indexOf(requiredKey) > -1) continue;

    return false;
  }

  return true;
}

export default readTelegramUser;