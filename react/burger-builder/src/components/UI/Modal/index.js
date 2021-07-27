import React, { useMemo } from "react";

import Backdrop from "../Backdrop";

import css from "./styles.module.css";

function Modal({ children, show, modalClosed }) {
  const memoModal = useMemo(
    () => (
      <React.Fragment>
        <Backdrop show={show} clicked={modalClosed} />
        <div
          style={{
            transform: show ? "translateY(0)" : "translateY(-100vh)",
            opacity: show ? "1" : "0",
          }}
          className={css.Modal}
        >
          {children}
        </div>
      </React.Fragment>
    ),
    [show]
  );

  return memoModal;
}

export default Modal;
