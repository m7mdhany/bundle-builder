import { useReducer } from 'react'
import BundleContext from "./BundleContext";
import bundleReducer, { initialState } from "./bundleReducer";

function BundleProvider({ children }) {

  const [state, dispatch] = useReducer(bundleReducer, initialState);

  return (
    <BundleContext.Provider value={{ state, dispatch }}>
      {children}
    </BundleContext.Provider>
  );

}

export default BundleProvider 
