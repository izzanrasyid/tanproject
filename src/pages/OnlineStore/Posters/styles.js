import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 5%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LeftPoster = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  background: #FAFAFA;
  box-shadow: -0.2px 3px 16px #EAEAEA;
  border-radius: 3px;
  padding-right: 1.25%;
`;

export const RightPoster = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 1.25%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PosterTitle = styled.div`
  padding: 5%;
  align-items: center;
  width: 100%;
`;