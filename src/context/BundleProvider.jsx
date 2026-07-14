import { useReducer } from "react";

import BundleContext from "./BundleContext";
import bundleReducer, { initialState } from "./bundleReducer";

function BundleProvider({ children }) {
  const [state, dispatch] = useReducer(
    bundleReducer,
    initialState,
    (initialState) => {
      const savedSelections = localStorage.getItem("bundle");

      if (!savedSelections) {
        return initialState;
      }

      return {
        ...initialState,
        selections: JSON.parse(savedSelections),
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