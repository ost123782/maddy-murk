import {applyMiddleware, createStore} from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { DEL_ALL_IMGS, DEL_OR_FAV_IMG, GET_ARTICLES, SET_IMG, SET_LOG, SET_REG } from "./actions/actionCreator";
import isLoggedUsr from "./actions/isLoggedUsr";


const defaultState = {
    isLogged: {},
    register: false,
    images: [],
    articles: []
}

const reducer = (state = defaultState,  action) => {
    switch (action.type) {
        case SET_LOG: 
            return {...state, isLogged: state.isLogged = action.payload}
        case SET_REG: 
            return {...state, register: state.register = action.payload}
        case SET_IMG: 
            return {...state, images: [...state.images, action.payload]}
        case GET_ARTICLES: 
            return {...state, articles: state.articles = action.payload}
        case DEL_OR_FAV_IMG:
            return {...state, images: state.images = action.payload}
        default: 
            return state
    }
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
store.dispatch(isLoggedUsr())
export default store