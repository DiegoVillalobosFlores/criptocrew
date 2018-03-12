import {createReducer} from "../store";

import {setUser} from "../reducer-services/Login";

export const loginReducer = createReducer({
    user: {}
},{
    'SET_USER': setUser
});