import Variable from './Variable';

const VariableArea = ({ variables, onSetDistribution, onDelete, addVariable }) => {
    return (
        <div className='variableArea'>
            {variables.map( (v) => {
                return <Variable distribution={v.distribution} id={v.id} key={v.id} onSetDistribution={onSetDistribution} onDelete={onDelete} />
            })}
            <button type="button" className='newVariableButton' onClick={addVariable}>Add Variable</button>
        </div>
    );
  };
  
  export default VariableArea;