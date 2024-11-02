import { ApiTypes } from "../../../types/types";
import styled from "styled-components";

interface ProducCardProps {
  product: ApiTypes;
  index: number;
}

const ProductCardContainer = styled.div`
  width: 40%;
  background-color: #e3e3e3;
  border-radius: 20px;
  padding: 20px;
`;

const ProductImage = styled.img`
  width: 200px;
  border-radius: 20px;
`;

const TitleProduct = styled.h2`
  font-size: 2rem;
  color: black;
`;

const DetailsProduct = styled.p`
  font-size: 0.8rem;
  color: black;
`;

const PriceProduct = styled.p`
  font-size: 1.5rem;
  color: black;
  font-weight: 800;
`;
export const ProductCard: React.FC<ProducCardProps> = ({
  product,
  index: key,
}) => (
  <ProductCardContainer key={key}>
    <TitleProduct>{product.title}</TitleProduct>
    <DetailsProduct>{product.description}</DetailsProduct>
    <PriceProduct>${product.price}</PriceProduct>
    <ProductImage src={product.image} alt={product.title} />
  </ProductCardContainer>
);
