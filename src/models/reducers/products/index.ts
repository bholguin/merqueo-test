import useCreateReducer from "helpers/createReducer";
import useStrings from "strings";
export const useProductsReducers = () => {
  const { createReducer } = useCreateReducer();

  const { useProductTypes } = useStrings();
  const { GET_PRODUCTS } = useProductTypes();

  const products = createReducer(
    {},
    {
      [GET_PRODUCTS](state: any, action: { payload: any }) {
        return {
          ...state,
          ...action.payload,
        };
      },
    }
  );

  return {
    products,
  };
};
