import React, { PureComponent } from 'react';
import FilterList from '../components/filterlist/index.jsx';

class App extends PureComponent {
  onSearchChange = (event) => {
    this.setState({
      searchString: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>
          hola mundo
        </h1>
        <FilterList
          list={[
            'james',
            'vito',
            'dan',
            'khizar',
            'mark',
            'anna',
            'danny',
            'marky',
            'chris'
          ]}
        />
      </div>
    );
  }
}

export default App;
