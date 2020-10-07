import React from 'react';
import Alert from 'react-bootstrap/Alert';

const Alerta = ({mensaje, esError}) => {
    const notifType = esError ? "danger" : "success";

    if (mensaje === null) {
        return null;
    } else {
        return(
            <Alert variant={notifType}>{mensaje}</Alert>
        )
    }
};

export default Alerta;