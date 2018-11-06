'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
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

/* eslint-disable no-unused-vars */


/**
 * @class this is the base class for slate plugins
 */
var Plugin = function Plugin() {
  _classCallCheck(this, Plugin);

  this.plugins = [];

  this.onKeyDown = function (e, data, state) {
    return null;
  };

  this.hoverButtons = [];
  this.toolbarButtons = [];
}
/**
 * @member a unique identifier of the plugin
 */


/**
 * @member the schema that is automatically collected from all plugins
 */


/**
 * @member the slate plugins added to the editor
 */


/**
 * @member serialize a plugin's state to html
 */


/**
 * @member serialize a plugin's state from html
 */


/**
 * This handler is called when any key is pressed
 *
 * @param e the keydown event
 * @param data utilities for hotkey logic
 * @param state the current editor state
 * @returns the new editor state if the plugin handles the hotkey
 */


/**
 * @member the buttons to be added to the hover menu
 */


/**
 * @member the buttons to be added to the global toolbar
 */


/**
 * @member the function that renders marks
 */


/**
 * @member the function that renders nodes
 */
;

exports.default = Plugin;
//# sourceMappingURL=Plugin.js.map