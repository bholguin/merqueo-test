import useCreateReducer from "helpers/createReducer";
import useInitialStates from "models/initialStates";
import { IProduct, IProductInitial } from "models/interfaces/product";
import useStrings from "strings";
export const useProductsReducers = () => {
  const { createReducer } = useCreateReducer();

  const { useProductsInitialStates } = useInitialStates();
  const { initialStateProduct } = useProductsInitialStates();

  const { useProductTypes } = useStrings();
  const { GET_PRODUCTS } = useProductTypes();

  const products = createReducer(initialStateProduct, {
    [GET_PRODUCTS](
      state: IProductInitial,
      action: { payload: Array<IProduct> }
    ) {
      return {
        ...state,
        data: action.payload,
      };
    },
  });

  return {
    products,
  };
};
