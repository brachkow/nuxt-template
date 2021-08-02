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
};
