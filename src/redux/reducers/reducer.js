
import { produce } from 'immer';

const INIT_STATE = {
  carts: [],
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      return produce(state, (draft) => {
        const itemIndex = draft.carts.findIndex((item) => item.id === action.payload.id);

        if (itemIndex >= 0) {
          draft.carts[itemIndex].qnty += 1; // Update quantity in the draft
        } else {
          draft.carts.push({ ...action.payload, qnty: 1 }); // Add new item
        }
      });

    case "RMV_CART":
      return produce(state, (draft) => {
        const remainingItems = draft.carts.filter((el) => el.id !== action.payload);
        draft.carts = remainingItems; // Assign the filtered array to draft.carts
      });

    default:
      return state;
  }
};