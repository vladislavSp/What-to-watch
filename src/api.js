import axios from 'axios';
import history from './history';

const Error = {
  UNAUTHORIZED: 401
};

const BASE_URL = `https://4.react.pages.academy/wtw`;
const TIMEOUT = 5000;
const FAVORITE_PATH = `favorite`;


export const createAPI = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response.status === Error.UNAUTHORIZED
    && !response.config.url.includes(FAVORITE_PATH)) {
      history.push(`/login`);

      // Бросаем ошибку, потому что нам важно прервать цепочку промисов после запроса авторизации.
      // Запрос авторизации - это особый случай и важно дать понять приложению, что запрос был неудачным.
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
