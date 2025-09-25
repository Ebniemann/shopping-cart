import styled from 'styled-components';

const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
};


export const Item = styled.div`
  display: flex;
  gap: 16px;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 6px;
    border: 1px solid #eee;
  }

  h2 {
    font-size: 1.1rem;
    color: #333;
    margin: 0 0 5px;
  }

  p {
    margin: 3px 0;
    color: #555;
    font-size: 0.9rem;
  }
`;
export const Buttons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  button {
    flex: 1;
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition: background 0.3s;

    &:first-of-type {
      background-color: #28a745;
      color: #fff;

      &:hover {
        background-color: #218838;
      }
    }

    &:last-of-type {
      background-color: #dc3545;
      color: #fff;

      &:hover {
        background-color: #c82333;
      }
    }
  }
`;
export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #222;
  padding-top: 1rem;
  border-top: 2px solid #eee;
`;
export const CartSidebar = styled.div`
  position: fixed;
  top: 75px; 
  right: 20px;
  width: 335px;
  height: 65vh; 
  background-color: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  z-index: 1000;
  padding: 1rem;
  display: flex;
  flex-direction: column;
@media (min-width: ${breakpoints.tablet}) {
 width: 350px;
 height: 80vh; 
   top: 50px; 
}
`;

export const CartHeader = styled.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h1 {
    font-size: 1.5rem;
    margin: 0;
    color: #333;
  }
`;
export const CartBody = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
  padding-right: 0.5rem;

  /* scroll bonito */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 3px;
  }
`;

export const CartFooter = styled.div`
  flex: 0 0 auto;
  margin-top: 1rem;
  padding-top: 0.5rem;
  border-top: 1px solid #eee;

  h2 {
    margin: 0;
    text-align: right;
    color: #000;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #888;

  &:hover {
    color: #555;
  }
`;
