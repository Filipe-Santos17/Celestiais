import styled from 'styled-components';

export const SectionCard = styled.section`
  width: 280px;
  height: 389px;
  background: #F5F5F5;
  border-radius: 18px;

  .imgCard{
    width: 255px;
    height: 217px;
    border-radius: 14px;
    margin: 10px 12px;

    img{
      width: 100%;
      height: 100%;
    }
  }

  .textCard{
    margin-top: 40px;
    text-align: center;

    h4{
      font-size: 30px;
      font-weight: 700;
      line-height: 34px;
      margin-bottom: 20px;
    }

    ul{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 10px;

      li{
        border-radius: 6px;
        padding: 2px 3px;

        &:first-child{
          background-color: #11D276;
        }

        &:last-child{
          background-color: #B97FC9;
        }
      }
    }
  }
`;

export const ListCard = styled.section`
 margin-bottom: 50px;
 
 h3{
    margin: 40px 0;
    font-size: 40px;
    font-weight: 700;
    text-align: center;
  }

  .allCards{
    display: flex;
    gap: 20px;
  }
`;