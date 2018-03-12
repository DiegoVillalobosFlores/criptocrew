import {createStore, combineReducers, applyMiddleware} from 'redux'
import {loginReducer as login} from "./reducers/Login";

import thunk from 'redux-thunk'

export function createReducer(initialState, handler) {
    return function reducer(state = initialState, action) {
        if(handler.hasOwnProperty(action.type)) {
            return handler[action.type](state,action)
        }else{
            return state
        }
    }
}


export function makeStore() {
    const reducer = combineReducers({
        login
    });

    return createStore(reducer,applyMiddleware(thunk))
}