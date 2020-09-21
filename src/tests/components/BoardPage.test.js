import React from 'react';
import {shallow} from 'enzyme';
import DashBoardPage from '../../components/DashBoardPage';


//test first one 
test('should render DashBoardPage', () => {
    const wrapper = shallow(<DashBoardPage  />);
    expect(wrapper).toMatchSnapshot();

});