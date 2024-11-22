import React, { useState } from "react"

const Contador = () => {
    
    const [contador, setContador] = useState(0);

    return <div>
        <p>valor actual del contador: {contador}</p>
        <button onClick={ () => {setContador( contador - 1 )}}>
            Disminuir
        </button>
        <button onClick={ () => {setContador( 0 )}}>
            restablecer
        </button>
        <button onClick={() => { setContador( contador + 1 ) }}>
            aumentar
        </button>
    </div>
}

export default Contador;