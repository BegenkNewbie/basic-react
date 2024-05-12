import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Typography, Button, Layout } from "antd";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const { Content } = Layout


function Product() {
  const [ data, setData ] = useState([])
  const [ skip, setSkip ] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {

    axios
    .get(`https://dummyjson.com/products?limit=6&skip=${skip}`)
    .then(({data}) => {
        setData((prev) => {
            if(skip === 0) {
                return data?.products
            }
            return [...prev, ...data?.products]
        });
    })
    .catch((err) => {
        setData([])
    })
  }, [skip]);


  const handleFetchViewMore = () => {
    setSkip((prev) => prev + 6)
  }

  return (
    <Content>
        <Row gutter = {[8,8]}>
            {data?.map((item, index) => {
                return <Col span = {8} key={index}>
                            <Card onClick={() => {
                                navigate(`/product/${item.id}`)
                            }}>
                                <Typography.Text>
                                    {item?.title}
                                </Typography.Text>
                            </Card>
                        </Col>
            })}
        </Row>
        <Button onClick={() => {
            handleFetchViewMore()
        }} type='primary'>View More</Button>
    </Content>
  )
}

export default Product
