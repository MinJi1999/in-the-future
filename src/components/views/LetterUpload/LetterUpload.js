import React, {useState} from 'react'
import Dropzone from 'react-dropzone'
import axios from 'axios';
import './letterUpload.css';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';

function LetterUpload(props) {
    const [Images, setImages] = useState([])
    const [loading, setLoading] = React.useState(true)

    const dropHandler = (files) => {
        let formData = new FormData();
        formData.append('upload_preset', 'future')
        formData.append('file', files[0])
        axios
            .post(
                'https://api.cloudinary.com/v1_1/inthefuture/image/upload',
                formData
            )
            .then(response => {
                setLoading(false);
                setImages(response.data.secure_url)
            })
            .catch(err => alert(err, '파일을 저장하는데 실패했습니다.'))
        }
    const deleteHandler = (image) => {
        const currentIndex = Images.indexOf(image);
        let newImages = [...Images]
        newImages.splice(currentIndex, 1)
        setImages(newImages)
        setLoading(true);
    }

    return (
        <section className='letter-upload'>
            <div className="left-side-text" onClick={() => props.history.push('/')}>
                첫 페이지로
            </div>
            <div className="line-animation">
                    <span></span>
                    <span> </span>
                    <span> </span>
                    <span></span>
            </div>
            <div className='upload-container'>
                <Dropzone onDrop={dropHandler}>
                    {
                        ({getRootProps, getInputProps}) => (
                            <div>
                                <div className='pic-uploader'
                                    {...getRootProps()}>
                                    <input {...getInputProps()}/>
                                    <div className='uploader-text'>
                                        이곳을 클릭하여<br />편지를 추가하세요.<br/>여러 장도 업로드 가능합니다.
                                    </div>
                                </div>
                                <div style={{
                                        position:'relative',
                                        top:'28px',
                                        left:'5px',
                                        width:'374px',
                                        height:'1.8px',
                                        backgroundColor:'rgb(110, 100, 92, 0.3)'
                                }}></div>
                                <div className="uploader-sentence">
                                    - 편지는 최대 4장까지 추가가 가능합니다.<br/>
                                    - 글씨가 잘 보이도록 찍어주세요.<br/>
                                    - 편지 상단에 회원가입 때에 적었던 성함을 적어주세요.<br/>
                                    - 손글씨로 적어내신다면 알아볼 수 있게 적어주세요.<br/>
                                    - 정성을 다해 편지를 옮겨 담을게요.<br/>
                                </div>
                            </div>
                        )
                    }
                </Dropzone>
                {
                    loading
                        ? <>
                            <div className='loading-box'>
                                <h2 className='loading-text'>
                                    . . .
                                </h2>
                            </div>
                            <div className="secret-box">
                                두 장 이상 쓰고 싶을 때,<br/> 왼쪽 박스를 클릭해 계속 업로드 해주세요!
                                <div className="magic-text">여기<br/>보세요!</div>
                            </div>
                        </>
                        : <div> 
                            <div
                                onClick={deleteHandler}
                                style={{
                                    display: 'flex',
                                    justifyContent:'center',
                                    alignItems: 'center',
                                    width: '350px',
                                    height: 'auto',
                                    marginLeft: '70px'
                                }}>
                                    <img
                                        style={{
                                            minWidth: '350px',
                                            width: '300px',
                                            height: 'auto',
                                            cursor: 'pointer'
                                        }}
                                        src={Images}
                                        alt='upload'/>
                                <span className="upload-text">
                                    이미지 클릭 시 이미지가 삭제됩니다
                                </span>
                                </div>
                                </div>
                }
                <div className="line-animation2">
                    <span></span>
                    <span> </span>
                    <span> </span>
                    <span></span>
                </div>
            </div>
            <div className="right-side-text" onClick={() => props.history.push('/product/letterpaper')}>
                편지 꾸미기
            </div>
        </section>
    )
}

export default LetterUpload;
