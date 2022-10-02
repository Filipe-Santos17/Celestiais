import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  background-color: #664BB1;
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
      cursor: pointer;
      border-radius: 0.5rem;
      padding: 10px 20px;

      &:last-child{
        background-color: rgb(14, 118, 168, .4);
      }
      
    }

    .btnShow{
      cursor: pointer;
      border: 1px solid #664BB1;

      &:hover{
        border-color: #000;
      }
    }
  }
`;

export const Banner = styled.section`
  width: 100%;
  background: ${(props) => `url(${props.imgUrl})`}; 
  background-repeat: no-repeat;
  background-size: cover;
  height: 85vh;
  position: relative;

  img{
    width: 100%;
    height: 100%;
  }

  .tard{
    display: flex;
    position: absolute;
    grid-template-columns: repeat(2,1fr);
    left: 60px;
    top: 3vh;
    width: 100%;
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
      font-size: 2.5rem;
    }
  }
`;