import React from 'react';
import ReactDOM from 'react-dom';
import Screen2 from './Screen2';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import renderer from "react-test-renderer";

afterEach(cleanup);

it("screen2 renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Screen2></Screen2>, div)
})

it("matches snapshot 1", () => {
	const tree = renderer.create(<Screen2></Screen2>).toJSON();
	expect(tree).toMatchSnapshot();
})