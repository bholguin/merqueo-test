import { createSelector } from "@reduxjs/toolkit";
import { IProduct, IProductInitial } from "models/interfaces/product";
import { RootStateOrAny } from "react-redux";

const useProductSelectors = () => {
  const productSelector = createSelector(
    (state: RootStateOrAny) => state.products,
    (products: IProductInitial): Array<IProduct> => {
      return products.data.filter(
        (item: IProduct) => item.attributes.price > 0 && item.attributes.status
      );
    }
  );

  return { productSelector };
};

export default useProductSelectors;
