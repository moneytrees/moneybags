import React from 'react';
import { shallow, mount,render } from 'enzyme';
import Nav from '../components/NavTabs';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavTabs from '../components/NavTabs';

Enzyme.configure({ adapter: new Adapter() });

//describe the testing
describe('Navbar Component', () => {
    it('should render without throwing an error', () => {
        expect(shallow( < NavTabs /> ).find('nav').exists()).toBe(true)
    })
})