export const reducer = (state, action) => {
  if (action.type === "ADD") {
    return {
      ...state,
      cartData: [...state.cartData, { ...action.payload }],
    };
  }
  if (action.type === "REMOVE") {
    return {
      ...state,
      cartData: state.cartData.filter((val) => val.id !== action.payload),
    };
  }
   if (action.type === "INCREASE") {
    return {
      ...state,
      amount: (state.amount += action.payload),
      items: (state.items += 1),
    };
  }
  if (action.type === "DECREASE") {
    return {
      ...state,
      amount: (state.amount -= action.payload),
      items: (state.items -= 1),
    };
  }
};
