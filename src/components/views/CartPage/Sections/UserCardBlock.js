import React from 'react'
import './UserCardBlock.css';

function UserCardBlock(props) {
    console.log(props)
    const renderCartImage = (images) => {
        if(images.length > 0){
            let image = images[0];
            return `https://to-me-in-the-future.netlify.app/${image}`;
        }
    }
    const renderItems = () => (
        props.products && props.products.map((product, index) => (
                <tr key={index}>
                    <td>
                        <img style={{ position:"relative",width: '150px', height:"100px" }} alt="product"
                        src={renderCartImage(product.images)}/>
                    </td>
                    <td style={{fontSize:"18px",color:"#75746d",fontWeight: "lighter"}}>
                        {product.quantity}EA
                    </td>
                    <td style={{fontSize:"18px",color:"#75746d",fontWeight: "lighter"}}>
                        ${product.price}
                    </td>
                    <td style={{textAlign: 'center',fontSize:"18px",color:"#75746d",fontWeight: "lighter"}}>
                        <button onClick={() => props.removeItem(product._id)}>
                            지우기
                        </button>
                    </td>
                </tr>
        ))
    )
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>상품 사진</th>
                        <th>상품 수량</th>
                        <th>상품 가격</th>
                        <th></th>
                    </tr>
                </thead>
            <tbody>
                    {renderItems()}
                </tbody>
            </table>
            
        </div>
    )
}

export default UserCardBlock
