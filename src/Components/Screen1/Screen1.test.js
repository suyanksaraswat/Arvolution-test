import React from 'react';
import ReactDOM from 'react-dom';
import Screen1 from './Screen1';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import renderer from "react-test-renderer";

afterEach(cleanup);

it("screen1 renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Screen1></Screen1>, div)
})

it("matches snapshot 1", () => {
	const tree = renderer.create(<Screen1></Screen1>).toJSON();
	expect(tree).toMatchSnapshot();
})