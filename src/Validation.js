import React from 'react';
const Validation=(props)=>{
    return(
        <div>
      {
        props.length>=5?
        <h3>Text long enough</h3>      
        :
        <h3>Text too short (minimum length must be of 5)</h3>      
       }
     </div>
      
    )
    
}
export default Validation;