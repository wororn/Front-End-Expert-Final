const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  
  optimization: {
         minimize: true,
          minimizer: [
            
            //  new CssMinimizerPlugin(
            //  {
            //    test: /\.css(\?.*)?$/i,
            //    }
            //),

            new UglifyJsPlugin({
              test: /\.js(\?.*)?$/i,
              }),
        ],

     splitChunks: {
       chunks: 'all',
       minSize: 20000,
       maxSize: 70000,
       minChunks: 1,
       maxAsyncRequests: 30,
       maxInitialRequests: 30,
       automaticNameDelimiter: '~',
       enforceSizeThreshold: 50000,
       cacheGroups: {
         defaultVendors: {
           test: /[\\/]node_modules[\\/]/,
           priority: -10
         },
         default: {
           minChunks: 2,
           priority: -20,
           reuseExistingChunk: true
         }
       }
     }
   },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',          
          },
          {
            loader: 'css-loader',
            options: {
              url:false,
            }
          },
        ],
       },

       {
        test: /\.(png|jpe?g|gif|ico)$/i,
        use:[
             {

                loader:"file-loader",
                options: {                  
                    name: 'public/images/[name].[ext]'
                    }

                }
            ]                                            
        },

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public'),
          to: path.resolve(__dirname, 'dist/public'),
          globOptions: {
            ignore: ['**/images/**'],        
          }
        },
      ],
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/styles'),
          to: path.resolve(__dirname, 'dist/styles'),
        },
        {
          from: path.resolve(__dirname, 'src/scripts/homescreen'),
          to: path.resolve(__dirname, 'dist/scripts/homescreen'),
        },
      ],
    }),

    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
      ],
    }),

    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/scripts/sw.js'),
    }),

    //  new BundleAnalyzerPlugin()
   
  ],
};
