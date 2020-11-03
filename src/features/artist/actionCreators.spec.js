import React from 'react';
import {Provider} from 'react-redux';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import promise from 'redux-promise-middleware';
import {renderHook} from '@testing-library/react-hooks';
import config from '../../config';
import {FETCH_ARTISTS} from './actionTypes';
import useActions from './actionCreators';

describe('features > artist list > useActions', () => {

    const artists = [];
    const mockStore = configureStore([promise]);
    const storeTest = mockStore({
        artistsData: {
            artists,
        },
    });
    const mockAxios = new MockAdapter(axios);

    afterEach(() => {
        mockAxios.resetHandlers();
        storeTest.clearActions();
    });

    it('returns function', () => {
        const {result} = renderHook(() => useActions(), {
            wrapper: ({children}) => <Provider store={storeTest}>{children}</Provider>,
        });

        expect(result.current.getArtists).toBeInstanceOf(Function);
    });

    xit(`it handles successful API query`, async () => {
        const {result} = renderHook(() => useActions(), {
            wrapper: ({children}) => <Provider store={storeTest}>{children}</Provider>,
        });

        const response = [
            {
                "_id": "5f9c4ea4d2a29b79b4b19e51",
                "name": "Lorgio",
                "lastname": "Trinidad",
                "nationality": "Peruvian",
                "about": "i'm dad",
                "createdAt": "2020-10-30T17:34:28.655Z",
                "updatedAt": "2020-10-30T17:34:28.655Z",
                "__v": 0
            }
        ];

        mockAxios.onGet(config.artistAPI).reply(200, response);

        await result.current.getArtists();

        expect(storeTest.getActions()[0]).toEqual({
            type: FETCH_ARTISTS,
        });
        expect(storeTest.getActions()[1].payload).toEqual(response);
    });
    

    

});