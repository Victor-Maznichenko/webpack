export namespace Webpack {
   export enum Mode {
      Dev = "development",
      Prod = "production",
   }

   interface Paths {
      output: string;
      public: string;
      entry: string;
      html: string;
      css: string;
      src: string;
   }

   export interface Enviroment {
      mode?: Mode;
      port?: number;
      analyzer?: boolean;
      platform?: "mobile" | "desktop";
   }

   export interface BaseOptions extends Enviroment {
      paths?: Paths;
   }

   export interface ModuleOptions extends BaseOptions {
      isDevMode: boolean;
   }
}
