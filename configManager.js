let configurationManager = function (config) {
  let c = dependencies.nesteddep1.config.get();
  c.message =  config.message
  dependencies.nesteddep1.config.set(c);
}
