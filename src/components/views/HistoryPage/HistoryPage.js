import * as React from 'react'
import Data from "./Data";
import Pagination from "./Pagination";

function HistoryPage(props) {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [userData, setUserData] = React.useState([]);
    const perPage = 10;

    React.useEffect(()=>{
        if(props.user.userData){
            const data = props.user.userData.history;
            setUserData(data)
        }
    },[props.user.userData])

    const indexOfLast = currentPage * perPage;
    const indexOfFirst = indexOfLast - perPage;

    function sliceData(data){
        let slicedData;
        slicedData = data.slice(indexOfFirst, indexOfLast);
        return slicedData;
    }

    return (
        <>
            <Data data={sliceData(userData)}/>
            <Pagination totalData={userData.length} perPage={perPage} paginate={setCurrentPage}/>
        </>
    )
}

export default HistoryPage;
