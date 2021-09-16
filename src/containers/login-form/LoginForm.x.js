/* import Enzyme, { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { LoginForm } from "./LoginForm";
import { Provider } from "react-redux";
import store from "../../store";
import { act } from "react-dom/test-utils";

Enzyme.configure({ adapter: new Adapter() });

describe("test LoginForm.jsx", () => {
let wrapper;

  beforeEach(() => {
   wrapper = mount(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  });

  it("confirms rendering of LoginForm", () => {
    expect(wrapper.find(LoginForm)).toBeDefined;
  });

  it("confirms rendering of email field", () => {
    const email = wrapper.find(".email").length;
    //console.log(wrapper.find(".email").at(1).get(0))
    //console.log(wrapper.find(".email").get(0))
    //console.log(wrapper.find(".email").get(0).props)
    expect(wrapper.find(".email").get(0)).toHaveProperty("type", "input");
    expect(wrapper.find(".email").get(0).props).toHaveProperty("name", "email");
  });

  it.only("confirms rendering of email field", async () => {
    const mockHandler = jest.fn();

    let emailField = wrapper.find("#email").first();
    let passwordField = wrapper.find("#password").first();
    let buttonSubmit = wrapper.find("#buttonSubmit").first();
    
    emailField.simulate('change',mockHandler)
    expect(mockHandler).toHaveBeenCalled    
  });
}); */
