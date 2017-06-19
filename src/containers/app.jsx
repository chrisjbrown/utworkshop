import React, { PureComponent } from 'react';
import style from './style.css';

class App extends PureComponent {

  render() {
    return (
      <h1 styleName={style.header}>
        hola mundo
      </h1>
    );
  }
}

export default App;
