import React from 'react'

function Data(data) {
    const productInfo = data.data;
    return (
        <div style={{ width: '80%',height:"582px" ,margin: '7rem auto'}}>
                <div style={{ textAlign: 'center'}}>
                    <h1>History</h1>
                </div>
                <br />

                <table>
                    <thead>
                        <tr>
                            <th>index</th>
                            <th>Payment ID</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productInfo.map((product,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{product.id}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    )
}

export default Data
