import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CloudUploadIcon } from '@heroicons/react/outline';

function AddComponentForm({ onSubmit }) {
  const [logo, setLogo] = useState(null);
  const [websiteName, setWebsiteName] = useState('');
  const [offer, setOffer] = useState('');
  const [affiliateLink, setAffiliateLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log(websiteName);
    formData.append('imgLink', logo);
    formData.append('website_name', websiteName);
    formData.append('offer', offer);
    formData.append('afflink', affiliateLink);

    // website_name	
    // offer	
    // imgLink 
    // afflink

    fetch('http://localhost:8383/api/posts', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };


  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex items-center space-x-4 mb-4">
        <label htmlFor="logo" className="cursor-pointer w-12 h-12 flex items-center justify-center rounded-full border border-gray-300">
          {logo ? (
            <img  src={URL.createObjectURL(logo)} alt="Logo" className="w-10 h-10 rounded-full" />
          ) : (
            <CloudUploadIcon className="w-6 h-6" />
          )}
        </label>
        <input
        // onChange={(e) => setPhoto(e.target.files[0])}
          type="file"
          id="logo"
          accept="image/*"
          onChange={(e) => setLogo(e.target.files[0])}
          className="hidden"
        />
        <input
          type="text"
          placeholder="Website Name"
          value={websiteName}
          onChange={(e) => setWebsiteName(e.target.value)}
          className="flex-1 px-4 py-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <input
        type="number"
        placeholder="Offer"
        value={offer}
        onChange={(e) => setOffer(e.target.value)}
        className="w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mb-4"
      />
      <input
        type="text"
        placeholder="Affiliate Link"
        value={affiliateLink}
        onChange={(e) => setAffiliateLink(e.target.value)}
        className="w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mb-4"
      />
      <button
        type="submit"
        className="block mx-auto px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Component
      </button>
    </form>
  );
}

export default AddComponentForm;