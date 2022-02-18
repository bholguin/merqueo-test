import { useCallback, useEffect } from "react";
import axios from "axios";

const useAxiosInterceptor = () => {
  const axiosApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  const handleRequestSuccess = useCallback((request: any) => {
    return request;
  }, []);

  const handleRequestError = useCallback(async (error: string) => {
    console.log(`REQUEST ERROR! => ${error}`);
    throw error;
  }, []);

  const handleResponseSuccess = useCallback((response: any) => {
    return response;
  }, []);

  const handleResponseError = useCallback(async (error: string) => {
    console.log(error);
    throw error;
  }, []);

  useEffect(() => {
    //config Axios for api
    axiosApi.defaults.params = {};
    axiosApi.interceptors.request.use(handleRequestSuccess, handleRequestError);
    axiosApi.interceptors.response.use(
      handleResponseSuccess,
      handleResponseError
    );
  }, [
    axiosApi,
    handleRequestSuccess,
    handleRequestError,
    handleResponseSuccess,
    handleResponseError,
  ]);

  return {
    axiosApi,
  };
};

export default useAxiosInterceptor;
