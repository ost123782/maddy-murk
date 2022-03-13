import React from "react"
import './styles.scss'

const createPage = () => {
    return (
        <>
            <h1>Создать публикацию</h1>
            <div className="form-create">
                <form>
                    <div className="form-create__form">
                        <label>Изображение</label>
                        <input type="file"/>
                        <label>Название статьи</label>
                        <input placeholder='ведите сюда статью'/>
                        <label>Текст статьи</label>
                        <textarea cols="30" rows="10"></textarea>
                    </div>
                </form>
            </div>
        </>
    )
}

export default createPage