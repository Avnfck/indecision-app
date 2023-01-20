"use strict";

var app = {
  title: 'Visibility Toggle',
  buttonTextShow: 'Show details',
  buttonTextHide: 'Hide details',
  textToShow: 'Text is now unhidden.'
};
var visibility = false;
var toggleVisibility = function toggleVisibility() {
  visibility = !visibility;
  render();
};
var appRoot = document.getElementById('app');
var render = function render() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), /*#__PURE__*/React.createElement("button", {
    onClick: toggleVisibility
  }, visibility ? app.buttonTextHide : app.buttonTextShow), visibility && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, app.textToShow)));
  ReactDOM.render(template, appRoot);
};
render();
