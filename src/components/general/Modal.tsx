import { ReactNode, useEffect, useState } from "react";
import "../../styles/modal_styles.css";
type Props = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ title, isOpen, onClose, children }: Props) => {
  const [modalOpen, setModalOpen] = useState(isOpen);

  const closeModal = () => {
    setModalOpen(false);
    onClose();
  };

  useEffect(() => {
    setModalOpen(isOpen); // Sincronizar el estado interno con la propiedad isOpen
  }, [isOpen]);

  return (
    <div>
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2 className="modal-title">{title}</h2>
              <button className="close-button" onClick={closeModal}>
                X
              </button>
            </div>
            <div className="modal-content">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
