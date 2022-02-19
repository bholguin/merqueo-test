import { IProduct } from "models/interfaces/product";
import useSelectors from "models/selectors";
import { useEffect, useState } from "react";
export const useShoppingCar = () => {
  const { useSelector, useProductSelectors } = useSelectors();
  const { productSelector } = useProductSelectors();
  const [auxProducts, setAuxProducts] = useState<Array<IProduct>>([]);
  const products = useSelector(productSelector);

  useEffect(() => {
    setAuxProducts([
      ...products.filter((item: IProduct) => {
        return item.cant_selected && item.cant_selected > 0;
      }),
    ]);
  }, [products]);

  return {
    auxProducts,
  };
};
