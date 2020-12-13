import React from 'react';
import ColorContext from '../contexts/ColorContext';
import LanguageContext from '../contexts/LanguageContext'

class Button extends React.Component {
  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'Voorleggen';
  }

  renderButton(color) {
    return(
        <button className={`ui button ${color}`}>
          <LanguageContext.Consumer>
            {({ language }) => this.renderSubmit(language)}
          </LanguageContext.Consumer>
        </button>
    )
  }

  render() {
    return (
      <div>
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
      </div>
    )
  }
}

export default Button;