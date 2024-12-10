import { Configuration } from "webpack";
import { Webpack } from "../utils/types";

type Resolve = (options: Webpack.ModuleOptions) => Configuration["resolve"];

export const resolve: Resolve = () => ({
   extensions: [".ts", ".tsx", ".js"],
});
