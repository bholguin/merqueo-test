import useActions from "api/actions";
import { useEffect } from "react";
import useModels from "models";

export const useProducts = () => {
  const { dispatch, useProductActions } = useActions();
  const { actGetProducts } = useProductActions();

  const { useSelectors } = useModels();
  const { useSelector, useProductSelectors } = useSelectors();

  const { productSelector } = useProductSelectors();

  const products = useSelector(productSelector);

  useEffect(() => {
    dispatch(actGetProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return {
    products,
  };
};
