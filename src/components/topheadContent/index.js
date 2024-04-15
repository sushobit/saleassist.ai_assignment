import React from 'react';
import './index.css'; 
import tannTrimImage from './TANNTRIM.png'; 
import groupIconImage from './Group.png'

const TannTrim = () => {
  return (
    <div className='topcontainer'>
        <div className="tann-trim-container">
        <img className='tamtim' src={tannTrimImage} alt="TANN TRIM" />
        </div>
        
        <div>
        <img className='group-icon' src={groupIconImage} alt="groupicon" />
        </div>
    </div>
  );
}

export default TannTrim;
