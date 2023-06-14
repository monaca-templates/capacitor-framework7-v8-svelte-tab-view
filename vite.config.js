
import path from 'path';



const SRC_DIR = path.resolve(__dirname, './src');
const PUBLIC_DIR = path.resolve(__dirname, './public');
const BUILD_DIR = path.resolve(__dirname, './www',);
const HOST = process.env.MONACA_SERVER_HOST || '0.0.0.0';
export default async () => {
  const { svelte } = await import('@sveltejs/vite-plugin-svelte');
  return  {
    plugins: [
      svelte(),

    ],
    root: SRC_DIR,
    base: '',
    publicDir: PUBLIC_DIR,
    build: {
      outDir: BUILD_DIR,
      assetsInlineLimit: 0,
      emptyOutDir: false,
      rollupOptions: {
        treeshake: false,
      },
    },
    resolve: {
      alias: {
        '@': SRC_DIR,
      },
    },
    server: {
      host: HOST,
      port: 8080,
    },

  };
}
