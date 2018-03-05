import React from 'react';
import {shallow, mount} from 'enzyme';
import StatusSection from './status-section';


describe('<StatusSection />', () => {
  it('Renders without crashing', () => {
    const guesses = [];
    const auralStatus = '';
      shallow(<StatusSection guesses={guesses} 
            auralStatus={auralStatus} />);
  });

});