const loadSchemaJSON = require("./loadSchemaJSON");
const renderToHugo = require("./renderSchemaToHugo");
const config = require("./config");
const fs = require("fs");
const fsex = require("fs.extra");

function init() {
  fs.readFile(
    __dirname + '/../../../graphql-schema2doc/src/md-data.json',
    (err, data) => {
      if (err) throw err;
      config.mdData = JSON.parse(data);
    }
  );
  var removeDir = new Promise((resolve, reject) =>
    fsex.rmrf(config.LOCATION, function(err) {
      if (err) {
        reject(err);
      } else {
        resolve("ok");
      }
    })
  );
  removeDir.then(res => {
    try {
      fsex.mkdirpSync(config.LOCATION);
      fsex.mkdirpSync(config.LOCATION + "/objects");
      fsex.mkdirpSync(config.LOCATION + "/schema");
      fsex.mkdirpSync(config.LOCATION + "/inputobjects");
      fsex.mkdirpSync(config.LOCATION + "/interfaces");
      fsex.mkdirpSync(config.LOCATION + "/enums");
      fsex.mkdirpSync(config.LOCATION + "/scalars");
      // fsex.mkdirpSync(config.LOCATION + "/changelog");
    } catch (e) {
      throw e;
    }
    loadSchemaJSON(config.URL, config.BODY).then(json => {
        renderToHugo(json);
    });
  });
}

module.exports = {
  init
};
