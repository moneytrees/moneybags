import React from 'react';
import { shallow, mount,render } from 'enzyme';
import Education from '../components/HelpEducation/Education';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

//describe the testing
describe('Education Component', () => {
    let wrapper;
    it('uses panel group to render', () => {
        wrapper = shallow(<Education />);
        expect(wrapper.find('.panel-group').length).toEqual(1);
      });
    it('should render without throwing an error', () => {

        expect(shallow(<Education />).contains(<h2>Educational Resources </h2>)).toBe(true);
       
    })

    it('has a class of wealth', () => {
        wrapper = mount(<Education />)
        expect(wrapper.find(".wealth").text()).toBe("What is wealth management?")
      })
})
