import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        console.log("OBJETO CONTROLLER: ", controller);

        const getData = async (url) => {
            setIsPending(true);
            try {
                let res = await fetch(url, { signal }); // signal: signal
                if (!res.ok) { // Me dice si pudo hacer la petición a la url
                    let err = new Error('Fetch error');
                    err.status = res.status;
                    err.statusText = res.statusText || "Ocurrió un error";
                    throw err;
                }
                let data = await res.json();
                if (!signal.aborted) {
                    setIsPending(false);
                    setData(data);
                    setError(null);
                }
            } catch (err) {
                if (!signal.aborted) {
                    setIsPending(false);
                    setError(err);
                }
            }
        };
        getData(url);
        return () => controller.abort();
    }, [url]);

    return { data, isPending, error };
};
