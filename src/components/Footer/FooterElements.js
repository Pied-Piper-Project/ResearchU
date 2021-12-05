import styled from 'styled-components';

export const Box = styled.div`

  padding: 80px 60px 0 60px;
  background: rgba(46,46,46,1);
  position: relative;
  bottom: 0;
  width: 100%;


  @media (max-width: 1000px) {
    padding: 70px 30px;
  }

`;

export const Box1 = styled.div`
  padding: 80px 60px;
  background: rgba(255, 0, 0, 0);
  position: relative;
  bottom: 0;
  width: 100%;


  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 12px;
  text-decoration: none;

  &:hover {
      color: #6654C4;
      transition: 0.1s ease-in-out;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
