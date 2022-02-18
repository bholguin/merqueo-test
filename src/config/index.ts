import useStoreConfig from "./redux";
import useAxiosInterceptor from "./axios";

const useConfig = () => {
  return {
    useStoreConfig,
    useAxiosInterceptor,
  };
};

export default useConfig;
