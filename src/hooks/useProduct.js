import { useEffect, useState } from "react";

const useProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setAllProducts(data));
  }, []);

  return [allProducts, setAllProducts];
};
export default useProduct;
