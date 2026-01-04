'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import './style.css';

export default function Allstock({ keyword }) {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!keyword) {
      setStocks([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    // Client fetches YOUR API route — no secret exposed
    fetch(`/api?q=${encodeURIComponent(keyword)}`)
    .then(res => res.json())
    .then(data => setStocks(data.result || []))
    .catch(() => setStocks([]))
    .finally(() => setLoading(false));
  
  }, [keyword]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="loader"></div>
        <p className="text-gray-500 mt-2">Loading stocks...</p>
      </div>
    );
  }

  if (!stocks.length) {
    return <p className="text-gray-500 mt-4">No stocks found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {stocks.map(stock => (
        <Link key={stock.symbol} href={`stocks/${stock.symbol}`}>
          <div className="bg-white p-4 rounded border hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
            <p className="font-semibold text-black">{stock.description}</p>
            <p className="text-sm text-black">{stock.symbol}</p>
            <p className="text-gray-400 mt-2">{stock.type}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
