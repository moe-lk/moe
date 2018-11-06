'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classes = require('ory-editor-core/lib/service/plugin/classes');

var _deepRenameKeys = require('deep-rename-keys');

var _deepRenameKeys2 = _interopRequireDefault(_deepRenameKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var migration = new _classes.Migration({
  toVersion: '0.0.2',
  fromVersionRange: '^0.0.1',
  migrate: function migrate(state) {
    // wrap with document
    state = Object.assign({}, state, state.serialized ? { serialized: { document: state.serialized } } : {});
    // rename keys
    state = (0, _deepRenameKeys2.default)(state, function (key) {
      switch (key) {
        case 'kind':
          return 'object';
        case 'ranges':
          return 'leaves';
        default:
          return key;
      }
    });
    return state;
  }
});

exports.default = migration;
//# sourceMappingURL=v002.js.map