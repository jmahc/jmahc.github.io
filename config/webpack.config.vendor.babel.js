import webpack from 'webpack'

import entries from './dependencies.babel'
import PATHS from './paths.babel'

const vendorLibraryName = 'vendors_lib'

const vendorConfig = {
  context: PATHS.root,
  devtool: '#source-map',
  entry: entries,
  output: {
    filename: 'vendors.dll.js',
    library: vendorLibraryName,
    path: PATHS.dll
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.DllPlugin({
      name: vendorLibraryName,
      path: PATHS.vendorManifest
    })
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  target: 'web'
}

export default vendorConfig
