import { createContext, useEffect, useState } from 'react';

export const WatchlistContext = createContext();

export default function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useState([]);

  // Load watchlist from localStorage on mount
  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    setWatchlist(storedWatchlist);
  }, []);

  // Save watchlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  // Add item to watchlist
  const addToWatchlist = (media) => {
    setWatchlist((prevList) => [...prevList, media]);
  };

  // Remove item from watchlist
  const removeFromWatchlist = (id) => {
    setWatchlist((prevList) => prevList.filter((item) => item.id !== id));
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
}
