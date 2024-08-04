import axios, { type AxiosInstance } from 'axios';
import urlJoin from 'url-join';

import { env } from '@/constants';

let client: AxiosInstance | undefined;

export const getApiClient = () => {
  if (client) return client;
  client = axios.create({
    baseURL: urlJoin(env.ENV_API_URL),
    headers: {
      'content-type': 'application/json',
    },
  });

  return client;
};
