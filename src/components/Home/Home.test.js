import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './Home';

describe('<Home />', () => {
    it('should render title and message', () => {
        const message = 'from Home.test.js';
        const wrapper = shallow(<Home loadMessage={() => {}} message={message} />);
        expect(wrapper.find('.title').text()).toBe('Home');
        expect(wrapper.find('.message').text()).toBe(message);
    });

    it('should mock loadMessage and spy on componentDidMount', () => {
        const spyCDM = jest.spyOn(Home.prototype, 'componentDidMount');
        const loadMessageMock = jest.fn().mockImplementation(() => Promise.resolve(true));
        shallow(<Home loadMessage={loadMessageMock} />);

        expect(loadMessageMock).toBeCalled();
        expect(spyCDM).toBeCalled();

        spyCDM.mockRestore();
        loadMessageMock.mockClear();
    });
});
