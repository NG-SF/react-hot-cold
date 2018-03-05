import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessList from './guess-list';

describe('<GuessList />', () => {
  const guesses = [];
  beforeAll(() => {
    for (let i = 0; i < 10; i++) {
          guesses.push(`Guess ${i}`);
        }
    });
    it('Renders without crashing', () => {
        shallow(<GuessList guesses={guesses} />);
    });

});