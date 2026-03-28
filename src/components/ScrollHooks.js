import React, { useState, useEffect } from 'react';

export default function ScrollHooks(props){
    const [scrollY, setScrollY] = useState(0);
    // Cada vez que se necesite renderizar este componente, ejecutará todo lo que se encuentre en la función useEffect
    // Por si solo, useEffect se ejecuta siempre que haya un cambio en el estado
    // En cambio, si se le pasa una dependencia, el useEffect solamente se ejecutará cuando suceda esa acción
    const detectarScroll = () => setScrollY(window.pageYOffset);
    window.addEventListener("scroll", detectarScroll) // Ejecuta la función cuando detecta un scroll

    useEffect(()=>{
        //console.log("Moviendo el Scroll");
        return ()=>{
            window.removeEventListener("scroll", detectarScroll);
            //console.log("Fase de Desmonaje de 'Moviendo el Scroll'");
        }
    }, [scrollY]); // En este caso se ejecutará el useEffect cuando detecte cambios en la variable scrollY

    /* // Si como dependencia solo se le pasa un '[]' solamente se ejecutará una vez (en su fase de montaje)
    useEffect(() => {
        console.log("Fase de Montaje")
    }, []);

    useEffect(() => {
        console.log("Fase de actualización")
    }); // Se ejecuta siempre que haya un cambio o se renderice el componente

    // Si el useEffect retorna una arrow function significa que está en la fase de desmontaje
    useEffect(()=>{
        return ()=>{
            console.log("Fase de Desmontaje");
        };
    }); */

    return(
        <>
        <h2>Hooks - useEffect y el Ciclo de Vida</h2>
        <p>Scroll Y del navegador {scrollY}px</p>
        </>
    );
}