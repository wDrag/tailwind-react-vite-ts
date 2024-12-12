import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Settings } from 'luxon';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { Providers } from '@/Providers';
import { appRouter } from '@/Router';

import './index.css';

Settings.defaultZone = 'UTC';

gsap.registerPlugin(useGSAP);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={appRouter} />
    </Providers>
  </React.StrictMode>
);
