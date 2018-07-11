import React from 'react';
import { shallow, mount,render } from 'enzyme';
import Contact from '../components/Contact';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

//describe the testing
describe('Contact Component', () => {
    it('should render without throwing an error', () => {
        expect(shallow( < Contact /> ).find('form').exists()).toBe(true)
    })
})