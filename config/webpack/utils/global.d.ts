declare module "*.css" {
   interface IClassNames {
      [className: string]: string;
   }
   const classNames: IClassNames;
   export = classNames;
}

declare module "*.scss" {
   interface IClassNames {
      [className: string]: string;
   }
   const classNames: IClassNames;
   export = classNames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.gif";
declare module "*.jpeg";
declare module "*.svg";
declare const __PLATFORM__: "platform" | "desktop";
