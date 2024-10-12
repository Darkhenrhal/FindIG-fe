import React, { useState } from 'react';

function Influencer() {
  const [searchNames, setSearchNames] = useState('');
  const [resultsfb, setResultsfb] = useState([]);
  const [resultsig, setResultsig] = useState([]);
  const [resultstt, setResultstt] = useState([]);
  const [resultsyt, setResultsyt] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    
    const searchQuery = searchNames
      .split('\n')
      .map((name) => name.trim())
      .filter((name) => name);

    try {
      // Facebook
      const responsefb = await fetch('http://localhost:5000/searchfb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchNames: searchQuery }),
      });

      if (!responsefb.ok) throw new Error('Facebook API error');
      const datafb = await responsefb.json();
      setResultsfb(datafb);

      // TikTok
      const responsett = await fetch('http://localhost:5000/searchtt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchNames: searchQuery }),
      });

      if (!responsett.ok) throw new Error('TikTok API error');
      const datatt = await responsett.json();
      setResultstt(datatt);

      // YouTube
      const responseyt = await fetch('http://localhost:5000/searchyt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchNames: searchQuery }),
      });

      if (!responseyt.ok) throw new Error('YouTube API error');
      const datayt = await responseyt.json();
      setResultsyt(datayt);

      // Instagram
      const responseig = await fetch('http://localhost:5000/searchig', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchNames: searchQuery }),
      });

      if (!responseig.ok) throw new Error('Instagram API error');
      const dataig = await responseig.json();
      setResultsig(dataig);
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to fetch data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App container mx-auto p-4 text-black5 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-black5">
        Influencer Data Collector
      </h1>

      <div className="mb-6">
        <textarea
          className="w-full p-3 text-black5 bg-black1 border border-black4 rounded-md focus:outline-none focus:ring-2 focus:ring-black5 resize-none h-40"
          placeholder="Enter account names (one per line)"
          value={searchNames}
          onChange={(e) => setSearchNames(e.target.value)}
        />
      </div>

      <div className="text-center">
        <button
          onClick={handleSearch}
          className="px-6 py-2 bg-black1 text-white rounded-md font-medium hover:bg-black4 hover:text-black1 transition-all"
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {error && (
        <div className="mt-4 text-red-500 text-center">{error}</div>
      )}

      {resultsfb.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-black5 text-center">
            Influencer Profiles
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-lg bg-black2 text-white">
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Facebook</th>
                  <th className="py-3 px-4">Youtube</th>
                  <th className="py-3 px-4">Tiktok</th>
                  <th className="py-3 px-4">Instagram</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {resultsfb.map((result, index) => (
                  <tr key={index} className="border-t border-black4 text-black1">
                    <td className="py-2 px-4">{result.name}</td>
                    <td className="py-2 px-4">
                      <a
                        href={resultsfb[index]?.link || '#'}
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {resultsfb[index]?.followers || 'N/A'}
                      </a>
                    </td>
                    <td className="py-2 px-4">
                      <a
                        href={resultsyt[index]?.link || '#'}
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {resultsyt[index]?.followers || 'N/A'}
                      </a>
                    </td>
                    <td className="py-2 px-4">
                      <a
                        href={resultstt[index]?.link || '#'}
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {resultstt[index]?.followers || 'N/A'}
                      </a>
                    </td>
                    <td className="py-2 px-4">
                      <a
                        href={resultsig[index]?.link || '#'}
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {resultsig[index]?.followers || 'N/A'}
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

export default Influencer;
