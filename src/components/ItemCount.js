import React, {useState} from 'react';

function ItemCount() {
  const fecha = Date.now();
  let [state, setState] = useState({ click: 0, fechaRes: fecha });

  const handleClick = () => {
    setState({ click: ++state.click });
  };
  return (
    <div>
       <h1>Clicks {state.click}</h1>
      <h2>Cantidad de productos {state.fechaRes}</h2>
      <button onClick={handleClick}>¡Contá!{state.click}</button>
    </div>
  )
}

export default ItemCount