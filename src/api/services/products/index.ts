import useProviders from "api/providers";
import { trackPromise } from "react-promise-tracker";

export const useProductServices = () => {
  const { useProductsProvider } = useProviders();
  const { getProducts } = useProductsProvider();

  const getProductService = (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(getProducts()));
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
    getProductService,
  };
};
