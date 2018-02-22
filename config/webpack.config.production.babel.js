import merge from 'webpack-merge'
import webpack from 'webpack'

import CompressionPlugin from 'compression-webpack-plugin'
import InlineChunkManifestHtmlWebpackPlugin from 'inline-chunk-manifest-html-webpack-plugin'
import OptimizeCSSPlugin from 'optimize-css-assets-webpack-plugin'
import PreloadWebpackPlugin from 'preload-webpack-plugin'
import PurifyCSSPlugin from 'purifycss-webpack'
import WebpackChunkHash from 'webpack-chunk-hash'

import isVendor from './isVendor.babel'
import PATHS from './paths.babel'
import { extractCss } from './webpack.config.parts.babel'

const productionConfig = merge([
  extractCss({
    include: PATHS.app,
    exclude: /node_modules/,
    options: {
      config: {
        path: PATHS.postCssConfig
      }
    }
  }),
  {
    output: {
      chunkFilename: '[name].[chunkhash].js',
      filename: '[name].[chunkhash].js',
      path: PATHS.build,
      publicPath: PATHS.publicPath
    },
    performance: {
      hints: 'warning',
      maxAssetSize: 100000,
      maxEntrypointSize: 100000
    },
    plugins: [
      new PreloadWebpackPlugin({
        rel: 'preload',
        as: 'script',
        include: 'asyncChunks'
      }),
      new webpack.optimize.ModuleConcatenationPlugin(),
      // Remove unused CSS.
      new PurifyCSSPlugin({
        minimize: false,
        moduleExtensions: ['.html', '.ejs'],
        paths: PATHS.purifyCssPaths,
        purifyOptions: {
          info: true,
          minify: true,
          output: false,
          rejected: true
        },
        styleExtensions: ['.css', '.scss', '.sass']
      }),
      new OptimizeCSSPlugin({
        cssProcessorOptions: {
          safe: true
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        async: true,
        children: true,
        name: 'app'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: isVendor
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
        chunks: ['app', 'vendor']
      }),
      // JavaScript minification
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true,
          unused: true,
          dead_code: true,
          drop_debugger: true,
          warnings: false
        },
        sourceMap: true,
        comments: false
      }),
      new webpack.HashedModuleIdsPlugin(),
      new WebpackChunkHash({
        algorithm: 'md5'
      }),
      new InlineChunkManifestHtmlWebpackPlugin({
        filename: 'manifest.json',
        manifestVariable: 'webpackManifest',
        chunkManifestVariable: 'webpackChunkManifest',
        dropAsset: false
      }),
      new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.(js|css|html)$/,
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  }
])

export default productionConfig