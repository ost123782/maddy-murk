import axios from "axios";
import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import './style.scss'

const PostPage = () => {
    const id = useParams()
    const [article, setArticle] = useState()



    useEffect(()  => {
        axios.post('http://localhost:5000/get/getarticle', id)
        .then((res) => {setArticle(res.data.article)})

    }, [])


    return (
        
        <main>
            <h1>{article?.title}</h1>
            <p>{article?.text}</p>
            {article?.images.map((image, id) => {
                return image ? <img key={image} alt={id} width={'200px'} height={'200px'}  src={`http://localhost:5000/uploads/${image}`}/> : null
            })}
        </main>
        
        
    )
}

export default PostPage