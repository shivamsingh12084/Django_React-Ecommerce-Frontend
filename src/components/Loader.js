import React from 'react'

import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (
    <div>
        <Spinner animation="border" role="status" style={{height: '100px', width: '100px', margin: 'auto', display: 'block'}}>
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
  )
}

export default Loader
