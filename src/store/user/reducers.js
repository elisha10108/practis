import {state as myState} from "./state";

export const reducers = (state = myState, action) => {
    state.users = action.users;
}


