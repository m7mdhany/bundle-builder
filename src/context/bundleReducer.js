export const initialState = {
  currentStep: 1,

  selections: {},

  summary: {
    cameras: 0,
    plans: 0,
    sensors: 0,
    accessories: 0,
  },
};


export default function bundleReducer(state, action) {
  switch (action.type) {
    case "SET_CURRENT_STEP":
      return {
        ...state,
        currentStep: action.payload,
      };

    case "SET_VARIANT": {
      const { product, variantId } = action.payload;

      const productId = product.id;

      if (!state.selections[productId]) {
        return state;
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
      const { product, variantId } = action.payload;

      const productId = product.id;

      const selections = { ...state.selections };

      if (!selections[productId]) {
        selections[productId] = product.variants.length
          ? {
            category: product.category,
            selectedVariant: variantId,
            quantities: {
              [variantId]: 1,
            },
          }
          : {
            category: product.category,
            quantity: 1,
          };
      } else {
        if (product.variants.length) {
          const selectedProduct = selections[productId];

          selectedProduct.selectedVariant = variantId;

          selectedProduct.quantities[variantId] =
            (selectedProduct.quantities[variantId] || 0) + 1;
        } else {
          selections[productId].quantity++;
        }
      }

      return {
        ...state,
        selections,
      };
    }

    case "REMOVE_PRODUCT": {
      const { product, variantId } = action.payload;

      const productId = product.id;

      const selections = { ...state.selections };

      if (!selections[productId]) {
        return state;
      }

      if (product.variants.length) {
        const selectedProduct = selections[productId];

        if (!selectedProduct.quantities[variantId]) {
          return state;
        }

        selectedProduct.quantities[variantId]--;

        if (selectedProduct.quantities[variantId] <= 0) {
          delete selectedProduct.quantities[variantId];
        }

        if (Object.keys(selectedProduct.quantities).length === 0) {
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