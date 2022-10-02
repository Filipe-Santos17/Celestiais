import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  background-color: #FF0084;
  height: 15vh;

  h1{
    font-size: 3rem;
    text-transform: capitalize;
    margin-left: 2rem;
    font-weight: 700;
  }

  ul{
    font-size: 1.7rem;
    gap: 3rem;
    display: flex;
    margin-right: 2rem;

    li{
      border-radius: 0.5rem;
      padding: 10px 20px;

      &:last-child{
        background-color: #0E76A8;
      }
    }
  }
`;

export const Banner = styled.section`
  width: 100%;
  height: 85vh;
  position: relative;

  img{
    width: 100%;
    height: 100%;
  }

  .tard{
    display: flex;
    position: absolute;
    left: 60px;
    top: 3vh;
    align-items: center;
  }

  .tard-img{
    width: 600px;
    height: 600px;
  }

  .tard-text{
    color: #fff;
    
    h3{
      font-size: 13rem;
    }

    p{
      font-size: 3rem;
    }
  }
`;