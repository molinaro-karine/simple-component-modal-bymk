"use strict";

var _interopRequireWildcard =
  require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = Modal;
var _react = _interopRequireWildcard(require("react"));
require("./modal.css");
//styles

function Modal(_ref) {
  var message = _ref.message,
    isVisible = _ref.isVisible,
    handleClose = _ref.handleClose;
  (0, _react.useEffect)(
    function () {
      var close = function close(e) {
        if (e.keyCode === 27) {
          handleClose();
        }
      };
      if (modalRef.current && isVisible) {
        modalRef.current.addEventListener("keydown", close);
        closeButtonRef.current.focus();
      }
    },
    [isVisible, handleClose]
  );
  var modalRef = (0, _react.useRef)(null);
  var closeButtonRef = (0, _react.useRef)(null);
  return (
    isVisible &&
    /*#__PURE__*/ _react.default.createElement(
      "div",
      {
        className: "modal-wrapper",
        ref: modalRef,
        tabIndex: "-1",
      },
      /*#__PURE__*/ _react.default.createElement(
        "div",
        {
          className: "modal",
        },
        /*#__PURE__*/ _react.default.createElement(
          "p",
          {
            className: "modal-message",
          },
          message
        ),
        /*#__PURE__*/ _react.default.createElement(
          "button",
          {
            type: "button",
            ref: closeButtonRef,
            className: "modal-closing",
            "aria-label": "Close",
            onClick: handleClose,
          },
          "X"
        )
      ),
      /*#__PURE__*/ _react.default.createElement("div", {
        className: "modal-backdrop",
      })
    )
  );
}
