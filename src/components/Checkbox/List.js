import React from 'react';
import styled from 'styled-components';
import { Text } from '../Text';

const Container = styled.div`
  display: flex;
  padding: 2.5% 0;
`;

const Label = styled.label`
  color: #737373;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Side = styled.div`
  display: flex;
`;

const List = ({title, quantity}) => {
  return (
    <Container>
      <Wrapper>
        <Side>
          <input  type="checkbox" id={title} name={title} value={title}/>   
          <Label for={title}>{title}</Label>  
        </Side>
        <Side>
          <Text size={'14px'} weight={'400'} color={'#737373'}>{quantity}</Text>
        </Side>
      </Wrapper>
    </Container>
  );
};

export default List;