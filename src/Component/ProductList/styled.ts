import styled from "styled-components";

export const PageContainer = styled.div`
  font-family: 'Arial', sans-serif;
  padding: 2rem;
  background-color: #f4f4f9;
`;

export const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

export const ProductCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid #eee;
`;

export const ProductInfo = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ProductName = styled.h2`
  font-size: 1.25rem;
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
`;

export const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: #7f8c8d;
  margin: 0.5rem 0;
`;

export const ProductPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #27ae60;
  margin-top: auto;
`;

export const AddToCartButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  margin-top: 1rem;
  &:hover {
    background-color: #2980b9;
  }
`;