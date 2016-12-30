cordova.define("cordova-plugin-accountkit.plugin", function(require, exports, module) {
var exec = require('cordova/exec');

var PLUGIN_NAME = 'AccountKitPlugin';

var AccountKitPlugin = {
  loginWithPhoneNumber: function(s, f , number) {
    exec(s, f, PLUGIN_NAME, 'loginWithPhoneNumber', [number]);
  },
  loginWithEmail: function(s, f,mail) {
    exec(s, f, PLUGIN_NAME, 'loginWithEmail', [mail]);
  },
  getAccessToken: function(s, f) {
    exec(s, f, PLUGIN_NAME, 'getAccessToken', []);
  },
  getCurrentAccount: function(s, f) {
    exec(s, f, PLUGIN_NAME, 'getCurrentAccount', []);
  },
  logout: function(s, f) {
    exec(s, f, PLUGIN_NAME, 'logout', []);
  }
};

module.exports = AccountKitPlugin;

});
