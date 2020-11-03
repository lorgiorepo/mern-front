import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import config from '../../config';
import {FETCH_ARTISTS} from './actionTypes';

const useActions = () => {
    const dispatch = useDispatch();
    const getArtists = useCallback(() => {
        dispatch({
          type: FETCH_ARTISTS,
          payload: axios.get(config.artistAPI),
        });
      }, [dispatch]);
      return {getArtists};
};

export default useActions;