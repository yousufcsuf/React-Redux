const redux = require("redux");

const createStore = redux.createStore;
//ACTION --> PLAIN JS OBJECT
const ORDER_PIZZA = "ORDER_PIZZA";

/*
const action = {
  type: ORDER_PIZZA,
  shop_name: "Pizza shop",
};
*/

//ACTION Creator  --> action creator is a function which returns action
function orderPizza() {
  return {
    type: ORDER_PIZZA,
    shop_name: "Pizza shop",
  };
}

//Reducer
const initialState = {
  pizzaBase: 100,
  topping: ["cheese", "tomato"],
};

//reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_PIZZA:
      return {
        ...state, //copying the initialState so that we donot lose the value
        pizzaBase: pizzaBase - 1,
      };
    default:
      return state;
  }
};

//STORE -->store needs to hold application state
//1. FIRST RESPONSIBILTY --create a store

const store = createStore(reducer);

//2. SECOND RESPONSIBILITY
// It exposes a method called getState which
// gives your application access to the current state in the store
console.log("Initial State:", store.getState());

//3. Registers listeners via subscribe(listener)
// IT GETS EXECUTED ANYTIME THE STATE IN THE REDUX STORE CHANGES
store.subscribe(() => {
  console.log("subscribe");
});
