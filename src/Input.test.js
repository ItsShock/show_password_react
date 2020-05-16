import React from 'react';
import Input from './Input';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('List tests', () => {
  let wrapper = mount(<Input />);

  it('Poprawnie wyświetla input', () => {
    expect(wrapper.find('input').prop('type')).toBe("password")
  });

  it('Poprawnie wyświetla button', () => {
    expect(!!wrapper.find('button')).toBe(true);
  });

  it('Po kliknięciu w button, typ inputa zmienia się na text', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('input').prop('type')).toBe("text")
  });

  it('Po kliknięciu w button ponownie, typ inputa wraca do typu password', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('input').prop('type')).toBe("password")
  });
});