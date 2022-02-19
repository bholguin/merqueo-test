import useSelectors from "models/selectors";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const useHeader = () => {
  const navigate = useNavigate();
  const { useSelector, useProductSelectors } = useSelectors();
  const { productSelector } = useProductSelectors();

  const [totalProducts, setTotalProducts] = useState<number>(0);

  const products = useSelector(productSelector);

  const goToShoopingCar = () => navigate(`/shopping-car`);

  useEffect(() => {
    setTotalProducts(
      products.reduce((acc, a) => {
        const cant = a.cant_selected ? a.cant_selected : 0;
        return acc + cant;
      }, 0)
    );
  }, [products]);

  return {
    totalProducts,
    goToShoopingCar,
  };
};
