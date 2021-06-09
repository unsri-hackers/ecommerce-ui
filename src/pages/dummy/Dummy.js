import React, { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import mocks from "../../mocks";
import ProductCard from "../../components/product-card/ProductCard";

const Dummy = () => {
  const [name, setName] = useState("arief");
  const [status, setStatus] = useState("single");

  const {
    data: product1,
    run: getProduct1
  } = useApi("https://deuvox.mocklab.io/api/v1/products/1", { mock: mocks.product });

  const { data: products } = useApi("https://deuvox.mocklab.io/api/v1/products", { mock: mocks.productList });

  const buttonOnClick = () => {
    setName("faisal");
  }

  useEffect(() => {
    if (name === "faisal") {
      setStatus("in relationship with amy");
      getProduct1();
    }
  }, [name, getProduct1]);

  return (
    <>
      <p>Product: {JSON.stringify(product1)}</p>
      <p>List of product:</p>
      <ul>
        {products && products.map(product => (
          <ol>{product.name} - Rp {product.price}</ol>
        ))}
      </ul>

      <p>
        {name} - {status}
      </p>
      <button onClick={() => buttonOnClick()}>click me</button>
      
      <ProductCard />
    </>
  );
};

export default Dummy;
