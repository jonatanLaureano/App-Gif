import { ActionButtonsPropTypes } from './propTypesConfig';

const ActionButtons = ({ onClearCurrent, onClearAll }) => (
  <div className="mt-4 flex gap-4">
    <button
      onClick={onClearCurrent}
      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
    >
      Eliminar búsqueda actual
    </button>
    <button
      onClick={onClearAll}
      className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
    >
      Eliminar todas las búsquedas
    </button>
  </div>
);

ActionButtons.propTypes = ActionButtonsPropTypes;

export default ActionButtons;
