import webpack from "webpack";
import { Webpack } from "./utils/types";
import { devServer, loaders, plugins, resolve } from "./modules";

type BuildConfig = (options: Webpack.BaseOptions) => webpack.Configuration;

export const buildConfig: BuildConfig = (options) => {
   const isDevMode = options.mode !== Webpack.Mode.Prod;
   const modulesOptions = { ...options, isDevMode };

   const config = {
      mode: options.mode ?? Webpack.Mode.Dev,
      entry: options.paths.entry,
      output: {
         path: options.paths.output,
         filename: "[name].[contenthash].js",
         clean: true,
      },
      plugins: plugins(modulesOptions),
      module: { rules: loaders(modulesOptions) },
      resolve: resolve(modulesOptions),
      devServer: devServer(modulesOptions),
      devtool: isDevMode ? "inline-source-map" : undefined,
   };

   return config;
};
