import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class List extends PureComponent {

  renderList() {
    const { list, filterValue } = this.props;
    const filteredList = filterValue ? this.filterList(list, filterValue) : list;
    return filteredList.map((item, index) => {
      return <li key={index}>{item}</li>
    });
  }

  filterList(list, filterValue) {
    return list.filter((item, index) => {
      return !item.toLowerCase().trim().indexOf(filterValue);
    });
  }

  render() {
    const { placeholder, onChange } = this.props;

    return (
      <ul>
        { this.renderList() }
      </ul>
    );
  }
}

List.propTypes = {
  filterValue: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string
};

List.defaultProps = {
  filterValue: '',
  list: [],
  placeholder: ''
};
