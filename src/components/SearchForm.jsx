import { useState } from 'react';
import { SearchFormPropTypes } from './propTypesConfig';

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar GIFs..."
        className="border rounded-lg px-4 py-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Buscar
      </button>
    </form>
  );
};

SearchForm.propTypes = SearchFormPropTypes;

export default SearchForm;
