import React from 'react';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Game from './game';


describe('<Game />', () => {
  it('Renders without crashing', () => {
    shallow(< Game />);
  });

  it('should match its empty snapshot', () => {
    const tree = renderer.create(
      <Game />
     ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});