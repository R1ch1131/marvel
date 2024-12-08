import axios, { AxiosInstance, AxiosError } from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CryptoJS from 'crypto-js';

const baseURL = 'https://gateway.marvel.com/v1/public/';

const marvelApi: AxiosInstance = axios.create({
  baseURL,
});

marvelApi.interceptors.request.use(
  (config) => {
    const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_API_KEY;
    const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_API_KEY;
    const ts = new Date().getTime().toString();
    const stringToHash = ts + privateKey + publicKey;
    const hash = CryptoJS.MD5(stringToHash).toString();

    config.params = {
      ...config.params,
      apikey: publicKey,
      ts: ts,
      hash: hash,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

marvelApi.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      toast.error(`Ошибка API: ${error.response.status} - ${error.response.statusText}`, { position: 'top-right' });
      console.error("Детали ошибки:", error.response);
      
      if (error.response.status === 401 || error.response.status === 403) {
        console.error("Проверьте правильность ключей API и корректность формирования хэша.");
      }
    } else if (error.request) {
      toast.error("Ошибка сети: Нет ответа от сервера.", { position: 'top-right' });
      console.error("Сетевая ошибка:", error.request);
    } else {
      toast.error(`Ошибка: ${error.message}`, { position: 'top-right' });
      console.error("Другая ошибка:", error.message);
    }
    return Promise.reject(error);
  }
);

export default marvelApi;