import React, { useState } from 'react';
import Variable from './Variable';

const VariableArea = () => {
    const [variables, setVariables] = useState([]);

    const addVariable = () => {
        const newVar = {
            distribution: 'normal',
            id: Date.now() + Math.random(),
        };
        setVariables(prevArray => [...prevArray, newVar]);
    };

    const deleteVariable = (id) => {
        setVariables((prevArray) => prevArray.filter((v) => v.id !== id));
    };

    const changeVariableDistribution = (id, newDistribution) => {
        const updatedVariables = variables.map((v) => {
            return v.id === id ? { ...v, distribution: newDistribution } : v;
        });
        setVariables(updatedVariables);
    }

    return (
        <div className='variableArea'>
            {variables.map( (v) => {
                return <Variable distribution={v.distribution} id={v.id} key={v.id} onSetDistribution={changeVariableDistribution} onDelete={deleteVariable} />
            })}
            <button type="button" className='newVariableButton' onClick={addVariable}>Add Variable</button>
        </div>
    );
  };
  
  export default VariableArea;