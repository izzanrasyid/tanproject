import React from "react";
import {
  Container,
  BannerInfo,
  TextWrapper,
  BannerPoster,
  PosterWrapper,
  ButtonWrapper
} from './styles';
import Text from "../../../../components/Text/Span";
import Button from "../../../../components/Button";

const Banner = ({color, image, shadow}) => {
  return (
    <Container color={color} boxShadow={shadow}>
      <BannerInfo>
        <TextWrapper>
          <Text size={'24px'} weight={'800'} color={'#FFF'}>lOREM IPSUM BANNER</Text>
        </TextWrapper>
        <TextWrapper>
          <Text size={'12px'} weight={'400'} color={'#FFF'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius urna, viverra porttitor odio tellus gravida adipiscing massa sagittis. Nulla cras orci, consectetur fames nibh id lacus, felis massa. Ac amet massa ullamcorper sed augue mauris ut. Lorem nec dolor nulla tincidunt.
          </Text>
        </TextWrapper>
        <ButtonWrapper>
          <Button color={'#F9A825'} text={'READ MORE'}/>
        </ButtonWrapper>
      </BannerInfo>
      <BannerPoster>
        <PosterWrapper img={image} />
      </BannerPoster>
    </Container>
  );
};

export default Banner;