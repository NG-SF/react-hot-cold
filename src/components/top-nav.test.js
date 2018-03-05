import React from 'react';
import {shallow, mount} from 'enzyme';
import TopNav from './top-nav';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    it('Should fire onRestartGame callback when the link is clicked', () => {
        const callback = jest.fn();
        const wrapper = mount(<TopNav onRestartGame={callback} />);
        wrapper.find('.new').simulate('click');
        expect(callback).toHaveBeenCalled;
    });

    it('Should fire onGenerateAuralUpdate callback when the link is clicked', () => {
        const callback = jest.fn();
        const wrapper = mount(<TopNav onGenerateAuralUpdate={callback} />);
        wrapper.find('.visuallyhidden').simulate('click');
        expect(callback).toHaveBeenCalled;
    });
});