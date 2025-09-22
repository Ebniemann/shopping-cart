import styled from "styled-components";

export const PageContainer = styled.div`
  font-family: 'Arial', sans-serif;
  padding: 2rem;
  background-color: #f4f4f9;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem 2rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  color: #464646;
  text-align: center;
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
`;

export const Subtitle = styled.p`
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  font-size: 1.3rem;
  color: #6B6FA3;
  text-align: center;
  margin-bottom: 2rem;
`;


export const ButtonCart = styled.div`
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



