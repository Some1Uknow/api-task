import React, { useState, useEffect } from 'react';

function BeerCard({ beer }) {
  return (
    <div className="card overflow-hidden bg-white rounded-lg shadow-md">
      <img src={beer.image} alt={beer.name} className="w-full h-96 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{beer.name}</h2>
        <p className="text-gray-600">{beer.tagline}</p>
        <p className="text-gray-700">Price: ${beer.first_brewed}</p>
        <p className="text-gray-700">Rating: {beer.rating.average.toFixed(2)} ({beer.rating.reviews} reviews)</p>
      </div>
    </div>
  );
}

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch('https://api.sampleapis.com/beers/ale')
      .then(response => response.json())
      .then(data => setBeers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {beers.map(beer => (
            <BeerCard key={beer.id} beer={beer} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;