import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ color }) => color};
  flex: 1;
  box-shadow: ${({ boxShadow }) => boxShadow};
  border-radius: 3px;
  margin-bottom: 1%;
  display: flex;
`;

export const BannerInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5% 0 5% 5%;
  flex: 1;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: center;
  flex-wrap: wrap;
  padding: 1% 0;
`;

export const BannerPoster = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  flex: 1;
`;

export const PosterWrapper = styled.div`
  background-image: ${({ img }) => `url(${img})`};
  background-repeat: no-repeat;
  background-size: cover;
  height: 50%;
  width: 60%;
`;

export const ButtonWrapper = styled.div`
  margin: 5% 0;
`;