import React, {useState} from 'react'
import Dropzone from 'react-dropzone'
import {PlusOutlined} from "@ant-design/icons";
import axios from "axios";

function FileUpload(props) {
    const [Images, setImages] = useState([])
    const [loading, setLoading] = React.useState(true)

    const dropHandler = (files) => {
        let formData = new FormData();
        formData.append("upload_preset", "future")
        formData.append("file", files[0])
        axios
            .post(
                'https://api.cloudinary.com/v1_1/inthefuture/image/upload',
                formData
            )
            .then(response => {
                setLoading(false);
                setImages(response.data.secure_url)
                props.refreshFunction(response.data.secure_url)
            })
            .catch(err => alert(err, '파일을 저장하는데 실패했습니다.'))
        }
    const deleteHandler = (image) => {
        const currentIndex = Images.indexOf(image);
        let newImages = [...Images]
        newImages.splice(currentIndex, 1)
        setImages(newImages)
        setLoading(true);
        props.refreshFunction(newImages)
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
            <Dropzone onDrop={dropHandler}>
                {
                    ({getRootProps, getInputProps}) => (
                        <div
                            style={{
                                width: 300,
                                height: 240,
                                border: '1px solid lightgray',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            {...getRootProps()}>
                            <input {...getInputProps()}/>
                            <PlusOutlined
                                style={{
                                    fontSize: '3rem'
                                }}/>
                        </div>
                    )
                }
            </Dropzone>
            {
                loading
                    ? <h2
                            style={{
                                color: "rgba(83, 83, 83, 0.5)",
                                margin: "100px auto",
                                width: "150px",
                                height: "50px",
                                textAlign: "center",
                                backgroundColor: "rgb(200, 200, 200, 0.4)"
                            }}>
                            . . .
                        </h2>
                    : <div
                            onClick={deleteHandler}
                            style={{
                                display: 'flex',
                                width: '350px',
                                height: '240px',
                                overflowX: 'scroll'
                            }}>
                            <img
                                style={{
                                    minWidth: '320px',
                                    width: '320px',
                                    height: '220px'
                                }}
                                src={Images}
                                alt="upload file"/>
                        </div>
            }
        </div>
    )
}

export default FileUpload;
