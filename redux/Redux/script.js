//WRTING ACTIONS
const ORDER_PIZZA = "ORDER_PIZZA";

//ACTION  --> plain JS object
/*
const action = {
  type: ORDER_PIZZA,
  shop_name: "Pizza Shop",
};
*/

// Action Creator --> Its a function which returns action
function orderPizza() {
  return {
    type: ORDER_PIZZA,
    shop_name: "Pizza Shop",
  };
}
