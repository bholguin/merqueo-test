import useReducers from "./reducers";
import useSelectors from "./selectors";

const useModels = () => {
  return {
    useSelectors,
    useReducers,
  };
};

export default useModels;
