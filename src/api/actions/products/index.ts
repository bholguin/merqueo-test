import { Dispatch } from "@reduxjs/toolkit";
import useServices from "api/services";
import { IProduct } from "models/interfaces/product";
import useStrings from "strings";

export const useProductActions = () => {
  const { useProductServices } = useServices();
  const { getProductService } = useProductServices();

  const { useProductTypes } = useStrings();
  const { GET_PRODUCTS } = useProductTypes();

  const actGetProducts = () => async (dispatch: Dispatch, getState: any) => {
    try {
      const state = getState();
      const products: Array<IProduct> = [...state.products.data];

      const res: any = await getProductService();
      let dataProducts: Array<IProduct> = res.data.data;

      dataProducts = dataProducts.map((item: IProduct) => {
        const aux = products.find((prod: IProduct) => prod.id === item.id);
        return aux
          ? { ...item, cant_selected: aux.cant_selected }
          : { ...item };
      });

      dispatch({
        type: GET_PRODUCTS,
        payload: dataProducts,
      });
    } catch (error) {}
  };

  const actAddProductToCar =
    (product: IProduct) => (dispatch: Dispatch, getState: any) => {
      const state = getState();
      let products: Array<IProduct> = [...state.products.data];
      products = products.map((item: IProduct) => {
        if (item.id === product.id) {
          const cant = item.cant_selected ? item.cant_selected : 0;
          return { ...item, cant_selected: cant + 1 };
        } else {
          return { ...item };
        }
      });

      dispatch({
        type: GET_PRODUCTS,
        payload: products,
      });
    };

  const actLessProductToCar =
    (product: IProduct) => (dispatch: Dispatch, getState: any) => {
      const state = getState();
      let products: Array<IProduct> = [...state.products.data];
      products = products.map((item: IProduct) => {
        const cant = item.cant_selected ? item.cant_selected : 0;
        if (item.id === product.id && cant > 0) {
          return { ...item, cant_selected: cant - 1 };
        } else {
          return { ...item };
        }
      });

      dispatch({
        type: GET_PRODUCTS,
        payload: products,
      });
    };

  return {
    actGetProducts,
    actAddProductToCar,
    actLessProductToCar,
  };
};
