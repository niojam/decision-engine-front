import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from 'axios';
import { toast } from 'react-toastify';

const axiosClient = axios.create({
  baseURL: '/api',
  timeout: 30000,
});

const defaultHeaders = (): Record<string, string> => ({
  'Content-Type': 'application/json',
});

const defaultOptions = (
  customHeaders?: AxiosRequestHeaders,
): AxiosRequestConfig => {
  const headers = {
    ...defaultHeaders(),
    ...customHeaders,
  };
  return {
    headers,
  };
};
const request = async (
  customOptions: AxiosRequestConfig,
): Promise<AxiosResponse> => {
  const { headers, ...requestOptions } = customOptions;
  const options = {
    ...defaultOptions(headers as AxiosRequestHeaders),
    ...requestOptions,
  };
  try {
    return await axiosClient(options);
  } catch (error: any) {
    toast.error('Uuuups something went wrong');
  }
};

const requestData = async (
  customOptions: AxiosRequestConfig,
): Promise<AxiosResponse['data']> => {
  const response = await request(customOptions);
  return response.data;
};

const getUrlParams = (
  params:
    | string
    | string[][]
    | Record<string, string>
    | URLSearchParams
    | undefined,
) => new URLSearchParams(params).toString();

const http = {
  get(options: AxiosRequestConfig): Promise<AxiosResponse['data']> {
    return requestData({
      ...options,
      method: 'get',
    });
  },
  post(options: AxiosRequestConfig): Promise<AxiosResponse['data']> {
    return requestData({
      ...options,
      method: 'post',
    });
  },
  put(options: AxiosRequestConfig): Promise<AxiosResponse['data']> {
    return requestData({
      ...options,
      method: 'put',
    });
  },
  patch(options: AxiosRequestConfig): Promise<AxiosResponse['data']> {
    return requestData({
      ...options,
      method: 'patch',
    });
  },
  delete(options: AxiosRequestConfig): Promise<AxiosResponse['data']> {
    return requestData({
      ...options,
      method: 'delete',
    });
  },
  request,
  getUrlParams,
};

export { http };
