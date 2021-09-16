export const initialStateProduct = {
  isLoading: "initial",
  data: [],
  error: null,
  message: null,
};
const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
export const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};
