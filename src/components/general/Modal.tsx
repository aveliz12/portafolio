import React, { ReactNode } from "react";

type Props = {
  show: boolean;
  onHide: any;
  titleHead: string;
  children: ReactNode;
};

const Modal = ({ show, onHide, titleHead, children }: Props) => {
  return (
    <div
      className={`modal ${show ? "show d-block" : ""} `}
      role="dialog"
      style={{ display: show ? "block" : "none" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{titleHead}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onHide}
              aria-label="Close"
            ></button>
          </div>
          <div
            className="modal-body"
            style={{ maxHeight: "70vh", overflowY: "auto" }}
          >
            {children}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onHide}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
