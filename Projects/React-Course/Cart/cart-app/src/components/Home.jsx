import { useEffect, useState } from "react";
import Product from "./Product";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching products...");
    fetch('https://fakestoreapi.com/products?limit=10', { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  useEffect(() => {
    console.log("Products state updated:", products);
  }, [products]); // Log only when products state changes

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div id="content">
      <h1>Home Page</h1>
      <div className='container recipe__container'>
        {products.length > 0 ? (
          products.map(product => (
            <Product
              key={product.id}
              title={product.title} 
              price={product.price}
              image={product.image}
            />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
