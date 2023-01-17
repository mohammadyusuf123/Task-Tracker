import React from 'react';
import Button from "./Button";

const Header = ({title,onAdd,showAddTask}) => {
  
    return (
        <div className='header'>
            <h2>{title}</h2>
             <Button color={showAddTask? 'red':'green'} text={showAddTask?'Close':'Add'} onClick={onAdd} />
        </div>
    );
};

export default Header;