import React, { useRef } from 'react';

export default function Referencias(){
    let refMenu = useRef(),
        refMenuBtn = useRef();
    const handleToggleMenu = (e) => {
        /*const $menu = document.getElementById("menu");
        if(e.target.textContent === "Menu"){
            e.target.textContent = "Cerrar";
            $menu.style.display = "block";
        } else {
            e.targe.textContent = "Menu";
            $menu.style.display = "none"
        } */
        if(refMenuBtn.current.textContent === "Menu"){
            refMenuBtn.current.textContent = "Cerrar";
            refMenu.current.style.display = "block";
        } else {
            refMenuBtn.current.textContent = "Menu";
            refMenu.current.style.display = "none"
        }
    }
    return(
        <>
            <h2>Referencias</h2>
            <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>Menú</button>
            <nav id="menu" ref={refMenu} style={{display:"none"}}>
                <a href="https://google.com">Sección 1</a>
                <br/>
                <a href="https://google.com">Sección 2</a>
                <br/>
                <a href="https://google.com">Sección 3</a>
                <br/>
                <a href="https://google.com">Sección 4</a>
                <br/>
                <a href="https://google.com">Sección 5</a>
                <br/>
            </nav>
        </>
    );
}