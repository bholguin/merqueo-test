import axios from "axios";

export const useProductsProvider = () => {
  const getProducts = (): Promise<any> => {
    return axios({
      method: "get",
      url: "729fdd53-f365-49b4-bd55-f7e10bcc9a4b",
    });
  };

  return {
    getProducts,
  };
};
