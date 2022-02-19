import useProviders from "api/providers";

export const useProductServices = () => {
  const { useProductsProvider } = useProviders();
  const { getProducts } = useProductsProvider();

  const getProductService = (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await getProducts());
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
    getProductService,
  };
};
