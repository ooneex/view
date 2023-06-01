export type AppDirectoryType = {
  components: string;
  config: string;
  controllers: string;
  islands: string;
  middlewares: string;
  public: string;
  var: string;
  views: string;
};

export type AppConfigType = {
  readonly directories: AppDirectoryType;
  readonly assets?: {
    readonly styles?: string[];
    readonly scripts?: string[];
  };
};
