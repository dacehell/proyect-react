import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { Provider } from "react-redux";
import store from "../../store";

import ProductCreate from "./ProductCreate";

Enzyme.configure({ adapter: new Adapter() });
describe("test ProductCreate", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <ProductCreate />
      </Provider>
    );
  });
  afterAll(() => {
    wrapper.unmount();
  });
});
