import React, {useState, useEffect} from 'react'

import { Row, Col } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import Product from '../components/Product'
import products from '../products'
import Loader from '../components/Loader'
import Message from '../components/Message'
import ProductCarousel from '../components/ProductCarousel'

import { listproducts } from '../actions/productActions'

function HomeScreen() {

  const dispatch = useDispatch()

  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");  

  console.log(keyword)
  const productList = useSelector(state => state.productList)
  const {loading, products, error} = productList
   
  useEffect(() => {
      dispatch(listproducts(keyword))
  }, [dispatch, keyword])


  return (
    <div>
      {!keyword && <ProductCarousel />}
      <h1>Latest Products</h1>
      {
        loading ? < Loader />
          : error ? <Message variant='danger'>{error}</Message>
            : 
      
      <Row>
          {products.map(product => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product}/>
              </Col>
          ))}
      </Row>
      }
    </div>
  )
}

export default HomeScreen
