import React, { useState } from 'react';

const useFetchAnidados = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const abortController = new AbortController();
        const signal = new abortController.signal;
        const fetchData = async () => {
            setLoading(true);
            try {
                const respuesta = await fetch(url, {signal})
                if (!respuesta.ok) {
                    const err = new Error("Error en la petición Fetch");
                    err.status = respuesta.status || "00";
                    err.statusText = respuesta.statusText || "Ocurrio un error";
                    throw err;
                }

                // Transformar la petición en formato json
                const json = await respuesta.json();
                if (!signal.aborted) { // Si todo va bien y no se aborto la señal
                    setData(json);
                    setError(null);
                }
            } catch (error) {
                if (!signal.aborted) { // Si todo va bien y no se aborto la señal
                    setData(null);
                    setError(error);
                }
            } finally {
                if (!signal.aborted) { // Si todo va bien y no se aborto la señal
                    setLoading(false);
                }
            }
        };
        fetchData()
        return () => abortController.abort();
    }, []);
    return {data, error, loading}; // Retorna un objeto con los valores de data, error y loading
}
 
export default useFetchAnidados;