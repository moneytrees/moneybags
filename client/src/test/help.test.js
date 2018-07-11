import React from 'react';
import { shallow, mount,render } from 'enzyme';
import Help from '../components/HelpEducation/Help';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

//describe the testing
describe('Education Component', () => {
    let wrapper;
    it('renders a help section', () => {
        wrapper = mount(<Help />);
        expect(wrapper.find(".help").text()).toBe("Help Section");
      });
    // it('has a title of Timeline', () => {
    //     wrapper = mount(<Education />)
    //     expect(wrapper.find(".wealth").text()).toBe("What is wealth management?")
    //   })
})