import { Dispatch } from "@reduxjs/toolkit";
import useServices from "api/services";
import useStrings from "strings";

export const useProductActions = () => {
  const { useProductServices } = useServices();
  const { getProductService } = useProductServices();

  const { useProductTypes } = useStrings();
  const { GET_PRODUCTS } = useProductTypes();

  const actGetProducts = () => async (dispatch: Dispatch) => {
    try {
      const res: any = await getProductService();
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      });
    } catch (error) {}
  };

  return {
    actGetProducts,
  };
};
