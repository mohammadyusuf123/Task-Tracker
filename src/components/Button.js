import React from 'react';

const Button = ({text,color,onClick}) => {
    return (
      
            <button onClick={onClick} className='btn' style={{backgroundColor:color}}>{text}</button>
       
    );
};

export default Button;