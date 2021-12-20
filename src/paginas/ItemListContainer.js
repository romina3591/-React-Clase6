import React from 'react'

const ItemListContainer = (greeting) => {
    console.log(greeting)
    const title= greeting.id
    const option= greeting.option

    return (
       <nav className='black'>
        <div>{title}</div>
        <div>{option}</div>

       </nav>
    )
}

export default ItemListContainer