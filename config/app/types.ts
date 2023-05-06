export type AppDirectoryType = {
  root: string;
  config: string;
  controllers: string;
  middlewares: string;
  var: string;
};

export type AppConfigType = {
  readonly directories: AppDirectoryType;
};
