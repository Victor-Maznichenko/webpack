export namespace Webpack {
   export enum Mode {
      Dev = "development",
      Prod = "production",
   }

   interface Paths {
      output: string;
      entry: string;
      html: string;
      css: string;
   }

   export interface Enviroment {
      mode?: Mode;
      port?: number;
   }

   export interface BaseOptions extends Enviroment {
      paths?: Paths;
   }

   export interface ModuleOptions extends BaseOptions {
      isDevMode: boolean;
   }
}
