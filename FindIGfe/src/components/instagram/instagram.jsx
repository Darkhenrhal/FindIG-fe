import React, { useState } from 'react';

function Instagram() {
  const [searchNames, setSearchNames] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch('http://localhost:5000/searchig', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchNames: searchNames.split('\n').map(name => name.trim()).filter(name => name) }), // Split and clean names
      });
      
      const data = await response.json();
      
      setResults(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App container mx-auto p-4 text-black5 min-h-screen">
    <h1 className="text-4xl font-bold text-center mb-8 text-black5">
      Instagram Data Collector
    </h1>
  
    <div className="mb-6">
      <textarea
        className="w-full p-3 text-black5 bg-black1 border border-black4 rounded-md focus:outline-none focus:ring-2 focus:ring-black5 resize-none h-40"
        placeholder="Enter Instagram account names (one per line)"
        value={searchNames}
        onChange={(e) => setSearchNames(e.target.value)}
      />
    </div>
  
    <div className="text-center">
      <button
        onClick={handleSearch}
        className="px-6 py-2 bg-black1 text-white rounded-md font-medium hover:bg-black4 transition-all"
      >
        <p className='hover:text-black2  transition-all'>Search</p>
      </button>
    </div>
  
    {results.length > 0 && (
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-black5 text-center">
          Instagram Profiles
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-lg bg-black2 text-white">
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Followers</th>
                <th className="py-3 px-4">Profile Link</th>
              </tr>
            </thead>
            <tbody className='bg-white'>
              {results.map((result, index) => (
                <tr key={index} className="border-t border-black4 text-black1">
                  <td className="py-2 px-4 text-black1">{result.name}</td>
                  <td className="py-2 px-4">
                    <a
                      href={result.instagramLink}
                      className=" text-black1  transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {result.followers}
                    </a>
                  </td>
                  <td className="py-2 px-4">
                    <a
                      href={result.instagramLink}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {result.instagramLink}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )}
  </div>
  
  );
}

export default Instagram;

