import React from 'react';
import { mount } from 'enzyme';

import FilterList from './index.jsx';

describe('FilterList', () => {
  it('should create a list', () => {
    const wrapper = mount(<FilterList list={['apple', 'orange']} />);
    const li = wrapper.find('li');

    expect(li.length).toEqual(2);
  });
});