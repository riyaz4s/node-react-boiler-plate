import React from 'react';
import { shallow } from 'enzyme';

import __NAME__ from '__COMP_PATH__/__NAME__';

describe('<__NAME__ />', () => {

  it('should render', () => {
    expect(shallow(<__NAME__ />)).toHaveLength(1);
  });

});
