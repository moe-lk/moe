'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Link = function Link(_ref) {
  var attributes = _ref.attributes,
      children = _ref.children,
      node = _ref.node;
  var data = node.data;

  var href = data.get('href');

  return _react2.default.createElement(
    'a',
    Object.assign({}, attributes, { href: href }),
    children
  );
}; /*
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

exports.default = Link;
//# sourceMappingURL=node.js.map