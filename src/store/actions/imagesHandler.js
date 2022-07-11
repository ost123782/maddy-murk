import axios from "axios"
import { DEL_OR_FAV_IMG, SET_IMG } from "./actionCreator"

export const imagesHandler = (e, images) => {
        return function (dispatch) {
            const files = Array.from(e.target.files)


            if(files.length <= 8 && images.length + files.length <= 8) {

            
    
    
    
                files.forEach(file => {
                    if(!file.type.match('image')){
                        return
                    }
        
        
                    const reader = new FileReader()
        
                    reader.onload = e => {
                        return dispatch({type: SET_IMG, payload: {baseImg: e.target.result, file: file, favourite: false}})
                        
                    }
            
                    reader.readAsDataURL(file)
                })
            } else {
                alert('Забагато файлів!')
                return
            }
        }





    }

export const submitHandler = async (e, labelVal, articleVal, images) => {
    e.preventDefault()
    const dataImg = new FormData()
    let imageName = []
    const postCreator = JSON.parse(localStorage.getItem('ISLOGGED')).email
    let favImg = 0


    images.forEach((img, i) => {
        dataImg.append('files', img.file)
        if(img.favourite) {
            favImg = i
        }
    })



    await axios.post('http://localhost:5000/posts/images', dataImg, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then(data => {imageName = data.data})

    const dataArt = {label: labelVal, article: articleVal, imagesNames: imageName, logo: favImg, postCreator: postCreator}

    await axios.post('http://localhost:5000/posts/createpage', dataArt)

}

export const delImg = (i, images) => {
    const newImages = [...images]
    newImages.splice(i, 1)
    return {type: DEL_OR_FAV_IMG, payload: newImages}
}

export const favImg = (i, images) => {
    const newImages = [...images]
    newImages.forEach(img => {
        img.favourite = false
    })
    newImages[i].favourite = true
    return {type: DEL_OR_FAV_IMG, payload: newImages}
}
