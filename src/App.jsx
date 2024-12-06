import { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import GifList from './Components/GifList';
import SearchHistory from './components/SearchHistory';
import ActionButtons from './components/ActionButtons';

const App = () => {
  const [gifs, setGifs] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    setSearchHistory(savedHistory);
  }, []);

  const fetchGifs = async (query) => {
    if (!query) return;

    const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=10`;

    try {
      const response = await fetch(endpoint);
      const { data } = await response.json();
      setGifs(data);

      if (!searchHistory.includes(query)) {
        const updatedHistory = [query, ...searchHistory.slice(0, 9)];
        setSearchHistory(updatedHistory);
        localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
      }
    } catch (error) {
      console.error('Error al obtener los GIFs:', error);
    }
  };

  const clearCurrentSearch = () => setGifs([]);

  const clearAllHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
    setGifs([]);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto ">
      <h1 className="text-3xl font-bold mb-6 text-center">Buscador de GIF</h1>
      <SearchForm onSearch={fetchGifs} />
      <ActionButtons onClearCurrent={clearCurrentSearch} onClearAll={clearAllHistory} />
      <SearchHistory history={searchHistory} onHistoryClick={fetchGifs} />
      <GifList gifs={gifs} />
    </div>
  );
};

export default App;

