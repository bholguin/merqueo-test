import { IProduct } from "models/interfaces/product";
import dayjs from "dayjs";
import { useCallback } from "react";

const useUtils = () => {
  var formatter = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });

  const validatePromoDate = useCallback((product: IProduct): number | null => {
    if (product.attributes.special_price) {
      if (
        product.attributes.special_price_expiration_date &&
        product.attributes.special_price_starting_date
      ) {
        const today = dayjs(new Date());
        const start = dayjs(product.attributes.special_price_starting_date);
        const expiration = dayjs(
          product.attributes.special_price_expiration_date
        );

        if (today >= start && today <= expiration) {
          return product.attributes.special_price;
        }
      }
    }

    return null;
  }, []);

  return {
    formatter,
    validatePromoDate,
  };
};

export default useUtils;
