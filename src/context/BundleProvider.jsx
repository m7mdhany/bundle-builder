import { useReducer } from "react";

import BundleContext from "./BundleContext";
import bundleReducer, { initialState } from "./bundleReducer";

import getRequiredSelections from "../utils/getRequiredSelections";

function BundleProvider({ children }) {
  const [state, dispatch] = useReducer(
    bundleReducer,
    initialState,
    (initialState) => {
      const savedSelections = localStorage.getItem("bundle");

      if (!savedSelections) {
        return {
          ...initialState,
          selections: {
            ...getRequiredSelections(),
            ...initialState.selections,
          },
        };
      }

      return {
        ...initialState,
        selections: {
          ...getRequiredSelections(),
          ...JSON.parse(savedSelections),
        },
      };
    }
  );

  return (
    <BundleContext.Provider value={{ state, dispatch }}>
      {children}
    </BundleContext.Provider>
  );
}

export default BundleProvider;