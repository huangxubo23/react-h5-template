import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';
import { Toast } from 'antd-mobile';
import { getToken } from '@/utils/auth';

const codeMessage: any = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const checkStatus = (status: number, msg: string) => {
  Toast.show({
    icon: 'fail',
    content: codeMessage[status] || msg,
  });
};

const toJson = (blob) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener('loadend', function () {
      resolve(JSON.parse(reader.result as string));
    });
    reader.readAsText(blob, 'utf-8');
  });
};

// create an axios instance
const request: any = axios.create({
  baseURL: '/api', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 60000, // request timeout
});

// request interceptor
request.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // do something before request is sent
    const token = getToken();
    if (token) {
      config.headers['token'] = getToken();
    }
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    debugger;
    return Promise.reject(error);
  }
);

// response interceptor
request.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  async (response: AxiosResponse<any>) => {
    let { data: res, config } = response;

    if (config.responseType === 'blob') {
      if (res.type !== 'application/json') {
        const url = window.URL.createObjectURL(new Blob([res]));
        const link = document.createElement('a');
        const contentDisposition = response.headers['content-disposition'];
        let fileName = 'unknown';
        if (contentDisposition) {
          const fileNameMatch = contentDisposition.match(/filename=(.+)/);
          if (fileNameMatch.length === 2) fileName = fileNameMatch[1];
        }
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        return fileName;
      }

      res = await toJson(res);
    }

    if (res.code !== 0) {
      if (res.msg) {
        Toast.show({
          icon: 'fail',
          content: res.msg,
        });
      }

      return Promise.reject(res);
    } else {
      return res.result;
    }
  },
  (error: AxiosError) => {
    const { response, message } = error || {};
    const msg: string =
      (response && response.data && response.data.message) ||
      message ||
      '请求失败';
    console.error('==request error==', error); // for debug
    checkStatus(error.response && error.response.status, msg);
    throw error;
  }
);

export default request;
