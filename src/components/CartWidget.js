import React, { Component } from "react"
import { Link } from 'react-router-dom'


const CartWidget = () => {

    return (
        <div>
            <Link to='/'>
                <img src='./carrito.png' width='70' className="d-flex p-3" />
            </Link>
        </div>
    )
}

export default CartWidget
