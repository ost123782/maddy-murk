import { imagesHandler, submitHandler, delImg, favImg } from "../../store/actions/imagesHandler"
import useInput from "../../hooks/HookInput"
import './styles.scss'
import { useDispatch, useSelector } from "react-redux"
import { DEL_OR_FAV_IMG } from "../../store/actions/actionCreator"

const CreatePage = () => {

    const images = useSelector(state => state.images)
    const dispatch = useDispatch()
    const label = useInput('')
    const article = useInput('')





    return (
        <>
            <h1>Создать публикацию</h1>
            <div className="form-create">
                <form onSubmit={(e) => {submitHandler(e, label.value, article.value, images); label.removeVal(); article.removeVal(); dispatch({type: DEL_OR_FAV_IMG, payload: []})}}>
                    <div className="form-create__form">
                        <div className="form-create__form-images">
                            {images.length > 0 ? images.map((img, i) => {
                                return  <div key={i} className={`form-create__form-images__item ${img.favourite ? 'favourite' : ''}`}>
                                            <img alt="test" width={'200px'} height={'200px'} src={img.baseImg} />
                                            <p onClick={() => {dispatch(favImg(i, images))}}>Make logo</p> <p onClick={() => dispatch(delImg(i, images))}>Delete</p>
                                        </div>
                            }) : null}
                        </div>
                        <label>Изображения {images.length}/8</label>
                        <label className="input-label"><input multiple={true} accept={'image/*'} onInput={(e) => {dispatch(imagesHandler(e, images))}} type="file"/>Open</label>
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