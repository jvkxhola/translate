import React from 'react';
import './App.css';
import LanguageSelector from './components/LanguageSelect';
import UserCreate from './components/UserCreate';
import ColorContext from './contexts/ColorContext';
import {LanguageStore} from './contexts/LanguageContext';

class App extends React.Component {

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
        <LanguageSelector />
        <ColorContext.Provider value="primary">
            <UserCreate  />
        </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }

}

export default App;
