import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

export const ActiveWindow = ({ name }) => {
  const [show, setShow] = useState(true);
    
  if (show) {
    return (
      <Alert variant="secondary" className="m-2" onClose={(
        () => setShow(false))} dismissible>
          <p>{name}</p>
      </Alert>
    );
  }
}