/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Badge } from 'antd';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import {Breadcrumb} from "antd";
import apiClient from "../../../apiClient";
import {ShoppingCartOutlined} from "@ant-design/icons";
import Notify from '../../../utils/notify';

function RightMenu(props) {
  const [visible, setVisible] = React.useState(false)
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    apiClient.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        setVisible(true)
        setTimeout(() => {
          props.history.push("/");
          setVisible(false)
        }, 2500)
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <div style={{position:"fixed",top: 0 ,zIndex: 5,display:"flex",justifyContent:"flex-end",width: '100%',fontFamily: "'Lora', serif",padding: "15px 30px 0px 0px"}}>
        <Breadcrumb mode={props.mode}>
          <Breadcrumb.Item key="mail">
            <a href="/login" style={{color:"rgb(156, 149, 149)",fontSize:"20px"}}>
              Signin
            </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item key="app">
            <a href="/register" style={{color: "rgb(124, 119, 119)",fontFamily: "'Lora', serif",fontSize:"20px",marginRight:"10px"}}>
              Signup
            </a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    )
  } else {
    return (
      <div style={{position:"fixed",top: 0,zIndex: 5,width:"100%",display:"flex",justifyContent:"flex-end",fontFamily: "'Lora', serif",padding: "15px 30px 0px 0px"}}>
        <div style={{display:"flex", flexDirection:"row", alignItems:"flex-start", marginRight:"20px", position:"relative"}}>
          <a href="/user/cart" className="head-example" style={{color: '#667777'}}>
            <ShoppingCartOutlined style={{ fontSize: 30, color:"rgb(124, 119, 119)", position:"relative", zIndex:"1"}}/>
          </a>
          <Badge count={user.userData && user.userData.cart.length} style={{backgroundColor:"#fffdef", color:"#514739", fontWeight:"bolder",margin: "-6px 0 0 -4px", position:"relative", zIndex:"-1"}}/>
        </div>
        <a href="/user/history" style={{color: "rgb(124, 119, 119)",
        fontFamily: "'Lora', serif",fontSize:"20px", marginRight:"20px"}}>
          history
        </a>
        <a href="/upload/product" style={{color: "rgb(124, 119, 119)",
        fontFamily: "'Lora', serif",fontSize:"20px", marginRight:"20px"}}>
          upload
        </a>
            <a onClick={logoutHandler} style={{color: "rgb(124, 119, 119)",
            fontFamily: "'Lora', serif",fontSize:"20px"}}>
              Logout
            </a>
        <Notify visible = {visible} text={'로그아웃이 완료되었습니다.'} />
      </div>
    )
  }
}

export default withRouter(RightMenu);

