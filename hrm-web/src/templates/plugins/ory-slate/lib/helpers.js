'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolbarButton = exports.makeTagMark = exports.makeTagNode = undefined;

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var makeTagNode = exports.makeTagNode = function makeTagNode(Tag) {
  var NodeComponent = function NodeComponent(_ref) {
    var attributes = _ref.attributes,
        children = _ref.children,
        node = _ref.node;

    var align = node.data.get('align');
    return _react2.default.createElement(
      Tag,
      Object.assign({}, attributes, { style: { textAlign: align } }),
      children
    );
  };

  NodeComponent.displayName = Tag + '-node';

  return NodeComponent;
};

var makeTagMark = exports.makeTagMark = function makeTagMark(Tag) {
  var MarkComponent = function MarkComponent(_ref2) {
    var children = _ref2.children;
    return _react2.default.createElement(
      Tag,
      null,
      children
    );
  };

  MarkComponent.displayName = Tag + '-mark';

  return MarkComponent;
};

var ToolbarButton = exports.ToolbarButton = function ToolbarButton(_ref3) {
  var icon = _ref3.icon,
      isActive = _ref3.isActive,
      onClick = _ref3.onClick,
      _ref3$disabled = _ref3.disabled,
      disabled = _ref3$disabled === undefined ? false : _ref3$disabled;
  return _react2.default.createElement(
    _IconButton2.default,
    {
      onClick: onClick,
      style: isActive ? { color: 'rgb(0, 188, 212)' } : disabled ? { color: 'gray' } : { color: 'white' },
      disabled: disabled
    },
    icon
  );
};
//# sourceMappingURL=helpers.js.map