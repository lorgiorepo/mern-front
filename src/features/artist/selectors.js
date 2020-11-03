import {useSelector} from 'react-redux';

/**
 * Custom React Hook to get random.org API response from state.
 * @see https://reactjs.org/docs/hooks-custom.html
 */
const useArtistsAPI = () => useSelector(state => state.artistsData);

export default useArtistsAPI;
