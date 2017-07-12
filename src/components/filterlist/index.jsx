import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBox from './searchbox.jsx';
import List from './list.jsx';

export default class FilterList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchString: ''
    };
  }

  onSearchChange = (event) => {
    this.setState({
      searchString: event.target.value
    });
  }

  render() {
    const { list } = this.props;
    const { searchString } = this.state;

    return (
      <div>
        <SearchBox placeholder="search" onChange={this.onSearchChange}/>
        <List filterValue={searchString} list={list}/>
      </div>
    );
  }
}

FilterList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string)
};

FilterList.defaultProps = {
  list: []
};

