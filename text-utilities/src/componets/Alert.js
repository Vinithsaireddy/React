import React from 'react';
import PropTypes from 'prop-types';

export default function Alert({ alert }) {
  return (
    <div style={{height:'50px'}}>
      {alert && (
        <div className={`alert alert-${alert.type} d-flex align-items-center`} role="alert">
          <div>
            {alert.msg}
          </div>
        </div>
      )}
    </div>
  );
}