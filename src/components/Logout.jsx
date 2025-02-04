import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../actions/actions'



const Logout = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userLogout = () => {
    //dispatch our action to signout
    dispatch(logout(()=>{
      navigate('/login')
    }))
  }

  return (
    <div>
       <button
        type="submit"
        className="font-mono py-3 mt-4 btn btn-lg btn-danger btn-block"
        onClick={userLogout}
        >
        Logout
      </button>
    </div>
  )
}

export default Logout;