import React, { useState, useEffect } from 'react';
import useFetchAnidados from './useFetchAnidados';

const SelectList = (title, url, handleChange) => {
    // Variables
    let id = `select-${title}`;
    let label = title.charAt(0).toUpperCase() + title.slice(1);
    const {data, error, loading} = useFetchAnidados(url);

    // Imprimir variables
    console.log(data, error, loading);

    // Comprobaciones
    // Si no hay datos, retorna un nulo
    //if (!data) return null;
    
    
    return (
        <>
            <label htmlFor={id}>{label}</label>
            {loading && <Loader/>}
            <select name={id} id={id}>
                <option value="">Elige un ${title}</option>
            </select>
        </>
    );
}

export default SelectList;