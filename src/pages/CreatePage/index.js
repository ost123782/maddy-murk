import React, { useState } from "react"
import axios from "axios"
import useInput from "../../hooks/HookInput"
import './styles.scss'

const CreatePage = () => {

    const [images, setImages] = useState([])
    const label = useInput('')
    const article = useInput('')

    const submitHandler = async (e, labelVal, articleVal, images) => {
        e.preventDefault()
        const dataImg = new FormData()
        let imageName = []

        images.forEach(img => {
            dataImg.append('files', img.file)
        })

        await axios.post('http://localhost:5000/posts/images', dataImg, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(data => {imageName = data.data; console.log(imageName);})

        const dataArt = {label: labelVal, article: articleVal, imagesNames: imageName}

        axios.post('http://localhost:5000/posts/createpage', dataArt)
    }

    const InputHandler = (e) => {
        const files = Array.from(e.target.files)



        files.forEach(file => {
            if(!file.type.match('image')){
                return
            }


            const reader = new FileReader()

            reader.onload = e => {
                return setImages(images => [...images, {baseImg: e.target.result, file: file, favourite: false}])
                
            }
    
            reader.readAsDataURL(file)
        })

    }

    const delImg = i => {
        setImages([
            ...images.slice(0, i),
            ...images.slice(i + 1, images.length)
        ])
    }

    const favImg = i => {
        const newImages = [...images]
        newImages.forEach(img => {
            img.favourite = false
        })
        newImages[i].favourite = true
        setImages(newImages)
    }


    return (
        <>
            <h1>Создать публикацию</h1>
            <div className="form-create">
                <form onSubmit={(e) => {submitHandler(e, label.value, article.value, images)}}>
                    <div className="form-create__form">
                        <div className="form-create__form-images">
                            {images.length > 0 ? images.map((img, i) => {
                                return  <div key={i} className={`form-create__form-images__item ${img.favourite ? 'favourite' : ''}`}>
                                            <img alt="test" width={'200px'} height={'200px'} src={img.baseImg} />
                                            <p onClick={() => {favImg(i)}}>Make logo</p> <p onClick={() => delImg(i)}>Delete</p>
                                        </div>
                            }) : null}
                        </div>
                        <label>Изображение</label>
                        <label className="input-label"><input multiple={true} accept={'image/*'} onInput={(e) => {InputHandler(e)}} type="file"/>Open</label>
                        <label>Название статьи</label>
                        <input value={label.value} onChange={label.onChange} placeholder='ведите сюда статью'/>
                        <label>Текст статьи</label>
                        <textarea className="text-inp" value={article.value} onChange={article.onChange} cols="30" rows="10"></textarea>
                        <button type="submit">Создать статью</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreatePage