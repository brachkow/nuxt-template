export default {
  target: 'static',
  build: {
    terser: {
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },
  server: {
    port: 1111,
    host: '0.0.0.0',
  },
};
