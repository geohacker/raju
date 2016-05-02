function raju(obj) {
    obj.features.forEach(function(feature) {
        var props = feature.properties;
        var keys = Object.keys(props);
        keys.forEach(function(key) {
            var keySplit = key.split(':');
            if (keySplit.length >= 2) {
                var cleanKey = keySplit.join('_');
                props[cleanKey] = props[key];
                delete props[key];
            }
        });
    });
    return obj;
}

module.exports = raju;