import styled from "styled-components";

export const PageContainer = styled.div`
  font-family: 'Arial', sans-serif;
  padding: 2rem;
  background-color: #f4f4f9;
  position: relative;
`;
export const ButtonCart = styled.div`
  position: absolute;
    right: 10px;
    top: 8px;
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    p {
         position: absolute;
    right: 26px;
    top: 5px;
      font-weight: bold;
      color: #000000;
    }
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

export const Image = styled.img`
position: absolute;
right: 10px;
top: 8px;
`;



