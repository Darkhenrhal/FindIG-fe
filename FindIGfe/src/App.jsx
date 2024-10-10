// import React, { useState } from 'react';

// function App() {
//   const [searchNames, setSearchNames] = useState('');
//   const [results, setResults] = useState([]);

//   const handleSearch = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/search', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ searchNames: searchNames.split('\n').map(name => name.trim()).filter(name => name) }), // Split and clean names
//       });
      
//       const data = await response.json();
      
//       setResults(data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Social Media Data Collector</h1>
      
//       <textarea
//         placeholder="Enter Instagram account names (one per line)"
//         value={searchNames}
//         onChange={(e) => setSearchNames(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>

//       {results.length > 0 && (
//         <div>
//           <h2>Instagram Profiles</h2>
//           {results.map((result, index) => (
//             <div key={index}>
//               {/* <p>
//                 {result.name} - <a href={result.instagramLink} >{result.followers}</a> - <a href={result.instagramLink} target="_blank" rel="noopener noreferrer">{result.instagramLink}</a>
//               </p> */}
//               <table>
//                 <tr>
//                   <td> {result.name} </td>
//                   <td>  <a href={result.instagramLink} >{result.followers}</a></td>
//                   <td><a href={result.instagramLink} target="_blank" rel="noopener noreferrer">{result.instagramLink}</a></td>
//                 </tr>
//               </table>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import Navbar from './components/navbar/navbar';
import Page from './components/Page';

function App() {
  return (
    <div className="max-w-[1920px] mx-auto">
      <div className='bg-black text-gray-100 text-[15px]'>
        <Navbar/>
      </div>
      <div>
        <Page/>
      </div>
    </div>
  );
}

export default App;

