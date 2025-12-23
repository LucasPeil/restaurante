    import  path from "path"

export default {

  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 5173,
    hot: true
  }
}