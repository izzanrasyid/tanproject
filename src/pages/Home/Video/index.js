import React from "react";
import styled from "styled-components";
import vid from "../../../public/video.png";
import playVid from "../../../public/playVideo.png";
import Text from "../../../components/Text/Span";

const Container = styled.div`
  display: flex;
  padding: 5%;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const SectionLeft = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 900px) {
    justify-content: center;
    align-items: center;
  }
`;

const SectionRight = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const PosterWrapper = styled.div`
  background-image: url(${playVid});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 340px;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 5% 0;
`;

const VideoWrapper = styled.div`
  background-image: url(${vid});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 400px;
`;

const Video = () => {
  return (
    <Container>
      <SectionLeft>
        <PosterWrapper />
        <TextWrapper>
          <Text size={'44px'} weight={'700'}>Video Trial TryOut Online</Text>
        </TextWrapper>
        <TextWrapper>
          <Text size={'16px'} weight={'400'} color={'#333849'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sed facilisis volutpat faucibus. Elit consectetur tempus, nunc sit purus diam. Facilisis platea molestie consectetur mattis molestie amet a volutpat. Et mollis at montes, adipiscing mi integer massa faucibus.
          </Text>
        </TextWrapper>
      </SectionLeft>
      <SectionRight>
        <VideoWrapper />
      </SectionRight>
    </Container>
  );
};

export default Video;