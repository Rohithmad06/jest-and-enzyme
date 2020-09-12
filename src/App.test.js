import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
  const wrapper = shallow(<App />);
  // console.log(wrapper.debug());
  const appComponent = wrapper.find('[data-test="component-app"]');
  expect(appComponent.length).toBe(1);
});
test("renders increment button", () => {});
test("renders counter content", () => {});
test("count starts from 0", () => {});
test("button click increments count", () => {});
