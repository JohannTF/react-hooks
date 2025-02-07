import { useFetch } from './useFetch';

// Los archivos Hooks personalizados deben conmenzar con la palabra 'use'
export default function HooksPersonalizados(params) {
    // Creación de la url
    let url = "https://pokeapi.co/api/v2/pokemon/";
    // Destructuración de lo retornado por useFetch
    let {data, isPending, error} = useFetch(url);
    return (
        <>
            <h2>Hooks Personalizados</h2>
            <h3>{JSON.stringify(isPending)}</h3>
            <h3>
                <mark>{JSON.stringify(error)}</mark>
            </h3>
            <h3>
                <pre style={{whiteSpace:"pre-wrap"}}>
                    <code>{JSON.stringify(data)}</code>
                </pre>
            </h3>
        </>
    )
}