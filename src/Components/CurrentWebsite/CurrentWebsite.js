import React, { useEffect, useState } from 'react';

function Card({ websiteName, onDelete }) {


  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);



  const handleDelete = () => {
    setIsConfirmationModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setIsConfirmationModalOpen(false);
    onDelete();
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h2 className="text-2xl font-medium mb-4">{websiteName}</h2>
      <div className="flex justify-end">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-md px-4 py-2 mr-2">Update</button>
        <button className="bg-red-500 hover:bg-red-600 text-white font-medium rounded-md px-4 py-2" onClick={handleDelete}>Delete</button>
      </div>
      {isConfirmationModalOpen && <ConfirmationModal onClose={() => setIsConfirmationModalOpen(false)} onDelete={handleConfirmDelete} />}
    </div>
  );
}

function ConfirmationModal({ onClose, onDelete }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white rounded-md p-4">
        <p className="text-lg mb-4">Are you sure you want to delete this card?</p>
        <div className="flex justify-end">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium rounded-md px-4 py-2 mr-2" onClick={onClose}>No</button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-medium rounded-md px-4 py-2" onClick={onDelete}>Yes</button>
        </div>
      </div>
    </div>
  );
}

export default function CurrentWebsite() {

  const [websites , setWebsites] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:8383/addWebsite',{
      method:'GET',
      mode:'cors',
      headers:{
        'Content-type':'application/json'
      }
    })
      .then(response => response.json())
      .then(json => setWebsites(json));
  }, []);
  const handleDelete = () => {
    // handle delete logic here
  };

  return (
    <div className="max-w-md mx-auto">
      {
        websites.map(website => <Card websiteName={website.name} onDelete={handleDelete} />)
      }

    </div>
  );
}
