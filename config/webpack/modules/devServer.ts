import { Webpack } from "../utils/types";

export const devServer = ({ isDevMode, port }: Webpack.ModuleOptions) => {
   if (!isDevMode) return;

   return {
      hot: true,
      open: true,
      port: port ?? 3000,
      historyApiFallback: true,
   };
};
