import React from 'react';
import './Managmemant.css';

import DataEntrySukka from './Managmemant/DataEntry/DataEntrySukka';
import Extras from './Managmemant/Extras/Extras';
import SukkotList from './Managmemant/ItemsScreen/SukkotList/SukkotList';
import ExtrasList from './Managmemant/ItemsScreen/ExtrasList/ExtrasList';

const Managmemant = () => {

   

    return (
      <div className='managmemant-continer'>
        <div className='managmemant-data-entry-forums'>
          <DataEntrySukka />
          <Extras />
        </div>
        <div className='managmemant-data-entry-forums'>
          <SukkotList />
          {/* <ExtrasList /> */}
        </div>
      </div>
    );
};

export default Managmemant;