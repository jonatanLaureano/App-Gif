import { SearchHistoryPropTypes } from './propTypesConfig';

const SearchHistory = ({ history, onHistoryClick }) => {
  if (history.length === 0) {
    return <p className="text-gray-500 mt-4">No hay historial de búsquedas.</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Historial de Búsquedas:</h2>
      <div className="flex flex-wrap gap-2">
        {history.map((query, index) => (
          <button
            key={index}
            onClick={() => onHistoryClick(query)}
            className="bg-gray-200 text-gray-700 px-4 py-1 rounded hover:bg-gray-300 transition"
          >
            {query}
          </button>
        ))}
      </div>
    </div>
  );
};

SearchHistory.propTypes = SearchHistoryPropTypes;

export default SearchHistory;
