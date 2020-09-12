import React from "react";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });
/**
 * Factory function to create a ShallowWrapper for the App Component
 * @function setup
 * @param {Object} props Component props specific to this setup
 * @param {object} state - Initial state for setup
 * @param {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};
/**
 * Return ShallowWrapper containing node with given data-test value
 * @param {} wrapper - Enzyme shallow wrapper to search with
 * @param {*} val - The data-test value to be searched for
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
test("renders without crashing", () => {
  const wrapper = setup();
  // console.log(wrapper.debug());
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});
test("renders increment button", () => {
  const wrapper = setup();
  const incrementButton = findByTestAttr(wrapper, "increment-button");
  console.log(wrapper.debug());
  expect(incrementButton.length).toBe(1);
});
test("renders counter content", () => {
  const wrapper = setup();
  const incrementContent = findByTestAttr(wrapper, "increment-content");
  expect(incrementContent.length).toBe(1);
});
test("count starts from 0", () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state("counter");
  console.log(initialCounterState);
  expect(initialCounterState).toBe(0);
});
test("button click increments count", () => {
  const counter = 7;
  const wrapper = setup(null, { counter });
  const incrementButton = findByTestAttr(wrapper, "increment-button");
  incrementButton.simulate("click");
  const incrementContent = findByTestAttr(wrapper, "increment-content");
  expect(incrementContent.text()).toBe("The current count is 8");
  expect(incrementContent.text()).toContain(counter + 1);
});
test("rendering decrement button", () => {
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  expect(decrementButton.length).toBe(1);
});
test("decrement button click decrementing count", () => {
  const counter = 8;
  const wrapper = setup(null, { counter });
  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  decrementButton.simulate("click");
  const counterDisplay = findByTestAttr(wrapper, "increment-content");
  expect(counterDisplay.text()).toContain(counter - 1);
});
test("decrementing below 0 throwing Error", () => {
  const counter = 0;
  const wrapper = setup(null, { counter });
  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  decrementButton.simulate("click");
  const errorDisplay = findByTestAttr(wrapper, "error-content");
  expect(errorDisplay.length).toBe(1);
});
test("incrementing after error clearing Error", () => {
  const counter = -1;
  const wrapper = setup(null, { counter });
  const incrementButton = findByTestAttr(wrapper, "increment-button");
  incrementButton.simulate("click");
  const counterDisplay = findByTestAttr(wrapper, "increment-content");
  const errorDisplay = findByTestAttr(wrapper, "error-content");
  expect(errorDisplay.length).toBe(0);
  expect(counterDisplay.text()).toContain(counter + 1);
});
