import React, { useContext, useEffect, useState } from "react";
import { CloudinaryContext } from "cloudinary-react";
import { Helmet } from "react-helmet";
import { useApi } from "../../hooks/useApi";
import mocks from "../../mocks";
import SiteContext from "../../providers/site/SiteContext";
import Product from "../../components/product-card/Product";
import OnGoingOrders from "../../components/on-going-orders/OnGoingOrders"

import ProductCategory from "../productCategories/ProductCategories";
import { openUploadWidget } from "../../utils/CloudinaryService";

const Dummy = () => {
  const [name, setName] = useState("arief");
  const [status, setStatus] = useState("single");

  const { isMobile } = useContext(SiteContext);

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


  const [imageURL, setImageURL] = useState();
  const beginUpload = (tag) => {
    const uploadOptions = {
      cloudName: "deuvox",
      tags: [tag],
      uploadPreset: "deuvox-products-unsigned",
      maxFiles: 1,
    };

    openUploadWidget(uploadOptions, (error, result) => {
      if (!error) {
        if (result.event === "success") {
          setImageURL(result.info.secure_url);
        }
      } else {
        alert(error);
      }
    });
  };

  return (
    <>
      <Helmet>
        <script
          src="https://widget.cloudinary.com/v2.0/global/all.js"
          type="text/javascript"
        ></script>
      </Helmet>

      <p>Product: {JSON.stringify(product1)}</p>
      <p>List of product:</p>
      <ul>
        {products && products.map(product => (
          <ol key={product.id}>{product.name} - Rp {product.price}</ol>
        ))}
      </ul>

      <p>
        {name} - {status}
      </p>
      <button onClick={() => buttonOnClick()}>click me</button>
      <p>Is Mobile? {String(isMobile)}</p>
      <Product />
      <OnGoingOrders />
      <ProductCategory />

      <CloudinaryContext cloudName="deuvox"></CloudinaryContext>
      <button onClick={() => beginUpload()}>Upload photos</button>
      <p>{imageURL}</p>
    </>
  );
};

export default Dummy;
