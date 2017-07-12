import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Search extends PureComponent {

  render() {
    const { placeholder, onChange } = this.props;

    return (
      <input type="text" placeholder={placeholder} onChange={onChange}/>
    );
  }
}

Search.propTypes = {
  placeholder: PropTypes.string,
};

Search.defaultProps = {
  placeholder: ''
};
