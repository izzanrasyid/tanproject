import React from "react";
import styled from 'styled-components';
import { Text } from "../Text";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  padding: 5% 0;
`;

const Select = styled.select`
  border: 1px solid #E8E8E8;
  box-sizing: border-box;
  border-radius: 3px;
  padding: 5%;
`;

const Dropdown = ({title, list}) => {
  return (
    <Container>
      <TextWrapper>
        <Text size={'14px'} weight={'400'} color={'#333849'}>{title}</Text>
      </TextWrapper>
      <Select name={title} id={title}>
        {
          list.map((item, id) => <option value={item.title} key={id}>{item.title}</option>)
        }
      </Select>
    </Container>
  );
};

export default Dropdown;