'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleFocusNextHotKey = exports.handleFocusPreviousHotKey = exports.handleRemoveHotKey = exports.split = exports.merge = exports.serialize = exports.unserialize = exports.createInitialState = exports.html = exports.lineBreakSerializer = exports.defaultPlugins = undefined;

var _immutable = require('immutable');

var _head = require('ramda/src/head');

var _head2 = _interopRequireDefault(_head);

var _map = require('ramda/src/map');

var _map2 = _interopRequireDefault(_map);

var _path = require('ramda/src/path');

var _path2 = _interopRequireDefault(_path);

var _reduce = require('ramda/src/reduce');

var _reduce2 = _interopRequireDefault(_reduce);

var _tail = require('ramda/src/tail');

var _tail2 = _interopRequireDefault(_tail);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _alignment = require('./plugins/alignment');

var _alignment2 = _interopRequireDefault(_alignment);

var _blockquote = require('./plugins/blockquote');

var _blockquote2 = _interopRequireDefault(_blockquote);

var _code = require('./plugins/code');

var _code2 = _interopRequireDefault(_code);

var _emphasize = require('./plugins/emphasize');

var _emphasize2 = _interopRequireDefault(_emphasize);

var _headings = require('./plugins/headings');

var _headings2 = _interopRequireDefault(_headings);

var _link = require('./plugins/link');

var _link2 = _interopRequireDefault(_link);

var _lists = require('./plugins/lists');

var _lists2 = _interopRequireDefault(_lists);

var _paragraph = require('./plugins/paragraph');

var _paragraph2 = _interopRequireDefault(_paragraph);

var _parse = require('parse5');

var _parse2 = _interopRequireDefault(_parse);

var _slate = require('slate');

var _slateHtmlSerializer = require('slate-html-serializer');

var _slateHtmlSerializer2 = _interopRequireDefault(_slateHtmlSerializer);

var _slatePlainSerializer = require('slate-plain-serializer');

var _slatePlainSerializer2 = _interopRequireDefault(_slatePlainSerializer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_NODE = _paragraph.P;

// FIXME #126
/*
 * This file is part of ORY Editor.
 *
 * ORY Editor is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *  
 * ORY Editor is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *  
 * You should have received a copy of the GNU Lesser General Public License
 * along with ORY Editor.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @license LGPL-3.0
 * @copyright 2016-2018 Aeneas Rekkas
 * @author Aeneas Rekkas <aeneas+oss@aeneas.io>
 *
 */

// FIXME #125: missing types for slate internals
/* eslint-disable new-cap, arrow-body-style, react/display-name */
var defaultPlugins = exports.defaultPlugins = [new _paragraph2.default(), new _emphasize2.default(), new _headings2.default({ DEFAULT_NODE: DEFAULT_NODE }), new _link2.default(), new _code2.default({ DEFAULT_NODE: DEFAULT_NODE }), new _lists2.default({ DEFAULT_NODE: DEFAULT_NODE }), new _blockquote2.default({ DEFAULT_NODE: DEFAULT_NODE }), new _alignment2.default()
// new KatexPlugin({ DEFAULT_NODE })
];

var lineBreakSerializer = exports.lineBreakSerializer = {
  deserialize: function deserialize(el) {
    if (el.tagName.toLowerCase() === 'br') {
      return { object: 'text', text: '\n' };
    }
    if (el.nodeName === '#text') {
      if (el.value && el.value.match(/<!--.*?-->/)) return;

      return {
        object: 'text',
        leaves: [{
          object: 'leaf',
          text: el.value
        }]
      };
    }
  },
  serialize: function serialize(object, children) {
    if (object.type === 'text' || children === '\n') {
      return _react2.default.createElement('br', null);
    }
  }
};

var html = exports.html = new _slateHtmlSerializer2.default({
  rules: [].concat(defaultPlugins, [lineBreakSerializer]),
  parseHtml: _parse2.default.parseFragment
});

var options = {};

var createInitialState = exports.createInitialState = function createInitialState() {
  return {
    editorState: _slate.Value.fromJSON({
      document: {
        nodes: [{
          object: 'block',
          type: _paragraph.P,
          nodes: [{
            object: 'text',
            leaves: [{
              text: ''
            }]
          }]
        }]
      }
    }, options)
  };
};

var unserialize = exports.unserialize = function unserialize(_ref) {
  var importFromHtml = _ref.importFromHtml,
      serialized = _ref.serialized,
      editorState = _ref.editorState;

  if (serialized) {
    return { editorState: _slate.Value.fromJSON(serialized, options) };
  } else if (importFromHtml) {
    return { editorState: html.deserialize(importFromHtml, options) };
  } else if (editorState) {
    return { editorState: editorState };
  }

  return createInitialState();
};

var serialize = exports.serialize = function serialize(_ref2) {
  var editorState = _ref2.editorState;
  return {
    serialized: editorState.toJSON(editorState, options)
  };
};

var merge = exports.merge = function merge(states) {
  var nodes = (0, _map2.default)((0, _path2.default)(['editorState', 'document', 'nodes']), states);
  var mergedNodes = (0, _reduce2.default)(function (a, b) {
    return a.concat(b);
  }, (0, _head2.default)(nodes), (0, _tail2.default)(nodes));
  var mergedDocument = _slate.Document.create({ nodes: mergedNodes });
  var mergedEditorState = _slate.Value.create({ document: mergedDocument });

  return { editorState: mergedEditorState };
};

var split = exports.split = function split(state) {
  var nodes = (0, _path2.default)(['editorState', 'document', 'nodes'], state);

  return nodes.map(function (node) {
    var splittedDocument = _slate.Document.create({ nodes: (0, _immutable.List)([node]) });
    var splittedEditorState = _slate.Value.create({ document: splittedDocument });

    return { editorState: splittedEditorState };
  }).toArray();
};

// const position = (): {
//   top: ?number,
//   right: ?number,
//   left: ?number,
//   bottom: ?number
// } => {
//   if (window && window.getSelection) {
//     const selection = window.getSelection()
//     if (!selection.rangeCount) {
//       return {
//         top: null,
//         right: null,
//         left: null,
//         bottom: null,
//       }
//     }
//
//     return selection.getRangeAt(0).getBoundingClientRect()
//   }
//
//   if (window.document.selection) {
//     return window.document.selection
//       .createRange()
//       .getBoundingClientRect()
//   }
//
//   return {
//     top: null,
//     right: null,
//     left: null,
//     bottom: null,
//   }
// }

// if editor state is empty, remove cell when backspace or delete was pressed.
var handleRemoveHotKey = exports.handleRemoveHotKey = function handleRemoveHotKey(_, _ref3) {
  var editorState = _ref3.content.state.editorState;
  return new Promise(function (resolve, reject) {
    return _slatePlainSerializer2.default.serialize(editorState).length < 1 ? resolve() : reject();
  });
};

var windowSelectionWaitTime = 1;

var handleFocusPreviousHotKey = exports.handleFocusPreviousHotKey = function handleFocusPreviousHotKey(e, _ref4) {
  var editorState = _ref4.content.state.editorState;

  // const isArrowUp = e.keyCode === 38

  return new Promise(function (resolve, reject) {
    if (editorState.selection.isExpanded) {
      return reject();
    }

    setTimeout(function () {
      // if (isArrowUp && next.top === current.top) {
      //   return resolve()
      // } else
      if (editorState.selection.isAtStartOf(editorState.document.nodes.first())) {
        return resolve();
      }
      reject();
    }, windowSelectionWaitTime);
  });
};

var handleFocusNextHotKey = exports.handleFocusNextHotKey = function handleFocusNextHotKey(e, _ref5) {
  var editorState = _ref5.content.state.editorState;

  // const isArrowDown = e.keyCode === 40

  return new Promise(function (resolve, reject) {
    if (editorState.selection.isExpanded) {
      return reject();
    }

    setTimeout(function () {
      // if (isArrowDown && next.top === current.top) {
      //   return resolve()
      // } else
      if (editorState.selection.isAtEndOf(editorState.document.nodes.last())) {
        return resolve();
      }
      reject();
    }, windowSelectionWaitTime);
  });
};
//# sourceMappingURL=hooks.js.map