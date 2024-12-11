// import ReactRefreshTypescript from "react-refresh-typescript";
import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { babelLoader } from "./babelLoader";
import { Webpack } from "../../utils/types";

type Loaders = (options: Webpack.ModuleOptions) => ModuleOptions["rules"];

export const loaders: Loaders = ({ isDevMode, ...options }) => {
   /*    const tsLoader = {
      exclude: /node_modules/,
      test: /\.tsx?$/,
      use: [
         {
            loader: "ts-loader",
            options: {
               transpileOnly: true,
               getCustomTransformers: () => ({
                  before: [isDevMode && ReactRefreshTypescript()].filter(Boolean),
               }),
            },
         },
      ],
   };
 */
   const cssLoader = {
      loader: "css-loader",
      options: {
         modules: {
            localIdentName: isDevMode ? "[local]-[hash:base64:5]" : "[hash:base64:8]",
         },
      },
   };

   const styleLoaders = {
      test: /\.s[ac]ss$/i,
      use: [!isDevMode ? MiniCssExtractPlugin.loader : "style-loader", cssLoader, "sass-loader"],
   };

   const imageLoader = {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: "asset/resource",
   };

   const fontLoader = {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: "asset/resource",
   };

   return [babelLoader({ isDevMode, ...options }), styleLoaders, imageLoader, fontLoader];
};
