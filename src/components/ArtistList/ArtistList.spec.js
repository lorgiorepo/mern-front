import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import promise from 'redux-promise-middleware';
import configureStore from 'redux-mock-store';
import ArtistList from './ArtistList';

describe('components > ArtistList', () => {

    const mockStore = configureStore([promise]);
    const mockAxios = new MockAdapter(axios);

    beforeEach(() => {
        mockAxios.resetHandlers();
    });

    it('renders artist list', () => {
        const store = mockStore({
            artistsData: {
                artists: []
            },
        });

        const {asFragment} = render(<ArtistList />, {
            wrapper: ({children}) => <Provider store={store}>{children}</Provider>,
        });

        expect(asFragment()).toMatchSnapshot();
    });
});