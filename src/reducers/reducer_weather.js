import { FETCH_WEATHER } from "../actions";

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            
            //return state.concat([action.payload.data]);
            return [ action.payload.data, ...state ]; //Same thing, ES6 syntax

        default:
            return state;
    }



};