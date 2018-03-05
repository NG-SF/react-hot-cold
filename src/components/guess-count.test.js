import React from 'react';
import {shallow} from 'enzyme';
import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Renders correct information', () => {
        let wrapper = shallow(<GuessCount guessCount={5} />);
        expect(wrapper.text()).toEqual("You've made 5 guesses!");
    });
});