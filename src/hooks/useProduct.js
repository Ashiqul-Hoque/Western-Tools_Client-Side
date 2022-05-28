import { useEffect, useState } from "react";

const useProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://serene-wildwood-78626.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => setAllProducts(data));
  }, []);

  return [allProducts, setAllProducts];
};
export default useProduct;
