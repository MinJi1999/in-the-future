import * as React from 'react'
import { useDispatch } from 'react-redux';
import { chooseColor } from '../../../_actions/user_actions';


function HistoryPage(props) {
    console.log(props)    
    const dispatch = useDispatch();
    const firstColorLS = localStorage.getItem("color");
    const secondColorLS = localStorage.getItem("color2");
    const thirdColorsLS = localStorage.getItem("color3");
    const fourthColorsLS = localStorage.getItem("color4");
    const colorArray = [];
    colorArray.push(firstColorLS,secondColorLS,thirdColorsLS,fourthColorsLS);

    React.useEffect(() => {
        if(colorArray){
            dispatch(chooseColor(colorArray))
        }
    }, [])

    return (
        <div style={{ width: '80%', margin: '3rem auto'}}>
        <div style={{ textAlign: 'center'}}>
            <h1>History</h1>
        </div>
        <br />

        <table>
            <thead>
                <tr>
                    <th>Payment ID</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Date Of Purchase</th>
                    <th>Colors</th>
                </tr>
            </thead>
        
        
            <tbody>
                {props.user.userData && props.user.userData.history.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.dateOfPurchase}</td>
                        <td>{props.user.colorArray}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
    )
}

export default HistoryPage;
