import { Configuration } from "webpack";
import { Webpack } from "../utils/types";

type Resolve = (options: Webpack.ModuleOptions) => Configuration["resolve"];

export const resolve: Resolve = ({ paths }) => ({
   extensions: [".ts", ".tsx", ".js"],
   alias: {
      "@": paths.src,
   },
});
