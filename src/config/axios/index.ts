import { useCallback, useEffect } from "react";
import axios from "axios";

const useAxiosInterceptor = () => {
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
    //config Axios for Api
    axios.defaults.baseURL = process.env.REACT_APP_API_URL;
    axios.defaults.params = {};
    axios.interceptors.request.use(handleRequestSuccess, handleRequestError);
    axios.interceptors.response.use(handleResponseSuccess, handleResponseError);
  }, [
    handleRequestSuccess,
    handleRequestError,
    handleResponseSuccess,
    handleResponseError,
  ]);
};

export default useAxiosInterceptor;
