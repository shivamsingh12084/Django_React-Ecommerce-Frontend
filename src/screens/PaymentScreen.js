import React, {useState} from 'react'

import { Form, Row, Col, Button } from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CheckoutSteps from '../components/CheckoutSteps';
import FormContainer from '../components/FormContainer';
import { savePaymentMethod } from '../actions/cartActions';




function PaymentScreen() {
  const cart  = useSelector(state => state.cart)
  const {shippingAddress} = cart 

  const dispatch = useDispatch()
  const navigate  = useNavigate()

  const [paymentMethod, setPaymentMethod] = useState('Paypal')

  if(!shippingAddress.address) {
    navigate('/shipping')
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    navigate('/placeorder')
  }


  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>
          <Col>
            <Form.Check
              type='radio'
              label='PayPal'
              id='paypal'
              name='paypalMethod'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              
            </Form.Check>
          </Col>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}


export default PaymentScreen
