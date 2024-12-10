import { Webpack } from "../utils/types";

export const devServer = ({ isDevMode, port }: Webpack.ModuleOptions) => {
   if (!isDevMode) return;

   return {
      port: port ?? 3000,
      open: true,
   };
};
