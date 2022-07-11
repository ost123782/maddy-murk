import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import PostTitle from "../../components/PostTitle"
import { getArticles } from "../../store/actions/articlesHandler"
import './styles.scss'

const Home = () => {
    const articles = useSelector(state => state.articles)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getArticles())
    }, [])
    


    return (
        <>
        <div className="titles">
            {articles.map((article, i) => {
                return (
                    <PostTitle image={article.images[article.logo]} title={article.title} id={article.id} key={i}/>
                )
            })}
        </div>
        </>
    )
}

export default Home