import { useEffect, useState } from "react"

const Home = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5', {mode: "cors"})
        .then((response) => {
            if (response.status >= 400) {
                throw new Error("server error");
              }
              return response.json();
            })
        .then((response) => setProducts(response.json))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, []);

    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p>Loading...</p>;


    return(
        <div id="content">
            <h1>Home Page</h1>
        </div>
    )
}

export default Home