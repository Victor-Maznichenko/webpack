import { Webpack } from "../../utils/types";

export const babelLoader = ({ isDevMode }: Webpack.ModuleOptions) => {
   return {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: {
         loader: "babel-loader",
         options: {
            presets: [
               "@babel/preset-env",
               "@babel/preset-typescript",
               [
                  "@babel/preset-react",
                  {
                     runtime: isDevMode ? "automatic" : "classic",
                  },
               ],
            ],
         },
      },
   };
};
