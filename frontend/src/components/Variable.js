// import React, { useEffect, useState } from 'react';
import DropdownButton from './DropdownButton';
// import Parameters from './Parameters';

const Variable = ({ distribution, id, onSetDistribution, onDelete }) => {

    return (
        <div className="variable">
            <button type='button' className='deleteVariableButton' onClick={() => onDelete(id)}>X</button>
            <span className='dropdownLabelContainer'>
                <DropdownButton onSetDistribution={onSetDistribution} distribution={distribution} id={id}/>
                <p className='dropdownLabel'>distribution</p>
            </span>
            {/* <Parameters/> */}
            {/* <p>The is a {distribution} distribution</p> */}
        </div>
    );
  };
  
  export default Variable;