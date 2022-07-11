import axios from "axios"
import { GET_ARTICLES } from "../../store/actions/actionCreator"


export const getArticles = () => {
    return async function(dispatch) {
        try {
            const response = await axios.get('http://localhost:5000/get/getarticles')
            console.log(response.data.articles)
            dispatch({type: GET_ARTICLES, payload: response.data.articles})
        } catch (err) {
            console.log(err);
        }
    }


}