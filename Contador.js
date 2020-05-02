import React, { Component, useState } from 'react';

function Contador(props){
  //se usa hook por que solamente los componentes de clase utilizan state
 const [contador,setContador]= useState(0);
  return (
    <div>
      <p>Conteo {contador}</p>
      <button onClick={()=>setContador(contador+1)}>aumentar</button>
    </div>
  )
}

export default Contador;