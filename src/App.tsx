import React, { useState } from 'react';
import Modal from './components/Modal';
import Alert from './components/Alert';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  const handleModalClose = () => setShowModal(false);
  const handleAlertDismiss = () => setShowAlert(false);

  return (
    <div className="container mt-5">
      <h1>Project</h1>
      <button className="btn btn-primary" onClick={() => setShowModal(true)}>Show Modal</button>
      {showAlert && (
        <Alert type="warning" onDismiss={handleAlertDismiss}>
          This is a warning 
        </Alert>
      )}
      <Modal
        show={showModal}
        onClose={handleModalClose}
        title="Some kinda modal title"
        buttons={[
          { type: 'primary', label: 'Continue', onClick: () => console.log('clicked continue') },
          { type: 'danger', label: 'Close', onClick: handleModalClose }
        ]}
      >
        <p>Modal content</p>
      </Modal>
    </div>
  );
}

export default App;

