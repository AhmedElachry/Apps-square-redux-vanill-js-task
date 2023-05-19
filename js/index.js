const divOne = document.querySelector(".one");
const divTwo = document.querySelector(".two");
const divOneBtn = document.querySelector(".btn-one");
const divTwoBtn = document.querySelector(".btn-two");

// actions
function expandWidthOne(value) {
  return {
    type: "expandWidthOne",
    payload: value,
  };
}
function expandWidthTwo(value) {
  return {
    type: "expandWidthTwo",
    payload: value,
  };
}
// reducers
const divOneReducer = (state = "50%", action) => {
  switch (action.type) {
    case "expandWidthOne":
      return (state = action.payload);
    default:
      return state;
  }
};
const divTwoReducer = (state = "50%", action) => {
  switch (action.type) {
    case "expandWidthTwo":
      return (state = action.payload);
    default:
      return state;
  }
};
// combineReducers
const rootReducer = Redux.combineReducers({
  divOne: divOneReducer,
  divTwo: divTwoReducer,
});
// createStore
const store = Redux.createStore(rootReducer);

divOneBtn.addEventListener("click", () => {
  store.dispatch(expandWidthOne("100%"));
  //   const state = store.getState();
  //   divOne.style.width = state.divOne;
});
divTwoBtn.addEventListener("click", () => {
  store.dispatch(expandWidthTwo("100%"));
});

store.subscribe(() => {
  const state = store.getState();
  divOne.style.width = state.divOne;
  divTwo.style.width = state.divTwo;
});
