import { defineConfig } from 'vite'
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins:[
    dts({
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.app.json',
    }),
  ],
  build:{
    lib: {
      entry: "src/index.ts",
      name: 'project-1114.platform',
      fileName: 'index',
      formats: ['umd']
    },
    outDir: 'build',
    rollupOptions: {
      external: ["react", "react-dom", "alt-client", "natives"],
    }
  },
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
})
