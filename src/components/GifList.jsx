import { GifListPropTypes } from "./propTypesConfig";

const GifList = ({ gifs }) => {
  if (gifs.length === 0) {
    return <p className="text-gray-500 mt-6 text-center">No hay resultados para mostrar.</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
      {gifs.map((gif) => (
        <div key={gif.id} className="overflow-hidden rounded-lg shadow">
          <img src={gif.images.fixed_height.url} alt={gif.title} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
};

GifList.propTypes = GifListPropTypes;

export default GifList;
