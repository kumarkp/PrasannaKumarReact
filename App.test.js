import React, { Component } from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Counter testing', () => {
  let wrapper;
  beforeEach(()=>{
     wrapper = mount(<App />);
  })
    test('renders the title of counter', () => {
        expect(wrapper.find('h1').text()).toContain('This is my webpack counter app');

        //this very descriptive and complex
        // const { getByText } = render(<App />);
        // const linkElement = getByText('This is my webpack counter app');
        // expect(linkElement).toBeInTheDocument();
      });

      test("render a button with text of 'increment'", () => {
        expect(wrapper.find('#increment-btn').text()).toBe('Increment');
      })

      test("the render initial value of state in div", ()=>{
        expect(wrapper.find('#counter-value').text()).toBe('0');
      })
      
      test("the render the click event of increment button and increment counter value", ()=>{
        wrapper.find('#increment-btn').simulate('click');
        expect(wrapper.find('#counter-value').text()).toBe('1');
      })

      test("the render the click event of decrement button and decrement counter value", ()=>{
        wrapper.find('#decrement-btn').simulate('click');
        expect(wrapper.find('#counter-value').text()).toBe('-1');
      })

})
