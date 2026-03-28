import React, { useState, useEffect } from 'react';
import SelectList from './SelectList';

function SelectAnidados() {
    // Variables de Estado
    const [state, setState] = useState("");
    const [town, setTown] = useState("");
    const [suburb, setSuburb] = useState("");

    return (
        <div>
            <h2>Selects Anidados</h2>
            <h3>México</h3>
            <SelectList
                title="estados"    
                url=""
                handleChange={(e)=>{
                    setState(e.target.value);
                }}
            />
            {state && (
                <SelectList
                    title="municipios"
                    url=""
                />
            )}
        </div>
    );
}

export default SelectAnidados;