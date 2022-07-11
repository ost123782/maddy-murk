import { Link } from "react-router-dom"
import React from "react"
import './styles.scss'

const PostTitle = ({image, title, id}) => {
    return (
        <div className="post-title">
            {image ? <img alt="Logo" src={`http://localhost:5000/uploads/${image}`} className="post-title__image"/> : null}
            <p className="post-title__title">{title}</p>
      
            <Link className="post-title__button" to={`/post/${id}`}><button >See more</button></Link>
        </div>
    )
}

export default PostTitle