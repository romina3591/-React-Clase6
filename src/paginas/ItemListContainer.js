import React from 'react'




const ItemListContainer = (greeting) => {
    console.log(greeting)
    const title = greeting.id
    const option = greeting.option

    return (
            <div className='black'>
                <div>{title}</div>
                <div>{option}</div>
            </div>
           



    )
}

export default ItemListContainer