import React from 'react'
import { useState } from 'react'

import { Button, Form } from 'react-bootstrap'
import { useNavigate, useSearchParams} from 'react-router-dom'


function SearchBox() {
    const [keyword, setKeyword] = useState("")

    const navigate = useNavigate()
    const searchParams = useSearchParams()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            navigate(`/?keyword=${keyword}&page=1`)
        }else{
            navigate(searchParams)
        }
    } 

  return (
    <Form onSubmit={submitHandler} className="d-flex">
            <Form.Control
                type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                className='mr-sm-2 ml-sm-5 me-2'
            ></Form.Control>

            <Button
                type='submit'
                variant='outline-success'
                className='p-2'
            >
                Submit
            </Button>
        </Form>
  )
}

export default SearchBox
