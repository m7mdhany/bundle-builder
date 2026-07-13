export const initialState = {
  currentStep: 1,

  selections: {},


};

export default function bundleReducer(state, action) {
  switch (action.type) {
    case "SET_CURRENT_STEP":
      return {
        ...state,
        currentStep: action.payload,
      };

    case "SET_VARIANT": {
      const { productId, variantId } = action.payload;

      if (!state.selections[productId]) {
        return {
          ...state,
          selections: {
            ...state.selections,
            [productId]: {
              selectedVariant: variantId,
              quantities: {},
            },
          },
        };
      }

      return {
        ...state,
        selections: {
          ...state.selections,
          [productId]: {
            ...state.selections[productId],
            selectedVariant: variantId,
          },
        },
      };
    }

    case "ADD_PRODUCT": {
      const { productId, variantId } = action.payload;

      const selections = { ...state.selections };

      if (!selections[productId]) {
        selections[productId] = variantId
          ? {
            selectedVariant: variantId,
            quantities: {
              [variantId]: 1,
            },
          }
          : {
            quantity: 1,
          };
      } else {
        if (variantId) {
          const product = selections[productId];

          product.selectedVariant = variantId;

          product.quantities[variantId] =
            (product.quantities[variantId] || 0) + 1;
        }
        else {
          selections[productId].quantity++;
        }
      }

      return {
        ...state,
        selections,
      };
    }

    case "REMOVE_PRODUCT": {
      const { productId, variantId } = action.payload;

      const selections = { ...state.selections };

      if (!selections[productId]) {
        return state;
      }

      if (variantId) {
        const product = selections[productId];

        if (!product.quantities[variantId]) {
          return state;
        }

        product.quantities[variantId]--;

        if (product.quantities[variantId] <= 0) {
          delete product.quantities[variantId];
        }

        if (Object.keys(product.quantities).length === 0) {
          delete selections[productId];
        }
      } else {
        selections[productId].quantity--;

        if (selections[productId].quantity <= 0) {
          delete selections[productId];
        }
      }

      return {
        ...state,
        selections,
      };
    }


    default:
      return state;
  }
}