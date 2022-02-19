import { IProduct } from "models/interfaces/product";
import { useNavigate } from "react-router-dom";
import useSelectors from "models/selectors";
import useActions from "api/actions";
import useUtils from "helpers/utils";
import { useEffect, useState } from "react";
export const useShoppingCar = () => {
  const navigate = useNavigate();

  const { validatePromoDate } = useUtils();

  const { dispatch, useProductActions } = useActions();
  const { actAddProductToCar, actLessProductToCar, actCleanProductToCar } =
    useProductActions();

  const { useSelector, useProductSelectors } = useSelectors();
  const { productSelector } = useProductSelectors();
  const [auxProducts, setAuxProducts] = useState<Array<IProduct>>([]);
  const products = useSelector(productSelector);

  const [totalPrice, setTotalPrice] = useState<number>(0);

  const goToProducts = () => navigate("/");

  const addProduct = (product: IProduct) => {
    dispatch(actAddProductToCar(product));
  };

  const lessProduct = (product: IProduct) => {
    dispatch(actLessProductToCar(product));
  };

  const cleanCar = () => {
    dispatch(actCleanProductToCar(() => navigate("/")));
  };

  useEffect(() => {
    setAuxProducts([
      ...products.filter((item: IProduct) => {
        return item.cant_selected && item.cant_selected > 0;
      }),
    ]);
    setTotalPrice(
      products.reduce((acc, a) => {
        const cant = a.cant_selected ? a.cant_selected : 0;
        const price = validatePromoDate(a);
        return acc + cant * (price ? price : a.attributes.price);
      }, 0)
    );
  }, [products, validatePromoDate]);

  return {
    auxProducts,
    totalPrice,
    addProduct,
    lessProduct,
    goToProducts,
    cleanCar,
  };
};
