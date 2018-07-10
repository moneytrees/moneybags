// When /register loads, verify that the UserRegister component and its contents load without errors
// When the new user submits information, verify that user is taken to his account information, and the components within that page load without errors
// If the user supplies wrong information during login, verify a visible error message loads on the screen
// If the user successfully registers, verify a notification indicating so loads on the screen
// This test may need to be broken down into smaller tests


import React from 'react';
import { shallow, mount, render } from 'enzyme';
