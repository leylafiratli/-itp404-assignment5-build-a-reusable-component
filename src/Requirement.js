import React from 'react';
import PropTypes from 'prop-types';

function Requirement({label, required}) {
  return (
    <form>
    <label style={{display: 'inline'}}>
      {label} {required && <span style={{color: 'red'}}> *</span> }
    </label>
    </form>
  )
}
Requirement.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool
};

export default Requirement;
