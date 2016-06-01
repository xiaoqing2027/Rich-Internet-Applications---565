var DataStore = require("nedb");
var dbFile = new DataStore({filename:"meshdata.db", autoload:"true"});
dbFile.ensureIndex({ fieldName: 'socket_id', unique: true });

module.exports = dbFile;