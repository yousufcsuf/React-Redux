const redux = require("redux");
const combineReducers = redux.combineReducers; //--> helps to have multiple reducers
const createStore = redux.createStore;

const ORDER_PIZZA = "ORDER_PIZZA";
const ORDER_BURGER = "ORDER_BURGER";

//Action Creator
function orderPizza() {
  return {
    type: ORDER_PIZZA,
    shop_name: "Pizza shop",
  };
}

function orderBurger() {
  return {
    type: ORDER_BURGER,
    shop_name: "Burger shop",
  };
}

const initialStateForPizza = {
  pizzaBase: 100,
  topping: ["cheese", "tomato"],
};

const initialStateForBurger = {
  burgerBuns: 200,
  topping: ["cheese", "tomato"],
};

const reducerPizza = (state = initialStateForPizza, action) => {
  switch (action.type) {
    case ORDER_PIZZA:
      return {
        ...state, //copying the initialState so that we donot lose the value
        pizzaBase: state.pizzaBase - 1,
      };
    case ORDER_BURGER:
      return {
        ...state, //copying the initialState so that we donot lose the value
        burgerBuns: state.burgerBuns - 1,
      };
    default:
      return state;
  }
};

const reducerBurger = (state = initialStateForBurger, action) => {
  switch (action.type) {
    case ORDER_BURGER:
      return {
        ...state, //copying the initialState so that we donot lose the value
        burgerBuns: state.burgerBuns - 1,
      };
    default:
      return state;
  }
};

//BEFORE CREATING STORE WE HAVE TO COMBINE THE REDUCER
const rootReducer = combineReducers({
  pizza: reducerPizza,
  burger: reducerBurger,
});
const store = createStore(rootReducer);

console.log("Initial State:", store.getState());

store.subscribe(() => {
  console.log("subscribe");
  console.log("updated State:", store.getState());
});

store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderBurger());
store.dispatch(orderBurger());
