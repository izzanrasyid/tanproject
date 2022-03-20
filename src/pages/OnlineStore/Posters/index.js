import React from 'react';
import pic1 from '../../../public/Shop/posterpict1.png';
import pic2 from '../../../public/Shop/posterpict2.png';
import Banner from './Banner';
import { Text } from '../../../components/Text';
import Product from "./Product";
import {
  Container,
  LeftPoster,
  RightPoster,
  TitleWrapper,
  PosterTitle
} from './styles';

const Posters = () => {
  return (
    <Container>
      <LeftPoster>
        <PosterTitle>
          <TitleWrapper>
            <Text size={'24px'} weight={'800'}>REKOMENDASI BUKU PALING LARIS</Text>
          </TitleWrapper>
          <Product />
        </PosterTitle>
      </LeftPoster>
      <RightPoster>
        <Banner color={'rgba(76, 175, 80, 0.8)'} shadow={'-0.2px 3px 16px #EAEAEA'} image={pic1} />
        <Banner color={'#333849'} shadow={'0px 3px 16px rgba(234, 234, 234, 0.6)'} image={pic2} />
      </RightPoster>
    </Container>
  );
};

export default Posters;