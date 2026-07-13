export const initialState = {
  currentStep: 1,

  selections: {},


};

export default function bundleReducer(state, action) {
  switch (action.type) {
    case "NEXT_STEP":
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    case "PREVIOUS_STEP":
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };
    default:
      return state;
  }
}