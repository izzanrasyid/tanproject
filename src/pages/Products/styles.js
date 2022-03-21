import styled from "styled-components";

export const Container = styled.div`
    background: linear-gradient(0deg, #FFFFFF 0%, #EDF7ED 51.98%, #FFFFFF 100%);
`;

export const TitleContainer = styled.div`
  padding: 5% 5% 0 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PictureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Picture = styled.div`
  background-image: ${({ img }) => `url(${img})`};
  background-repeat: no-repeat;
  background-size: cover;
  height: 235px;
  width: 345px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2% 0;
`;

export const TextWrapper = styled.div`
  padding: 2% 0;
  display: flex;
  justify-content: center;
`;