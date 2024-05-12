import React from 'react'
import { Layout, Menu} from 'antd';
import { useNavigate } from 'react-router-dom'
const { Header } = Layout

function Navbar() {

  const navigate = useNavigate()  
  return (
      <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['Home']}>
            <Menu.Item key={"Home"} onClick={() => {
                navigate("/")
            }}>Home</Menu.Item>
            <Menu.Item key={"Product"} onClick={() => {
                navigate("/product")
            }}>Product</Menu.Item>
        </Menu>
    </Header>
  )
}

export default Navbar
