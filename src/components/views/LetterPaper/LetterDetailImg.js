import * as React from 'react'

function LetterDetailImg(props) {
    const [Images, setImages] = React.useState([]);
    const [loading, setLoading] = React.useState(true)
    React.useEffect(() => {
        if(props.detail.images && props.detail.images.length > 0){
            let images = [];
            props.detail.images.map((image) => {
                return images.push(image)
            })
            setImages(images);
            setLoading(false);
        }
    }, [props.detail])

    if(loading){
        return <h2 style={{
            color: "rgba(83, 83, 83, 0.5)",
            margin: "120px auto",
            width: "150px",
            height: "50px",
            textAlign: "center",
            backgroundColor:"rgb(200, 200, 200, 0.7)"
        }}>. . .</h2>
    }
    return (
        <img src={Images} alt="detail" className="detail-image"/>
    )
}

export default LetterDetailImg
