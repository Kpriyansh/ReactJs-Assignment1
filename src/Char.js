import React from 'react';
const Char=(props)=>{
    return(
        <div onClick={props.clicked} className="char-box" style={{display:'inline-block',padding:'16px',margin:'16px',border:'1px solid black'}}>
          <p>{props.char}</p>
        </div>
    )
}
export default Char