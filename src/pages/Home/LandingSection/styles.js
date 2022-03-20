import styled from 'styled-components';
import bg from "../../../public/Fill.png";
import JS from "../../../public/JS.png"

export const Container = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10% 5%;
`;

export const Content = styled.div`
  display: flex;
  width: 80%;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContentLeft = styled.div`
  background: rgba(255, 255, 255, 0.8);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3%;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;

  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const ContentRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Poster = styled.div`
  background-image: url(${JS});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-text: center;
  background: #4CAF50;
  border-radius: 3px;
  padding: 3%;
  margin: 2% 2% 2% 0;
  cursor: pointer;
`;