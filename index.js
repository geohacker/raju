function raju(obj) {
    obj.features.forEach(function(feature) {
        var keys = Object.keys(feature.properties);
        keys.forEach(function(key) {
            var cleanKey = key.split(':').join('_');
            feature.properties[cleanKey] = feature.properties[key];
            delete feature.properties[key];
        });
    });
    return obj;
}

module.exports = raju;