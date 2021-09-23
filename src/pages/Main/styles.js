import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #9eadc8;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 20px;

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 0 20px;
    transition: 0.3s;
  }

  li {
    background: #fff;
    border-radius: 10px;
    padding: 10px 0 10px 20px;
  }

  @media (max-width: 900px) {
    ul {
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      transition: 0.3s;
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  padding-right: 20px;

  p {
    color: #fff;
    width: 40px;
    text-align: center;
  }

  button {
    height: 40px;
    background: #065a9c;
    color: white;
    border-radius: 10px;
    padding: 0 10px 0 10px;
    transition: 0.3s;
  }

  button:disabled {
    opacity: 0.5;
    transition: 0.3s;
  }
`;
