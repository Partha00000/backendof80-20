import React, { useState } from 'react';
import AddComponentForm from '../AddComponentForm/AddComponentForm';
import CurrentWebsite from '../CurrentWebsite/CurrentWebsite';

const AddWebsite = () => {
  const[openAddWebsite, setOpenAddWebsite] = useState(false);
  const[showCurrentWebsite, setShowCurrentWebsite] = useState(false);

  const handleAddWebsite = () =>{
    if(openAddWebsite)
    setOpenAddWebsite(false);
    else{
    setOpenAddWebsite(true);
    setShowCurrentWebsite(false);
  }
  }

  const handleShowCurrentWebsite = () =>{
    if(showCurrentWebsite)
    setShowCurrentWebsite(false);
    else{
    setShowCurrentWebsite(true);
    setOpenAddWebsite(false);
  }
  }
    return (
      <div>
        <div className="mt-28 flex justify-center items-center">
        <button onClick={handleAddWebsite} className="bg-blue-500 text-white font-bold py-2 px-4 mr-4 rounded">
          Add Website
        </button>
        <button onClick={handleShowCurrentWebsite} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Show Current Websites
        </button>
        </div>
        {
          openAddWebsite && (
            <div className='mt-5 '>
              <AddComponentForm></AddComponentForm>
              </div>
          )
        }{
          // add current website
          showCurrentWebsite && (
            <div className='mt-16'>
              <CurrentWebsite></CurrentWebsite>
            </div>
          )
        }
      </div>
    );
};

export default AddWebsite;