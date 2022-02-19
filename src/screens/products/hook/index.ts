import useActions from "api/actions";
import { useEffect } from "react";
import useModels from "models";
import { IProduct } from "models/interfaces/product";

export const useProducts = () => {
  const { dispatch, useProductActions } = useActions();
  const { actGetProducts, actAddProductToCar, actLessProductToCar } =
    useProductActions();

  const { useSelectors } = useModels();
  const { useSelector, useProductSelectors } = useSelectors();

  const { productSelector } = useProductSelectors();

  const products: Array<IProduct> = useSelector(productSelector);

  const addProduct = (product: IProduct) => {
    dispatch(actAddProductToCar(product));
  };

  const lessProduct = (product: IProduct) => {
    dispatch(actLessProductToCar(product));
  };

  useEffect(() => {
    dispatch(actGetProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return {
    products,
    addProduct,
    lessProduct,
  };
};
