import getRequiredSelections from "../utils/getRequiredSelections";
export const initialState = {
  currentStep: 1,

  selections: {
    "wyze-cam-v4": {
      category: "cameras",
      selectedVariant: "white",
      quantities: {
        white: 1,
      },
    },

    "wyze-cam-pan-v3": {
      category: "cameras",
      selectedVariant: "black",
      quantities: {
        black: 2,
      },
    },

    "wyze-sense-motion-sensor": {
      category: "sensors",
      quantity: 2,
    },

    "wyze-sense-hub": {
      category: "sensors",
      quantity: 1,
    },

    "wyze-microsd-card-256gb": {
      category: "accessories",
      quantity: 2,
    },

    "cam-unlimited": {
      category: "plans",
      quantity: 1,
    },
  },

  summary: {
    cameras: 2,
    plans: 1,
    sensors: 2,
    accessories: 1,
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

      return {
        ...state,

        selections: {
          ...state.selections,

          [productId]: state.selections[productId]
            ? {
              ...state.selections[productId],
              selectedVariant: variantId,
            }
            : {
              category: product.category,
              selectedVariant: variantId,
              quantities: {},
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
            selectedVariant:
              selections[productId]?.selectedVariant ?? variantId,
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

      if (product.isRequired) {
        const currentQuantity = product.variants.length
          ? selectedProduct.quantities[variantId] ?? 0
          : selections[productId].quantity;

        if (currentQuantity <= 1) {
          return state;
        }
      }

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
    case "ADD_REVIEW_PRODUCT": {
      const { product } = action.payload;

      const productId = product.id;

      const selections = { ...state.selections };

      const selectedProduct = selections[productId];

      if (!selectedProduct) {
        return state;
      }

      if (product.variants.length) {
        const variantId =
          Object.keys(selectedProduct.quantities)[0];

        selectedProduct.quantities[variantId]++;
      } else {
        selectedProduct.quantity++;
      }

      return {
        ...state,
        selections,
      };
    }

    case "REMOVE_REVIEW_PRODUCT": {
      const { product } = action.payload;

      const productId = product.id;

      const selections = { ...state.selections };

      const selectedProduct = selections[productId];

      if (!selectedProduct) {
        return state;
      }

      if (product.variants.length) {
        const variantId = Object.keys(
          selectedProduct.quantities
        )[0];

        if (!variantId) {
          return state;
        }

        selectedProduct.quantities[variantId]--;

        if (selectedProduct.quantities[variantId] <= 0) {
          delete selectedProduct.quantities[variantId];
        }

        if (
          Object.keys(selectedProduct.quantities).length === 0
        ) {
          delete selections[productId];
        }
      } else {
        selectedProduct.quantity--;

        if (selectedProduct.quantity <= 0) {
          delete selections[productId];
        }
      }

      return {
        ...state,
        selections,
      };
    }

    case "RESET_BUNDLE":
      return {
        ...state,
        currentStep: 1,
        selections: getRequiredSelections(),
        summary: {
          cameras: 0,
          plans: 0,
          sensors: 0,
          accessories: 0,
        },
      };

    default:
      return state;
  }
}