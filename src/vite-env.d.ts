/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_APP_VERSION?: string;
    readonly VITE_MODE?: string;
    // İhtiyaca göre diğer .env tanımlarını buraya ekleyebilirsin
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  