import React, { useState, useEffect } from 'react';

function Reloj(props) {
    return <h3>{props.tiempo}</h3>
}

export default function RelojHooks() {
    // Estados
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false)

    // Monitorear visible
    useEffect(()=>{
        let temporizador;
        if(visible){
            temporizador = setInterval(() => {
                setHora(new Date().toLocaleTimeString())
            }, 1000);
        } else {
            clearInterval(temporizador);
        }
        return () => {
            console.log("Fase de Desmontaje");
            clearInterval(temporizador);
        };
    }, [visible]);

    return(
        <>
            <h2>Reloj con Hooks</h2>
            {visible && <Reloj tiempo={hora}/>}
            <button onClick={()=>setVisible(true)}>Iniciar</button>
            <button onClick={()=>setVisible(false)}>Detener</button>
        </>
    );
}