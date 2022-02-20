import {initialState} from "./state";


export const TriggerReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'TRIGGER_CART':
            return {
                ...state,
                isOpen: payload,
            }
        default:
            return state;
    }


}