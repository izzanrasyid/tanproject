import React from "react";
import styled from 'styled-components';
import { IconStar } from "../Icons";
import { Text } from "../Text";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const StarWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 2%;
`;

const Rating = ({rating, reviewers, type}) => {
  const sumOfStars = () => {
    const array = [];
    for (let i = 0; i < rating; i++) {
      array.push(i);
    };
    return array;
  };

  return (
    <Container>
      <StarWrapper>
        { sumOfStars().map((star) => <IconStar key={star} />) }
      </StarWrapper>
      {
        type === 'detail' ?
        <Text size={'12px'} color={'#9B9B9B'}>{`(${reviewers} reviews)`}</Text> :
        <Text size={'12px'} color={'#9B9B9B'}>{`(${reviewers})`}</Text>

      }
    </Container>
  );
};

export default Rating;