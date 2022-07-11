import { SET_LOG } from "./actionCreator"

const isLoggedUsr = () => {
    return function (dispatch) {
        const isLogUsr = localStorage.getItem('ISLOGGED')
        if (isLogUsr) {
            dispatch({type: SET_LOG, payload: JSON.parse(isLogUsr)})
        } else {
            dispatch({type: SET_LOG, payload: isLogUsr})
        }
    }
}

export default isLoggedUsr