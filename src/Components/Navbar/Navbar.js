import React from 'react'

import { Menu } from 'antd';
import {
  Link
} from "react-router-dom";


export default function Navbar() {
  return (
    <>
      <div className="logo">
        
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
        <Menu.Item key="home"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="about"><Link to="/about">About Us</Link></Menu.Item>
      </Menu>
      </>
  )
}
