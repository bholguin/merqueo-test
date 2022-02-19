import { IProductInitial } from "models/interfaces/product";

const useProductsInitialStates = () => {
  const initialStateProduct: IProductInitial = {
    data: [],
  };

  return {
    initialStateProduct,
  };
};

export default useProductsInitialStates;
