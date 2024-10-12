import React, { useState } from 'react';

function Web() {
  const [searchNames, setSearchNames] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:5000/searchw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          searchNames: searchNames.split('\n').map(name => name.trim()).filter(name => name),
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to fetch data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App container mx-auto p-4 text-black5 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-black5">
        Website Data Collector
      </h1>

      <div className="mb-6">
        <textarea
          className="w-full p-3 text-black5 bg-black1 border border-black4 rounded-md focus:outline-none focus:ring-2 focus:ring-black5 resize-none h-40"
          placeholder="Enter Website names (one per line)"
          value={searchNames}
          onChange={(e) => setSearchNames(e.target.value)}
        />
      </div>

      <div className="text-center">
        <button
          onClick={handleSearch}
          className="px-6 py-2 bg-black1 text-white rounded-md font-medium hover:bg-black4 hover:text-black1 transition-all"
          disabled={loading} // Disable the button while loading
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {error && (
        <div className="mt-4 text-red-500 text-center">
          {error}
        </div>
      )}

      {results.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-black5 text-center">
            Website Links
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-lg bg-black2 text-white">
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Visit Link</th>
                  <th className="py-3 px-4">Website Link</th>
                </tr>
              </thead>
              <tbody className='bg-white'>
                {results.map((result, index) => (
                  <tr key={index} className="border-t border-black4 text-black1">
                    <td className="py-2 px-4 text-black1">{result.name}</td>
                    <td className="py-2 px-4">
                      <a
                        href={result.link}
                        className="text-black1 transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {result.link === 'N/A' ? 'N/A' : 'Visit'}
                      </a>
                    </td>
                    <td className="py-2 px-4">
                      <a
                        href={result.link}
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {result.link}
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

export default Web;
