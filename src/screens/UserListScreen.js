import React, {useState, useEffect} from 'react'

import { Link, redirect, useNavigate, useSearchParams } from 'react-router-dom'
import { Table, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import LinkContainer from 'react-router-bootstrap/LinkContainer'

import Loader from '../components/Loader'
import Message from '../components/Message'

import { listUsers } from '../actions/userActions'


function UserListScreen() {

    const dispatch = useDispatch()

    const userList = useSelector(state => state.userList)

    const { loading, error, users } = userList

    useEffect(() => {
        dispatch(listUsers)
    },[dispatch])

  return (
    <div>
      <h1>Users</h1>
    </div>
  )
}

export default UserListScreen
