// all application level states and define action to make state changes
export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => amount + Number(item.price || 0), 0);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case 'REMOVE_FROM_BASKET': {
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
      const newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can not remove product id: ${action.id} as it is not in the basket!`);
      }

      return {
        ...state,
        basket: newBasket,
      };
    }

    default:
      return state;
  }
};

export default reducer;