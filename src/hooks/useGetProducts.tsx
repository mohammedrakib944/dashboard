import { useEffect, useState } from "react";
const useGetProducts = () => {
  const [products, setProducts] = useState<any>(null);

  async function getData() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log("There is an error fatching products");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return products;
};

export default useGetProducts;
