import {shallow} from 'enzyme';
import React from 'react';
import Tweets from '../Tweets';

const user = {screen_name: "foo"}
const data = [{user, id: "1", text: "fooobar"}]

it('should render Tweets component', () => {
  const component = shallow(<Tweets  data={data} />);
  expect(component).toExist
});

it('should be undefined without data', () => {
	const component = shallow(<Tweets />);
	expect(component.props.data).toBeUndefined();
});

it('should have data', () => {
	const component = shallow(<Tweets data={data} />);
	console.log(component.find(".list-tweets").length)
	expect(component.find(".list-tweets").length).toEqual(1)
});