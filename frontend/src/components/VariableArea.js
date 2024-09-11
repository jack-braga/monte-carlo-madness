import React, { useState } from 'react';
import Variable from './Variable';

const VariableArea = () => {
    const [variables, setVariables] = useState([]);

    const handleVariables = () => {
        const newVar = {
            distribution: "normal",
            id: variables.length,
        };
        setVariables(prevArray => [...prevArray, newVar]);
      };

    return (
        <div className='variableArea'>
            {variables.map( (v) => {
                return <Variable distribution={v.distribution} key={v.id} />
            })}
            <button type="button" onClick={handleVariables}>Add Variable</button>
        </div>
    );
  };
  
  export default VariableArea;