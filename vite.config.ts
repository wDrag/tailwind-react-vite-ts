import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    build: {
      sourcemap: true,
      target: 'esnext',
    },
    plugins: [
      react(),
      svgr({
        svgrOptions: {
          ref: true,
        },
      }),
      nodePolyfills(),
      tsconfigPaths(),
    ],
    envPrefix: 'ENV_',
    server: {
      port: 3000,
    },
  };
});
