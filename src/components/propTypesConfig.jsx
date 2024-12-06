import PropTypes from 'prop-types';

export const SearchFormPropTypes = {
  onSearch: PropTypes.func.isRequired,
};

export const GifListPropTypes = {
  gifs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      images: PropTypes.shape({
        fixed_height: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export const SearchHistoryPropTypes = {
  history: PropTypes.arrayOf(PropTypes.string).isRequired,
  onHistoryClick: PropTypes.func.isRequired,
};

export const ActionButtonsPropTypes = {
  onClearCurrent: PropTypes.func.isRequired,
  onClearAll: PropTypes.func.isRequired,
};
