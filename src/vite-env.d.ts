/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly ENV_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
