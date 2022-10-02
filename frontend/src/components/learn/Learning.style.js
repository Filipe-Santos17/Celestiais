import styled from "styled-components";

export const Page = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 50px;
  background-color: #664BB1;

  h3 {
    font-size: 2rem;
    margin-bottom: 35px;
    color: #fff;
    text-align: center;
  }

  hr {
    width: 200px;
    height: 2px;
    background-color: #fff;
    margin-bottom: 70px;
    border: none;
  }
`;

export const ItemsLearn = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  place-content: center;

  li {
    padding: 0 30px;
    text-align: center;

    i {
      color: #fff;
      font-size: 50px;
      margin-bottom: 30px;
    }

    h4 {
      font-size: 1.5rem;
      color: #fff;
      margin-bottom: 30px;
    }

    p {
      color: #fff;
    }
  }

  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;
