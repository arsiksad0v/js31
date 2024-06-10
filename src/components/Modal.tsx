import React from 'react';

interface ButtonConfig {
  type: string;
  label: string;
  onClick: () => void;
}

interface ModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  buttons?: ButtonConfig[];
}

const Modal: React.FC<ModalProps> = ({ show, onClose, title, children, buttons }) => {
  if (!show) return null;

  return (
    <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="close" onClick={onClose}>&times;</button>
          </div>
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer">
            {buttons && buttons.map((btn, idx) => (
              <button
                key={idx}
                type="button"
                className={`btn btn-${btn.type}`}
                onClick={btn.onClick}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
