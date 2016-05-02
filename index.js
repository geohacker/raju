var jafar = require('jafar');

function raju(obj) {
    var jafarObject = new jafar({json: obj});
    jafarObject.listAllKeys().forEach(function (key) {
        jafarObject.replaceKey(key, key.split(':').join('_'), true, true);
    });
    return jafarObject.json;
}

module.exports = raju;