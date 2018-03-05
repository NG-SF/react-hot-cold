import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Should render an input area', () => {
        const wrapper = shallow(<GuessForm /> );
        expect(wrapper.find('input').length).toEqual(1);
    });

    it('Should fire the onMakeGuess callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onMakeGuess={callback} />);
        const value = "42";
        wrapper.find('input[type="number"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value);
    });

    it('Should fire preventDefault when the form is submitted', () => {
        const wrapper = mount(<GuessForm />);
        const preventDefault = jest.fn();
        wrapper.find('form').simulate('submit', { preventDefault });
        expect(preventDefault).toBeCalled();
    });

    it('Should not fire onSubmit if the input is empty', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onSubmit={callback} />);
        wrapper.simulate('submit');
        expect(callback).not.toHaveBeenCalled();
    });

    it('Should reset the input when form is submitted', () => {
        const wrapper = mount(<GuessForm />);
        const input = wrapper.find('input[type="number"]');
        input.instance().value = "42";
        wrapper.simulate('submit');
        expect(input.instance().value).toEqual('');
    });
});
