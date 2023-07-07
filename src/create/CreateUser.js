import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../store/UserReducer'

const CreateUser = () => {
    useEffect(() => {
        // createUser("name1")
    }, [])
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    console.log("ss",users);

    const createUser = () => {
        dispatch(addUser({name:"name2"}))
    }
    return (
      <>
        <div>CreateUser</div>
        <button onClick={createUser}>dispatch</button>
      </>
    );
}

export default CreateUser