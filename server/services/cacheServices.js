const NodeCache = require("node-cache");
const globalCache = new NodeCache({ stdTTL: 600, checkperiod: 610 });

var cacheService = {
  setCache: function (key, value) {
    //Set value with ttl
    return globalCache.set(key, value, function (err, success) {
      if (!err && success) {
        return true;
      } else {
        return false;
      }
    });
  },
  getCache: function (key) {
    //Return total value
    return globalCache.get(key, function (err, value) {
      if (!err) {
        if (value == undefined) {
          return false;
        } else {
          return value;
        }
      }
    });
  },
  //Use this for when getterFunc is async 
  lazyGetCache: function (key, getterFunc) {
    const value = cacheService.getCache(key);
    if (value != undefined) {
      return Promise.resolve(value);
    } else {
      return getterFunc()
        .then(function(value){
          cacheService.setCache(key, value);
          return value;
        }
      ).catch(function(e){
        console.log(e);
        return null;
      });
    }
  }
}

module.exports = cacheService;