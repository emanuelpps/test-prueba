import React, { useEffect, useState } from "react";
import { ProductCard } from "./components/ProductCard";
import { getAllProducts } from "../../api/getAllProducts";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 100%;
  gap: 60px;
`;

export const Home: React.FC = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    const apiCall = async () => {
      const dataProducts = await getAllProducts();
      setAllProducts(dataProducts);
    };
    apiCall();
  }, []);
  return (
    <div>
      <h1>Esta es una Prueba</h1>
      <CardsContainer>
        {allProducts?.map((product, index) => (
          <ProductCard product={product} index={index} />
        ))}
      </CardsContainer>
    </div>
  );
};
