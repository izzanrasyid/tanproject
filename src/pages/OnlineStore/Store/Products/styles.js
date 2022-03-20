import styled from 'styled-components';

export const Container = styled.div`
  flex: 9;
  padding: 0 5% 2.5% 2.5%;

  @media (max-width: 768px) {
    flex: 1;
  }
`;

export const SearchbarWrapper = styled.div`
  margin: 2% 0;
  background: #FFF;
  border-radius: 3px;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProductContainer = styled.div`
  background: #FFFFFF;
  border: 1px solid rgba(232, 232, 232, 0.535836);
  box-sizing: border-box;
  box-shadow: -0.2px 3px 16px #EAEAEA;
  border-radius: 3px;
  min-width: 20%;
  max-width: 28%;
  margin-bottom: 5%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  padding: 5% 5%;
  height: 400px;
  width: auto;
`;

export const Image = styled.div`
  background-image: ${({img}) => `url(${img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Information = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 5%;
`;

export const Wrapper = styled.div`
  padding: 4% 0;
  display: flex;
  align-items: center;
`;

export const OldPrice = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #000;
  text-decoration: line-through;
`;

export const RatingWrapper = styled.div`
  padding: 4% 0 8% 0;
  display: flex;
  align-items: center;
`;