import React, { useState, useEffect } from 'react';

// Componente funcional (debe de ir en otro archivo)
function Pokemon({ avatar, name }) {
    return (
        <figure>
            <img src={avatar} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    );
}

export default function AjaxHooks() {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        const getPokemons = async (url) => {
            let res = await fetch(url);
            let json = await res.json();

            let fetchedPokemons = [];

            for (const el of json.results) {
                let resEach = await fetch(el.url);
                let jsonEach = await resEach.json();
                let pokemon = {
                    id: jsonEach.id,
                    name: jsonEach.name,
                    avatar: jsonEach.sprites.front_default,
                };
                fetchedPokemons.push(pokemon);
            }

            setPokemons(fetchedPokemons);
        };

        getPokemons("https://pokeapi.co/api/v2/pokemon/");
    }, []);

    return (
        <>
            <h2>Peticiones Asíncronas y En Hooks</h2>
            {pokemons.length === 0 ? (
                <h3>Cargando...</h3>
            ) : (
                pokemons.map((el) => (
                    <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
                ))
            )}
            {/* El key es IMPORTANTISIMO, lo utiliza react para identificar c/u de sus */}
        </>
    );
}
