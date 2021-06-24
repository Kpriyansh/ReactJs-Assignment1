import React from 'react';

const Person=(props)=>{
    return(
        <div>
            <h3>{props.ke}</h3>
            <div style={{display:'flex',justifyContent:"center"}}>
            <p>{props.name},{props.age}</p>
            <button onClick={props.click}>Delete</button>
            </div>
        </div>
    );
}
export default Person;