import React from 'react';
import './Managmemant.css';

import DataEntrySukka from './Managmemant/DataEntry/DataEntrySukka';
import Extras from './Managmemant/Extras/Extras';

const Managmemant = () => {

   

    return (
      <div className='managmemant-continer'>
        <div className='managmemant-data-entry-forums'>
          <DataEntrySukka />
          <Extras />
        </div>
      </div>
    );
};

export default Managmemant;