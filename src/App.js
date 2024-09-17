import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const XDictionary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('');

  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  const handleSearch = () => {
    const foundWord = dictionary.find(item => item.word.toLowerCase() === searchTerm.toLowerCase());
    
    if (foundWord) {
      setResult(foundWord.meaning);
    } else {
      setResult('Word not found in the dictionary.');
    }
  };

  return (
    <div className="container">
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search for a word..." 
      />
      <button onClick={handleSearch}>Search</button>
      
      {result && <p>{result}</p>}
    </div>
  );
};

export default XDictionary;
