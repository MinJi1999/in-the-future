import React, {useState} from 'react'
import apiClient from "../../apiClient";
import { Form, Input } from 'antd';
import FileUpload from '../../utils/FileUpload';
import Axios from 'axios';
const { TextArea } = Input;


function UploadProductPage(props) {
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [Price, setPrice] = useState(0);
    const [Images, setImages] = useState([]);

    const titleChangeHandler = (e) => {
        const currentValue = e.target.value;
        setTitle(currentValue);
    }

    const descriptionChangeHandler = (e) => {
        const currentValue = e.target.value;
        setDescription(currentValue);
    }

    const priceChangeHandler = (e) => {
        const currentValue = e.target.value;
        setPrice(currentValue);
    }


    const updateImages = (newImages) => {
        setImages(newImages)
    }

console.log(props.user)
    const submitHandler = (e) => {
        e.preventDefault();
        if(!Title || !Description || !Price || !Images.length === 0){
            return alert('모든 값을 넣어주세요!');
        }

        const body = {
            writer: props.user.userData._id,
            title: Title,
            description: Description,
            price: Price,
            images: Images,
        }

        apiClient.post('/api/product', body)
        .then(res => {
            if(res.data.success) {
                alert('상품 업로드에 성공했습니다!');
                props.history.push('/');
            }else {
                alert('상품 업로드에 실패했습니다.');
            }
        })
    }


    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2>편지 종이 업로드</h2>
            </div>

            <Form onSubmit = {submitHandler}>
                {/* {dropZone} */}    

                <FileUpload refreshFunction={updateImages}/>            

                <br />
                <br />
                <label>이름</label>
                <Input onChange={titleChangeHandler} value={Title}/>
                <br />
                <br />
                <label>설명</label>
                <TextArea onChange={descriptionChangeHandler} value={Description}/>
                <br />
                <br />
                <label>가격($)</label>
                <Input type="number" onChange={priceChangeHandler} value={Price}/>
                <br />
                <br />
                <button type="submit">
                    확인
                </button>
            </Form>
            
        </div>
    ) 
}

export default UploadProductPage
