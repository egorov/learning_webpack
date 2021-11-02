import readTelegramuser from './readTelegramUser';
import { useDispatch } from 'react-redux';

export default function TelegramUserReader({ location }) {

  const payload = readTelegramuser(location);

  if(payload !== null) {

    const dispatch = useDispatch();
    const type = 'user';

    dispatch({ type, payload });
  }
  
  return null;
}