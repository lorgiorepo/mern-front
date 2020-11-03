import {FETCH_ARTISTS} from './actionTypes';
import ArtistReducer from './ArtistReducer';

describe('features > random > ArtistReducer', () => {
    it('returns initial state, if non matched action is dispatched', () => {
        const initialState = {
            artists: [],
        };
    
        const action = {
            type: 'FOO',
        };
    
        expect(ArtistReducer(initialState, action)).toBe(initialState);
    });

    it('updates state according to dispatched GET_ARTISTS', () => {
        const initialState = {
            artists: [],
        };

        const payload = [
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

        const action = {
            type: FETCH_ARTISTS,
            payload,
        };

        expect(ArtistReducer(initialState, action)).toMatchSnapshot();
    });
});