import React from 'react'
import {Redirect} from 'react-router-dom';

const logout = () => {
    localStorage.clear();
    window.location.reload();
    return <Redirect to='/login'></Redirect>
}

export default logout
