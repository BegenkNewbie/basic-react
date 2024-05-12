import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
    const { id } = useParams()
    const [ dataDetail, setDataDetail ] = useState({})

    console.log(id)

    useEffect(() => {
        axios
        .get(`https://dummyjson.com/products/${id}`)
        .then(({data}) => {
            setDataDetail(data);
        })
        .catch((err) => {
            setDataDetail({})
        })
      }, []);
    
      console.log(dataDetail)

  return (
    <div>
        detail product
    </div>
  )
}

export default ProductDetail
