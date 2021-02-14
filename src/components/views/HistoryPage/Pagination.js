import React from 'react';
import { Pagination } from 'antd';

function Paginationn({totalData, perPage, paginate}) {
    return (
        <div style={{
            width:"100%",
            display:"flex",
            justifyContent:"center",
            marginTop: "-110px"
        }}>
            <Pagination 
                onChange={(num) => {paginate(num)}} 
                defaultCurrent={1} total={totalData} 
                showSizeChanger={false}/>
        </div>
    )
}

export default Paginationn
