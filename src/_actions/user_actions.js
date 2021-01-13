import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    ON_SUCCESS_BUY,
    GET_CART_ITEMS,
    GET_COLORS
  } from "./types";
  import apiClient from "../components/apiClient";
  const USERS_PATH = "/api/users";
  
  export function registerUser(dataToSubmit) {
    const request = apiClient
      .post(`${USERS_PATH}/register`, dataToSubmit)
      .then((response) => response.data);
  
    return {
      type: REGISTER_USER,
      payload: request
    };
  }
  
  export function loginUser(dataToSubmit) {
    const request = apiClient
      .post(`${USERS_PATH}/login`, dataToSubmit)
      .then((response) => response.data);
  
    return {
      type: LOGIN_USER,
      payload: request
    };
  }
  
  export function auth() {
    const request = apiClient
      .get(`${USERS_PATH}/auth`)
      .then((response) => response.data);
  
    return {
      type: AUTH_USER,
      payload: request
    };
  }
  
  export function logoutUser() {
    const request = apiClient
      .get(`${USERS_PATH}/logout`)
      .then((response) => response.data);
  
    return {
      type: LOGOUT_USER,
      payload: request
    };
  }
  
  export function getCartItems(cartItems, userCart) {
    const request = apiClient
      .get(`/api/product/products_by_id?id=${cartItems}&type=array`)
      .then((res) => {
        userCart.forEach((cartItem) => {
          res.data.forEach((productDetail, index) => {
            if (cartItem.id === productDetail._id) {
              res.data[index].quantity = cartItem.quantity;
            }
          });
        });
        return res.data;
      });
    return { type: GET_CART_ITEMS, payload: request };
  }
  
  export function chooseColor(colorArray) {
    return { type: GET_COLORS, payload: colorArray };
  }
  
  //Cart에 담는 용도
  export function addToCart(id) {
    let body = {
      productId: id
    };
    const request = apiClient
      .post(`${USERS_PATH}/addToCart`, body)
      .then((response) => response.data);
  
    return {
      type: ADD_TO_CART,
      payload: request
    };
  }
  
  export function removeCartItem(productId) {
    const request = apiClient
      .get(`/api/users/removeFromCart?id=${productId}`)
      .then((res) => {
        res.data.cart.forEach((item) => {
          res.data.productInfo.forEach((product, index) => {
            if (item.id === product._id) {
              res.data.productInfo[index].quantity = item.quantity;
            }
          });
        });
  
        return res.data;
      });
    return {
      type: REMOVE_CART_ITEM,
      payload: request
    };
  }
  
  export function onSuccessBuy(data) {
    const request = apiClient
      .post(`/api/users/successBuy`, data)
      .then((res) => res.data);
  
    return {
      type: ON_SUCCESS_BUY,
      payload: request
    };
  }
  