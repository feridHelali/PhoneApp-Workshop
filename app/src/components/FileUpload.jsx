import React  from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useAlert } from './Alert/AlertContext'
import { AlertActions } from './Alert/alert.actions'


function FileUpload({ id }) {
    const [preview, setPreview] = useState("")
    const [file, setFile] = useState({})
    const [readyToUpload, setReadyToUpload] = useState(false)
    
    // eslint-disable-next-line no-unused-vars
    const [ _ , dispatch] = useAlert()


    const handleChange = (e) => {

        setPreview(URL.createObjectURL(e.target.files[0]))
        setFile(e.target.files[0])
        setReadyToUpload(true)
    }

    const handleUpload = (id) => {
        const formData = new FormData();
        formData.append("photo", file);

        const config = {
            url: `http://localhost:3010/product/upload/${id}`,
            method: 'PUT',
            headers: { "Content-Type": "multipart/form-data" },
            data: formData
        }

        axios(config).then(data => {
            dispatch(AlertActions.showSuccessAlert('Photo Uploaded Successfully'))
            setReadyToUpload(false)
        }).catch(error => {
            dispatch(AlertActions.showErrorAlert(`Error :${error.message}`))
        })
    }

    return (

        <form className='form-group' onSubmit={(e) => {
            e.preventDefault()
            handleUpload(id)
        }
        }>
            <label className='form-control' variant="info">Upload new Photo
                <input className='form-control'
                    accept="image/*"
                    type="file"
                    onChange={(e) => handleChange(e)} />
            </label>
            {readyToUpload ? <img src={preview} alt="previewer"/> : (<></>)}
            <input type='submit' variant="primary" disabled={!readyToUpload} value="Upload" />
        </form>


    )
}

export default FileUpload