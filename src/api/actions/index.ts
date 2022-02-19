import { useDispatch } from "react-redux";
import { useProductActions } from "./products";
const useActions = () => {
  const dispatch = useDispatch();
  return {
    dispatch,
    useProductActions,
  };
};

export default useActions;
