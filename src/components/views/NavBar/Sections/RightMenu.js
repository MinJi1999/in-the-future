/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Icon, Badge } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import {Breadcrumb} from "antd";
import apiClient from "../../../apiClient";
import {ShoppingCartOutlined} from "@ant-design/icons";

function RightMenu(props) {
  const user = useSelector(state => state.user)
  const logoutHandler = () => {
    apiClient.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <div style={{position:"fixed", zIndex: 5,display:"flex",justifyContent:"flex-end",width: '100%',fontFamily: "'Lora', serif",padding: "15px 30px 0px 0px"}}>
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
      <div style={{position:"fixed",zIndex: 5,width:"100%",display:"flex",justifyContent:"flex-end",fontFamily: "'Lora', serif",padding: "15px 30px 0px 0px"}}>
          <Badge count={user.userData && user.userData.cart.length} style={{ marginRight: 17, backgroundColor:"#fffdef", color:"#514739", fontWeight:"bolder"}}>
            <a href="/user/cart" className="head-example" style={{ marginRight: 20, color: '#667777'}}>
              <ShoppingCartOutlined style={{ fontSize: 30, marginRight: 5, color:"rgb(124, 119, 119)"}}/>
            </a>
          </Badge>
        <Breadcrumb>
          <Breadcrumb.Item key="logout">
            <a onClick={logoutHandler} style={{color: "rgb(124, 119, 119)",
            fontFamily: "'Lora', serif",fontSize:"20px",marginRight:"10px"}}>Logout</a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    )
  }
}

export default withRouter(RightMenu);

