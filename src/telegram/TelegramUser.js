import React from 'react';
import { useSelector } from 'react-redux';

export default function TelegramUser() {
  
  const user = useSelector((state) => state.user);

  if(user === null) return null;

  return (
    <div>
      <h1 className="h4">Telegram User</h1>
      <p>{user.id}</p>
      <p>{user.first_name}</p>
      <p>{user.last_name}</p>
      <p>{user.username}</p>
      <p>{user.photo_url}</p>
      <p>{user.auth_date}</p>
      <p>{user.hash}</p>
    </div>
  );
}