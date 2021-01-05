import * as React from 'react'

function LetterDetailImg(props) {
    const [Images, setImages] = React.useState([]);
    React.useEffect(() => {
        if(props.detail.images && props.detail.images.length > 0){
            let images = [];

            props.detail.images.map((image) => {
                return images.push(`https://in-the-future.herokuapp.com/${image}`)
            })
            setImages(images);
        }
    }, [props.detail])
    

    return (
        <img src={Images} alt="detail-image" className="detail-image"/>
    )
}

export default LetterDetailImg
