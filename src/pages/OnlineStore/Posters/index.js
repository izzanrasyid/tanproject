import React from 'react';
import styled from 'styled-components';
import pic1 from '../../../public/Shop/posterpict1.png';
import pic2 from '../../../public/Shop/posterpict2.png';
import Banner from './Banner';

const Container = styled.div`
  display: flex;
  padding: 5%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LeftPoster = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FAFAFA;
  box-shadow: -0.2px 3px 16px #EAEAEA;
  border-radius: 3px;
  padding-right: 1.25%;
`;

const RightPoster = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 1.25%;
`;

const Posters = () => {
  return (
    <Container>
      <LeftPoster>
        <h1>Poster Kiri</h1>
      </LeftPoster>
      <RightPoster>
        <Banner color={'rgba(76, 175, 80, 0.8)'} shadow={'-0.2px 3px 16px #EAEAEA'} image={pic1} />
        <Banner color={'#333849'} shadow={'0px 3px 16px rgba(234, 234, 234, 0.6)'} image={pic2} />
      </RightPoster>
    </Container>
  );
};

export default Posters;