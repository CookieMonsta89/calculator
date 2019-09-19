import { UPDATE_DISPLAY } from '../actions/index';
import { buttons } from '../../store/data/buttonObject';

const initialState = {
    display:'', 
    buttons: buttons,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_DISPLAY:
            return { ...state, display: action.payload }
        default:
            return state;
    }
}

export default rootReducer;