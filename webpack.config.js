const path = require('path'); //Втроеный модуль nodejs, который мы получаем с помощью конструкции require. Данный модуль позволяет работать с путями, упрощает работу
const webpack = require('webpack');  // Добавил переменную webpack, с помощью которой мы можем взаимодействовать с самим вебпаком или добавлять туда что-то
const HTMLPLugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // Для сжатия CSS стилей
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin'); // Копирование файлов


module.exports = {
  entry: './src/index.js', // Точка входа
  output: {
    filename: 'bundle.js', // Название того файла, который должен получится
    path: path.resolve(__dirname, 'dist') // Путь, куда мы должны положить все исходные статические файлы, __dirname - это системная переменная, которая указывает ткущую папку, а второй параметр (дист) - куда нужно все это сложить.
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({}), // Для сжатия CSS стилей
      new UglifyJsPlugin() // для сжатия JS
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'), // Указываем публичный путь до нашего финального проекта
    port: 4200
  },
  plugins: [
    new HTMLPLugin({ // Плагин, позволяет компилировать файлы HTML с автоматическим добавлением ссылок на js файлы или css
      filename: 'index.html', // Название файла, которое мы получим на выходе в папку dist
      template: './src/pug/index.pug' //Указываем шаблон, который берем за основу
    }),
    new webpack.ProvidePlugin({ // Подключаем jQuery
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new MiniCssExtractPlugin({ // Берет мой CSS файл и компилирует его в отдельный файл style css
      filename: 'style.css'
    })
  ],
  module: {
    rules: [{
        test: /\.css$/, // Указываем расширение файла, на который будет влиять loader
        use: [MiniCssExtractPlugin.loader, 'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            config: {
              path: 'src/postcss.config.js'
            }
          }
        }] // Обязательно указываем первым style вначале, т.к вебпак считывает справа-налево, т.е. сначала он займется css, а потом style
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/, // Указываем расширение файла, на который будет влиять loader
        exclude: [/fonts/],
        loader: 'file-loader', // Это loader для изображений
        options: {
          name: 'images/[name].[ext]',
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
          exclude: [/img/], 
            use: [          
              {
                loader: "file-loader",
                options: {name: "./fonts/[name].[ext]"}
              }
            ]
      },
      {
        test: /\.pug$/, // Указываем расширение файла, на который будет влиять loader
          use: [
            "html-loader",
            {
              loader: "pug-html-loader",
              options: {
                pretty: true
              }
            }
          ]
      },
      {
        test: /\.less$/, // Указываем расширение файла, на который будет влиять loader
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'] // Обязательно указываем первым style вначале, т.к вебпак считывает справа-налево, т.е. сначала он займется css, а потом style
      },
      {
        test: /\.scss$/, // Указываем расширение файла, на который будет влиять loader
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 
        {
          loader: 'postcss-loader',
          options: {
            config: {
              path: 'src/postcss.config.js'
            }
          }
        }] // Обязательно указываем первым style вначале, т.к вебпак считывает справа-налево, т.е. сначала он займется css, а потом style
      },
      {
        test: /\.js$/, //  Это настройка для babel. Она звучит так: берем файлы с раширение JS, не трогаем те, что в node modules и используем для работы babel-loader
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
}