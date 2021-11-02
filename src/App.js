import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import TelegramUserReader from './telegram/TelegramUserReader';
import TelegramUser from './telegram/TelegramUser';

export default function App() {
  return (
    <div className="row">
      <div className="col">
        <div className="d-flex justify-content-center">
          <h1 className="h4">My Own Space</h1>
        </div>
        <div className="d-flex justify-content-center">
          <FontAwesomeIcon icon={faUserAstronaut} size="10x" />
        </div>
        <div className="d-flex justify-content-center">
          <TelegramUserReader location={document.location.href}/>
          <TelegramUser />
        </div>
      </div>
    </div>
  );
}