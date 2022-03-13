import {applyMiddleware, createStore} from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import isLoggedUsr from "./actions/isLoggedUsr";


const defaultState = {
    isLogged: {},
    register: false
}

const reducer = (state = defaultState,  action) => {
    switch (action.type) {
        case 'SET_LOG': 
            return {...state, isLogged: state.isLogged = action.payload}
        case 'SET_REG': 
            return {...state, register: state.register = action.payload}
        default: 
            return state
    }
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
store.dispatch(isLoggedUsr())
export default store