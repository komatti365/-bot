const log4js = require("log4js");
log4js.configure({
  appenders: { gchat: { type: "file", filename: "gchatlog.txt" } },
  categories: { default: { appenders: ["gchat"], level: "trace" } }
});
const logger = exports = module.exports = log4js.getLogger("gchat");
