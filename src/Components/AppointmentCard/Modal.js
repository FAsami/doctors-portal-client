import React from "react";
import ReactDom from "react-dom";
export default function Modal({ children, open, onClose }) {
  if (!open) return null;

  const modalStyles = {
    position: "fixed",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    zIndex: 1000,
    backgroundColor: "#fff"
  };
  const overLayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    backgroundColor: "rgba(0,0,0,0.6)"
  };
  return ReactDom.createPortal(
    <>
      <div style={overLayStyle} onClick={onClose} />
      <div style={modalStyles}>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
