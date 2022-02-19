import { Dispatch } from "@reduxjs/toolkit";
import useServices from "api/services";

export const useProductActions = () => {
  const { useProductServices } = useServices();
  const { getProductService } = useProductServices();

  const actGetProducts = () => async (dispatch: Dispatch) => {
    try {
      const res: any = await getProductService();
      console.log(res);
    } catch (error) {}
  };

  return {
    actGetProducts,
  };
};
