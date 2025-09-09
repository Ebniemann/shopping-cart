// styled.ts

import styled from 'styled-components';

export const CartSidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 350px; /* Ajusta el ancho a tu gusto */
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  padding: 2rem;
  overflow-y: auto;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
    border: 1px solid #eee;
  }

  h2 {
    flex-grow: 1; /* Permite que el título ocupe el espacio disponible */
    font-size: 1.2rem;
    color: #333;
    margin: 0;
  }

  p {
    margin: 5px 0;
    color: #666;
    font-size: 1rem;
    white-space: nowrap; /* Evita que el texto se rompa en varias líneas */
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }

    &:last-of-type {
      background-color: #dc3545; /* Estilo para el botón de 'Eliminar' o el último botón */
      &:hover {
        background-color: #c82333;
      }
    }
  }
`;

export const CartContainer = styled.div`
  /* Estilo para el contenedor principal del carrito */
  width: 25%;
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;

  h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }   

`;
export const Buttons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;